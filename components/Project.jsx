import Link from "next/link"
import Image from "next/image"

export default function Project({ project, ...props }) {
    
    return (
        <article className="ring-2 ring-[#242423]/[33] bg-neutral-900 w-72 h-96 shadow-lg m-4 p-4 rounded relative transition-all hover:ring-[#f5cb5c]/[50]">
            {project.img && <Image className="rounded-t h-[170px]" src={project.img} width={260} height={170} alt="project_image" />}
            <h3 className="font-bold my-3 text-xl text-[#f5cb5c]">{project.name}</h3>
            <p className="text-[#cfdbd5]">{project.short_description}</p>
            <Link href='/projects/[id]' as={`/projects/${project.id}`} className="py-2 px-2 bg-[#333533] rounded block text-center text-[#e8eddf] font-semibold absolute bottom-4 right-4 left-4 transition-all hover:scale-105">Ver info</Link>
        </article>
    )
}
