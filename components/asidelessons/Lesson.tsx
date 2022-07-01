import Link from "next/link";
import { isPast, format} from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";


interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
    activeLesson: boolean;
}

export default function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'dd'/'MM'/'yyyy' • 'k'h'mm",
    {
        locale: ptBR,
    });

    const isActiveLesson = props.activeLesson;

    return (
        <Link href={`/event/lesson/${props.slug}`}>
            <a className={`group ${isLessonAvailable ? '' : 'pointer-events-none cursor-not-allowed'}`}>
                <span className="text-gray-300 group-hover:text-gray-400">
                    {availableDateFormatted.charAt(0).toUpperCase() + availableDateFormatted.substring(1).replace('-feira', '')}
                </span>

                <div className={`rounded border p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500 border-blue-300' : 'border-gray-300 dark:border-gray-500' }`}>
                    <header className="flex items-center justify-between">
                        {isLessonAvailable ? (
                            <span className={`flex items-center gap-2 text-sm ${isActiveLesson ? 'text-blue-100' : 'text-blue-500'} font-medium`}>
                                <CheckCircle size={20}/>
                                Conteúdo liberado
                            </span>
                            ) : (
                            <span className='flex items-center gap-2 text-sm text-orange-500 font-medium'>
                                <Lock size={20}/>
                                Em breve
                            </span>
                        )}
                        <span className={`text-xs rounded px-2 py-[0.125rem] text-white border ${isActiveLesson ? 'border-green-' : 'border-green-300'} font-bold uppercase`}>
                            {props.type == 'live' ? 'ao vivo' : 'aula prática'}
                        </span>
                    </header>
                    <strong className={`${isActiveLesson ? 'text-white' : 'text-gray-200'} mt-5 block`}>
                        {props.title}
                    </strong>
                </div>
            </a>
        </Link>
    )
}