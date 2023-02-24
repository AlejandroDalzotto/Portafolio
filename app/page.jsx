import Image from 'next/image'
import MyImage from "@/public/headshot.jpg"
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center h-[75%] mt-32 md:mt-10 xl:mt-[calc(80px+10vh)]">
        <figure className="flex flex-col gap-5 items-center">
          <Image src={MyImage} alt="headshot.jpg" className="ring-2 ring-[#242423]/[33] w-40 h-40 md:w-60 md:h-60 rounded-full transition-all hover:ring-[#f5cb5c]/[50] hover:scale-105" priority={true} />

          <figcaption>
            <h2 className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-4xl font-bold leading-[1.2] text-transparent text-center my-6">Portafolio de Presentación</h2>
            <p className="font-medium text-lg my-6 px-6 text-center text-[#cfdbd5]">Hola, mi nombre es Alejandro Dalzotto, y soy programador Full Stack.</p>
          </figcaption>
        </figure>

        <div className='flex gap-5'>
          <Link className='text-[#e8eddf] font-bold py-2 px-6 border-2 border-black/25 transition-all rounded hover:border-[#f5cb5c] shadow hover:bg-[#f5cb5c] hover:text-neutral-900' href="https://files.deply.dev/files/8eddc4eb-6e2d-4b1e-9c67-91764d7ff048-a2fa7a94-6069-4583-bdc2-6286f6da621f-CV_V3.pdf" download>Ver CV</Link>
          <Link className='text-[#e8eddf] font-bold py-2 px-6 border-2 border-black/25 transition-all rounded hover:border-[#f5cb5c] shadow hover:bg-[#f5cb5c] hover:text-neutral-900' href="mailto:aledalzotto15@gmail.com">Contacto</Link>
        </div>
      </div>
    </main>
  )
}
