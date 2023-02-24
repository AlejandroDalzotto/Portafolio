"use client"
import Image from 'next/image'
import DiplomaIcon from "@/public/icons/diploma.png"
import MyImage from "@/public/headshot.webp"
import Link from 'next/link'
import data from '@/data.json' assert { type: 'JSON' };
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  const { socials, educations } = data

  return (
    <main>
      <div className='container mx-auto'>

        {/* Home */}

        <div className="flex flex-col justify-center items-center min-h-[95vh]">
          <div className="flex justify-center md:items-center md:gap-14 relative">
            <Image src={MyImage} alt="headshot.jpg" className="hidden md:block md:w-[380px] md:h-[400px] rounded-3xl" priority={true} />

            <div className='flex flex-col gap-8 items-start'>
              <h2 className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-4xl font-bold leading-[1.1] text-transparent text-center md:text-left">Portafolio de Presentación</h2>
              <p className="font-medium text-lg text-center text-[#cfdbd5]">Hola, mi nombre es Alejandro Dalzotto, y soy programador Full Stack.</p>
              <div className='flex justify-center gap-5 w-full md:justify-start'>
                <Link className='flex items-center justify-center text-xl text-neutral-900 font-bold py-1 px-4 bg-[#f5cb5c] border-[#f5cb5c] shadow border-2 transition-all rounded hover:border-[#f5cb5c] hover:bg-neutral-900 hover:text-[#f5cb5c]' href="https://files.deply.dev/files/8eddc4eb-6e2d-4b1e-9c67-91764d7ff048-a2fa7a94-6069-4583-bdc2-6286f6da621f-CV_V3.pdf" download>Ver CV</Link>
                <Link className='flex items-center justify-center text-xl text-[#f5cb5c] font-bold py-1 px-4 bg-neutral-900 border-2 border-[#f5cb5c] transition-all rounded hover:border-[#f5cb5c] shadow hover:bg-[#f5cb5c] hover:text-neutral-900' href="mailto:aledalzotto15@gmail.com">Contacto</Link>
              </div>
              <div className="flex justify-center gap-5 w-full md:justify-start">
                {socials.map((item, idx) => {
                  return (
                    <Link key={idx} className="ring-2 ring-[#242423]/[33] bg-neutral-900 w-10 h-10 flex items-center justify-center rounded-full transition-all hover:ring-[#f5cb5c]/[50] hover:scale-105" href={item.link} target="_blank">
                      <Image src={item.icon} alt="icon" width={20} height={20} className="invert" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* About me */}

      <div className="w-full h-auto py-32 bg-[#f5cb5c]">
        <div className='container mx-auto flex flex-col md:flex-row gap-12 items-center justify-center'>
          <RoughNotation type="highlight" show={true} color="#171717" padding={30}>
            <h2 className="text-[#f5cb5c] text-5xl font-bold leading-[1.2] tracking-wider text-center my-2">Sobre mí</h2>
          </RoughNotation>
          <div className='text-neutral-700 font-medium tracking-tight text-xl p-2 max-w-[60ch]'>
            <p>Me he desempeñado como aprendiz de desarrollo de software durante 2 años y mi objetivo es seguir mejorando mi nivel como desarrollador. Soy proactivo, confiable, me gusta trabajar en equipo y siempre dar mi mejor esfuerzo.<br />
            </p><p>Soy de Argentina egresado de Técnico en Programación en la Universidad Tecnológica Nacional.</p>
          </div>
        </div>
      </div>

      {/* Education */}

      <div className='w-full h-auto py-36'>
        <div className="flex flex-col items-center container mx-auto">
          <RoughNotation type="highlight" show={true} color="#f5cb5c">
            <h2 className="text-[#171717] text-5xl font-bold leading-[1.2] tracking-wider text-center my-1">Educación</h2>
          </RoughNotation>
          <div className="flex flex-wrap gap-5 justify-center mt-10">

            {educations.map((item, idx) => {
              return (

                <div key={idx} className="ring-2 ring-[#242423]/[33] bg-neutral-900 w-72 h-96 shadow-lg m-4 p-4 rounded relative transition-all hover:ring-[#f5cb5c]/[50]">
                  <Link href={item.link} target="_blank" className="absolute top-4 right-4">
                    <Image src={DiplomaIcon} alt="icon" width={30} height={30} className="invert" />
                  </Link>
                  <h2 className="text-[#f5cb5c] font-medium tracking-tighter text-xl h-[15%]">{item.title}</h2>
                  <hr className="bg-[#cfdbd5] h-[1%] w-full my-6" />
                  <p className="text-[#cfdbd5] h-[calc(100%-1%-15%)]">{item.description}</p>
                </div>

              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
