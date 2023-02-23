import Link from "next/link"
import Image from "next/image"

export default function Project({ project, ...props }) {

    return (
        <article className="ring-1 ring-white/[0.15] bg-gray-900 text-slate-50 w-72 h-96 shadow-lg m-4 p-4 rounded relative">
            {project.img && <Image className="rounded-t" src={project.img} width={260} height={192} />}
            <h3 className="font-semibold my-3 text-xl">{project.name}</h3>
            <p>{project.short_description}</p>
            <Link href='/projects/[id]' as={`/projects/${project.id}`} className="py-2 px-2 bg-indigo-500 rounded block text-center text-white font-semibold absolute bottom-4 right-4 left-4">Ver info</Link>
        </article>
    )
}
