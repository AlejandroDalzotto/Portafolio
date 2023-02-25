"use client"
import Image from 'next/image'
import DiplomaIcon from "@/public/icons/diploma.png"
import MyImage from "@/public/headshot.webp"
import Link from 'next/link'
import data from '@/data.json' assert { type: 'JSON' };
import { RoughNotation } from "react-rough-notation";
import './globals.css'

export default function Home() {
  const { socials, educations } = data

  return (
    <main>
      <div className='w-full relative'>

        <div className='container mx-auto'>

          {/* Home */}

          <div className="flex flex-col justify-center items-center min-h-[95vh] w-full">
            <div className="flex justify-center md:items-center md:gap-14 relative">
              <div className='hidden xl:block'>
                <RoughNotation type="bracket" brackets={['left', 'right']} show={true} color="#f5cb5c" padding={10} strokeWidth={2}>
                  <Image src={MyImage} alt="headshot.jpg" className="md:w-[380px] md:h-[400px] rounded-3xl" priority={true} />
                </RoughNotation>
              </div>

              <div className='flex flex-col gap-8 items-start'>
                <h2 className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-4xl font-bold leading-[1.1] text-transparent text-center md:text-left">Portafolio de Presentación</h2>
                <p className="font-medium text-lg text-center text-[#cfdbd5]">Hola, mi nombre es Alejandro Dalzotto, y soy programador Full Stack.</p>
                <div className='flex justify-center gap-1 md:gap-5 w-full md:justify-start'>
                  <Link className='flex items-center justify-center text-center md:text-xl text-neutral-900 font-bold py-1 px-4 bg-[#f5cb5c] border-[#f5cb5c] shadow border-2 transition-all rounded hover:border-[#f5cb5c] hover:bg-neutral-900 hover:text-[#f5cb5c]' href="https://files.deply.dev/files/104ceaae-eb25-4c5f-b57e-a4df969ae199-5deda27d-16a6-48f6-9a13-c5e306df9149-CV_3.pdf" download>¡Échale un vistazo a mi CV!</Link>
                  <Link className='flex items-center justify-center md:text-xl text-[#f5cb5c] font-bold py-1 px-4 bg-neutral-900 border-2 border-[#f5cb5c] transition-all rounded hover:border-[#f5cb5c] shadow hover:bg-[#f5cb5c] hover:text-neutral-900' href="mailto:aledalzotto15@gmail.com">¡Contáctame!</Link>
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
        <div className="custom-shape-divider-bottom-1677341624">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      {/* About me */}

      <div className="w-full h-auto py-32 bg-[#f5cb5c]">
        <div className='container mx-auto flex flex-col md:flex-row gap-12 items-center justify-center'>
          <RoughNotation type="box" show={true} color="#171717" padding={30}>
            <h2 className="text-[#171717] text-5xl font-bold leading-[1.2] tracking-wider text-center my-2">Sobre mí</h2>
          </RoughNotation>
          <div className='text-neutral-700 font-medium tracking-tight text-xl p-2 max-w-[60ch]'>
            <p>Me he desempeñado como aprendiz de desarrollo de software durante 2 años y mi objetivo es seguir mejorando mi nivel como desarrollador. Soy proactivo, confiable, me gusta trabajar en equipo y siempre dar mi mejor esfuerzo.</p>
            <p>Soy de Argentina egresado de Técnico en Programación en la Universidad Tecnológica Nacional.</p>
          </div>
        </div>
      </div>

      {/* Education */}

      <div className='w-full h-auto py-36 relative'>
        <div className="flex flex-col items-center container mx-auto">
          <RoughNotation type="highlight" show={true} color="#f5cb5c">
            <h2 className="text-[#171717] text-5xl font-bold leading-[1.2] tracking-wider text-center my-1">Educación</h2>
          </RoughNotation>
          <div className="flex flex-wrap gap-5 justify-center mt-10">

            {educations.map((item, idx) => {
              return (

                <div key={idx} className="ring-2 ring-[#242423]/[33] w-72 h-96 shadow-lg m-4 p-4 rounded relative transition-all hover:ring-[#f5cb5c]/[50]">
                  <Link href={item.link} target="_blank" className="absolute top-4 right-4">
                    <Image src={DiplomaIcon} alt="icon" width={30} height={30} className="invert" />
                  </Link>
                  <h2 className="text-[#f5cb5c] font-medium tracking-tighter text-xl h-[15%]">{item.title}</h2>
                  <hr className="bg-[#cfdbd5] h-[1%] w-full my-6" />
                  <p className="text-[#cfdbd5] h-[calc(100%-1%-15%)]">{item.description}</p>

                  <div className="custom-shape-divider-top-1677342557">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                  </div>

                  <div className="custom-shape-divider-bottom-1677342378">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                  </div>
                </div>

              )
            })}
          </div>
        </div>

        <div className="custom-shape-divider-top-1677341655">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    </main>
  )
}
