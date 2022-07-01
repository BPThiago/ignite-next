import { gql, useQuery } from "@apollo/client"
import Link from "next/link";
import Lesson from "./Lesson";

const GET_LESSONS_QUERY = gql`
    query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
        id
        slug
        title
        availableAt
        lessonType
    }
    }
`

interface GetLessonsQuery {
    lessons: {
        id: string;
        title: string;
        slug: string;
        availableAt: string;
        lessonType: "live" | "class"
    }[]
}

export default function LessonList({activeLesson}: {activeLesson: string}) {
    const { data } = useQuery<GetLessonsQuery>(GET_LESSONS_QUERY);
    return (
        <>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-b-gray-400 dark:border-b-gray-500 block">
                Cronograma das aulas
            </span>

            <div className="flex flex-col gap-8">
            {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                            activeLesson={activeLesson == lesson.slug}
                        />
                    )
                })}
            </div>
            <div className=" border-t border-t-gray-400 dark:border-t-gray-500 pt-6 mt-6">
                <Link href="/">
                    <strong className="block text-center border border-red-600 hover:bg-red-700 cursor-pointer text-lg p-4 rounded uppercase transition-colors">
                        Voltar para o menu
                    </strong>
                </Link>
            </div>
        </>
    )
}