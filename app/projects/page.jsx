import Image from "next/image"
import Link from "next/link"
import DefaultImage from "../../public/imgs/default-image-project.jpg"
import data from "../data.js"


export default function ProjectsPage() {

  const { projects } = data()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full">
      {projects.map(({ id, name, img, short_description }) => (
        <div className="ring-1 ring-white/[0.15] bg-gray-900 text-slate-50 w-72 h-96 shadow-lg m-4 p-4 rounded relative">
          <Image className="rounded-t" src={!img ? DefaultImage : img} alt={name} width={260} height={192} />
          <h3 className="font-semibold my-3 text-xl">{name}</h3>
          <p>{short_description}</p>
          <Link key={id} href='/projects/[id]' as={`/projects/${id}`} className="py-2 px-2 bg-indigo-500 rounded block text-center text-white font-semibold absolute bottom-4 right-4 left-4">Ver info</Link>
        </div>
      ))}
    </div>
  )
}
