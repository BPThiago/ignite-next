import dynamic from "next/dynamic";
import Link from "next/link";
import { Lightning, FileArrowDown, CaretRight, TwitterLogo } from "phosphor-react";
import Footer from "../Footer";

interface VideoLesson {
    title: string;
    videoId: string;
    description: string;
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

export default function Video({lesson}: {lesson: VideoLesson}) {
    const Player = dynamic(() => import('./VideoPlayer'), {
        ssr: false
    })

    return (
        <div className="flex flex-col flex-1 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-center bg-black">
                <div className="bg-gray-500 h-full w-full max-w-[768px] max-h-[60vh] aspect-video relative z-0">
                    <Player id={lesson.videoId}/>
                </div>
            </div>

            <div className="p-4 lg:p-8 max-w-[1100px] mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {lesson.title}
                        </h1>
                        <p className="mt-4 dark:text-gray-200 text-gray-500 leading-relaxed">
                            {lesson.description}
                        </p>
                        {lesson.teacher.avatarURL && (
                        <div className="flex items-center gap-4 mt-6">
                            <img src={lesson.teacher.avatarURL} alt="teacher img"
                                className="h-16 w-16 rounded-full border-2 border-blue-500"/>

                            <div className="leading-relaxed">
                                { lesson.teacher.teacherGitHub ?
                                <Link href={lesson.teacher.teacherGitHub}>
                                    <a className="text-2xl block font-bold">
                                        {lesson.teacher.name}
                                    </a>
                                </Link>
                                :
                                <strong className="text-2xl block">
                                    {lesson.teacher.name}
                                </strong>
                                }
                                <span className="dark:text-gray-200 text-gray-500 text-sm block">{lesson.teacher.bio}</span>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="flex w-full md:w-auto flex-col gap-4">
                        <a href={`https://twitter.com/intent/tweet?text=Assistindo a aula ${lesson.title} do ignitelab!&hashtags=rocketseat,ignite,ignitelab`} className="p-4 w-full md:w-auto text-sm bg-blue-600 text-gray-100 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-blue-700 transition-colors">
                            <TwitterLogo size={24} weight="fill"/>
                            Compartilhe no Twitter
                        </a>
                        <a href={lesson.extra.url} className="p-4 w-full md:w-auto text-sm border bg-red-300 border-red-600 text-red-600 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-red-400 transition-colors">
                            <Lightning size={24} />
                            Conteúdo extra
                        </a>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-1 lg:grid-cols-2">
                    <a href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5" className="bg-gray-200 dark:bg-gray-700 dark:text-gray-100 rounded flex items-stretch justify-between hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <div className="bg-green-500 dark:bg-green-700 text-gray-200 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 pl-3">
                            <strong className="text-2xl capitalize">Material Complementar</strong>
                            <p className="leading-relaxed text-sm text-gray-700 dark:text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desempenho
                            </p>
                        </div>
                        <div className="h-full pl-2 lg:pl-0 pr-5 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                    <a href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR" className="bg-gray-200 dark:bg-gray-700 dark:text-gray-100  rounded flex items-stretch justify-between hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <div className="bg-green-500 dark:bg-green-700 text-gray-200 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-4 pl-2">
                            <strong className="text-2xl capitalize">Wallpapers exclusivos</strong>
                            <p className="leading-relaxed text-sm text-gray-700 dark:text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className="h-full pl-2 lg:pl-0 pr-5 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}