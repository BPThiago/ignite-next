import Image from "next/image";

export default function Page404() {
    return (
        <div className="bg-gray-700 text-gray-100">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen items-center p-4 gap-5 max-w-[1100px]">
                <div className="flex flex-col items-center text-5xl md:text-6xl uppercase font-extrabold gap-5">
                    <span>Don't panic!</span>
                    <div className="relative md:w-[12rem] md:h-[18rem]">
                        <Image src="/images/marvin.png" layout="fill" className="-scale-x-100"/>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-lg max-w-[500px]">
                    <span className="uppercase font-bold text-purple-600 text-5xl md:text-6xl mb-6">Código 4-0-4</span>
                    <span className="text-3xl font-semibold uppercase">Não é um teste, repito, não é um teste!</span>
                    <span className="text-green-400">Administrador responde:</span>
                    <p className="">Por mais que você esteja buscando a resposta da vida, do universo e de tudo mais, você foi longe demais...</p>
                    <p className="text-gray-300">Para retornar a um local seguro, clique no botão abaixo.</p>
                    <button className="bg-purple-700 w-fit px-10 py-3 rounded-md mx-auto hover:bg-purple-600 transition-colors">O Início</button>
                </div>
            </div>
        </div>
    )
}