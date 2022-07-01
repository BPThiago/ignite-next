import Link from "next/link";
import RSLogo from "./svg/RSLogo";

export default function Footer() {
    return (
        <div className="flex justify-center w-full bg-gray-500 text-gray-200 dark:bg-gray-700 dark:text-gray-300 flex-1">
            <div className="max-w-[1440px] w-full mx-6 py-6 gap-6 flex flex-col md:flex-row justify-between items-center h-fit border-t border-t-gray-500">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center h-fit">
                    <RSLogo/>
                    <span>
                        <Link href="https://www.rocketseat.com.br/"><a className="hover:text-green-500 transition-colors">Rocketseat</a></Link> - Todos os direitos reservados
                    </span>
                </div>
                <div className="flex justify-center h-fit">
                    <Link href="https://www.rocketseat.com.br/privacy">
                        <a className="hover:text-green-500 transition-colors">
                            Políticas de privacidade
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}