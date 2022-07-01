import type { NextPage } from 'next'
import IgniteLogo from '../components/svg/IgniteLogo';
import { useSession, signIn, signOut } from "next-auth/react"
import { GithubLogo, GoogleLogo } from "phosphor-react"
import Image from 'next/image';
import Link from 'next/link';
import ReactIcon from '../components/svg/ReactIcon';
import Footer from '../components/Footer';
import Head from 'next/head';

const Home: NextPage = () => {
  const {data: session, status} = useSession()
  return (
    <>
      <Head>
        <title>Ignite Lab</title>
      </Head>
      <div className="min-h-screen bg-blur bg-gray-900 text-gray-100 bg-cover bg-no-repeat flex flex-col items-center">
        <div className='top-0 absolute w-full flex justify-center'>
          <ReactIcon/>
        </div>
        <div className="w-full max-w-[1100px] flex items-center flex-wrap md:flex-nowrap justify-center md:justify-between mt-20 sm:px-2 gap-10 md:gap-2 mx-auto z-[1]">
          <div className="max-w-[640px] px-2 md:px-0">
              <IgniteLogo/>
              <h1 className="mt-8 text-[2.5rem] leading-tight">
                  Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
              Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
              </p>
          </div>
          <div className="py-8 px-10 bg-gray-700 border-y sm:border border-gray-500 md:rounded md:min-w-[15rem] md:max-w-[20rem] flex-1">
              { session ?
              <>
              <strong className="text-2xl mb-6 block">Entrou como:</strong>
              <div className='flex flex-row items-center gap-3'>
                { session.user?.image &&
                <div className="min-w-[4rem] min-h-[4rem] rounded-full border-2 border-gray-300 relative overflow-hidden">
                  <Image src={session.user?.image} layout="fill"/>
                </div>
                }
                <span className='font-bold text-lg'>{session.user?.name}</span>
              </div>
              <Link href="/event/lesson/first-lesson">
                <button
                  className="w-full mt-4 bg-green-600 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors">
                      Aulas
                </button>
              </Link>
              <button
                onClick={() => signOut()}
                className="w-full mt-4 bg-red-600 uppercase py-4 rounded font-bold text-sm hover:bg-red-700 transition-colors">
                    Sair
              </button>
              </>
              :
              status == "loading" ?
              <div className='m-auto relative min-h-[10rem] max-h-[12rem] min-w-[10rem] max-w-[12rem] aspect-square'>
                <Image src={'/images/loading.gif'} layout="fill" />
              </div>
              :
              <>
                <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                
                <button
                onClick={() => signIn("github")}
                className="w-full flex items-center justify-center gap-4 mt-4 bg-blue-700 uppercase py-4 rounded font-bold text-sm hover:bg-blue-600 transition-colors">
                  <GithubLogo className='text-lg' weight='fill' />
                  GitHub
                </button>

                <button
                onClick={() => signIn("google")}
                className="w-full flex items-center justify-center gap-4 mt-4 bg-red-700 uppercase py-4 rounded font-bold text-sm hover:bg-red-600 transition-colors">
                  <GoogleLogo className='text-lg' weight='bold' />
                  GMail
                </button>
              </>
            }
          </div>
        </div>
        <img src="/images/blur-monitor.png" className="my-2" alt="Monitor" />
        <Footer/>
      </div>
    </>
  )
}

export default Home
