import DiplomaIcon from "../../public/icons/diploma.png"
import Image from "next/image"
import Link from "next/link"

const education = [
  {
    id: 1,
    title: 'Técnico en Programación',
    description: 'Esta carrera me ofrecio conocimientos y prácticas intensivas en diferentes tecnologías que me permiten analizar un problema de procesamiento de datos y desarrollar una solución en un lenguaje apropiado.',
    link: 'https://files.deply.dev/files/baa83db5-e885-4385-94de-a1b939b0b07c-520ceb42-5a7b-41c3-ab63-71bf903de69a-certificado.jpg'
  }
]

export default function EducationPage() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl font-bold leading-[1.2] tracking-wider text-transparent text-center my-6">Educación</h2>
        {education.map(({ id, title, description, link }) => (

          <div key={id} className="ring-1 ring-white/[0.15] bg-gray-900 text-slate-50 w-72 h-96 shadow-lg m-4 p-4 rounded relative">
            <Link href={link} target="_blank" className="absolute top-4 right-4">
              <Image src={DiplomaIcon} alt="icon" width={30} height={30} className="invert" />
            </Link>
            <h2 className="text-slate-50 font-medium tracking-tight text-2xl">{title}</h2>
            <hr className="bg-slate-50 h-1 w-full my-6" />
            <p className="text-slate-400">{description}</p>
          </div>

        ))}
      </div>
    </div>
  )
}
