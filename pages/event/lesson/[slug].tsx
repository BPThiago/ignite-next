import { gql } from "@apollo/client";
import { getSession } from "next-auth/react";
import { Header } from "../../../components/Header";
import LessonList from "../../../components/asidelessons/LessonList";
import Video from "../../../components/video/Video";
import { initializeApolloSSR } from "../../../lib/apollo";
import { isFuture } from 'date-fns'
import { useContext } from "react";
import { ShowLessonListContext } from "../../../context/showLessonList";
import Head from "next/head";

const GET_LESSON_BY_SLUG_QUERY = gql`
    query ($slug: String) {
        lesson(where: {slug: $slug}) {
            title
            videoId
            description
            availableAt
            extra {
              url
            }
            teacher {
                bio
                avatarURL
                name
                teacherGitHub
            }
        }
    }
`

const GET_FIRST_LESSON_SLUG_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED, first: 1) {
            slug
        }
    }
`

interface GetLessonBySlugResponse {
    title: string;
    videoId: string;
    description: string;
    availableAt: string;
    extra: {
        url: string;
    };
    teacher: {
        bio: string;
        avatarURL: string;
        name: string;
        teacherGitHub?: string;
    };
}


export async function getServerSideProps(context: any) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            }
        }
    }

    const apolloClient = initializeApolloSSR();

    let response = await apolloClient.query(
        {
            query: GET_LESSON_BY_SLUG_QUERY,
            variables: {
                slug: context.params.slug
            }
        },
    )

    let lesson = response.data.lesson
    if (!lesson || isFuture(new Date(lesson.availableAt))) {
        response = await apolloClient.query({
            query: GET_FIRST_LESSON_SLUG_QUERY
        })
        
        return {
            redirect: {
                destination: `/event/lesson/${response.data.lessons[0].slug}`,
                permanent: false,
            }
        }
    }

    return {
        props: {
            slug: context.params.slug,
            lesson
        },
    }
}

export default function Lesson({slug, lesson}:{slug: string, lesson: GetLessonBySlugResponse}) {
    const {showLessonList} = useContext(ShowLessonListContext)
    return (
        <>
            <Head>
                <title>
                    Ignite Lab | {lesson.title}
                </title>
            </Head>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <main className="flex flex-1 relative">
                    {slug ? <Video lesson={lesson}/> : <div className={"flex-1 dark:bg-gray-900 dark:text-gray-100"}/>}
                    <aside className="hidden lg:block w-[348px] bg-gray-500 dark:bg-gray-700 p-6 border-l border-l-gray-400 dark:border-l-gray-600 text-gray-100">
                        <LessonList activeLesson={slug}/>
                    </aside>

                    <div className={`${showLessonList ? 'block' : 'hidden'} w-full h-full lg:hidden bg-gray-500 dark:bg-gray-700 p-6 text-gray-100 absolute z-1`}>
                        <LessonList activeLesson={slug}/>
                    </div>
                </main>
            </div>
        </>
    )
}