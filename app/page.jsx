import Image from "next/image"
import MyImage from "@/public/profile.jpg"

export default function Home() {
  return (
    <div className="flex items-center h-[75%] justify-center mt-32 md:mt-10 xl:mt-[calc(80px+10vh)]">
      <figure className="flex flex-col gap-5 items-center">
        <Image src={MyImage} alt={MyImage} className="w-40 h-40 md:w-60 md:h-60 rounded-[50%] shadow-lg" priority="true" />

        <figcaption className="">
          <h2 className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-4xl font-bold leading-[1.2] text-transparent text-center my-6">Portafolio de Presentación</h2>
          <p className="font-medium text-lg my-6 px-6 text-center text-slate-400">Hola, mi nombre es Alejandro Dalzotto, y soy programador Full Stack.</p>
        </figcaption>
      </figure>
    </div>
  )
}
