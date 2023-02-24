import Link from "next/link.js"
import Image from "next/image.js"
import EyeIcon from "@/public/icons/eye-solid.svg"
import GithubIcon from "@/public/icons/github.svg"
import data from '@/data.json' assert { type: 'JSON' };

export default function DetailsProject({ id }) {

    const { projects } = data

    const project = projects[id - 1]

    // ring-2 ring-[#242423]/[33] bg-neutral-900 w-72 h-96 shadow-lg m-4 p-4 rounded relative transition-all hover:ring-[#f5cb5c]/[50]
    // paragraph: text-[#cfdbd5]
    // headers: text-[#f5cb5c]

    return (
        <article>
            <div>
                <h2 className="text-center my-6 text-4xl font-bold text-[#f5cb5c]">{project && project.name}</h2>
                <p className="text-center my-6 font-medium text-[#cfdbd5]">{project && project.description}</p>
                <div className="flex overflow-x-auto p-4 h-80 gap-4 md:gap-6 md:justify-center">
                    <div className="ring-2 ring-[#242423]/[33] bg-neutral-900 p-4 shadow rounded-xl min-w-[80%] md:min-w-[20%] transition-all lg:hover:min-w-[45%] hover:ring-[#f5cb5c]/[50]">
                        <h3 className="text-[#f5cb5c] text-xl font-semibold">Tecnologías</h3>
                        <hr className="h-1 my-2 w-full bg-[#cfdbd5]" />
                        <div className="w-full h-[calc(100%-16px-28px)] grid grid-cols-2 lg:grid-cols-3 content-start justify-items-stretch">
                            {project && project.technologies.map((el, idx) => {
                                return (
                                    <p key={idx} className="text-[#cfdbd5]">{el}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div className="ring-2 ring-[#242423]/[33] bg-neutral-900 p-4 shadow rounded-xl min-w-[80%] md:min-w-[20%] transition-all lg:hover:min-w-[45%] hover:ring-[#f5cb5c]/[50]">
                        <h3 className="text-[#f5cb5c] text-xl font-semibold">Recursos</h3>
                        <hr className="h-1 my-2 w-full bg-[#cfdbd5]" />
                        <div className="w-full h-[calc(100%-16px-28px)] grid grid-cols-2 lg:grid-cols-3 content-start justify-items-stretch">
                            {project && project.resources.map((el, idx) => {
                                return (
                                    <p key={idx} className="text-[#cfdbd5]">{el}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <h2 className="text-xl text-center font-semibold my-4 text-[#f5cb5c]">Contribuidores</h2>
                <div className="my-6 px-4 grid grid-cols-2 md:grid-cols-3 gap-8 md:justify-items-center">
                    {project && project.contributors.map((el, idx) => {
                        return (
                            <div key={idx} className="ring-2 ring-[#242423]/[33] bg-neutral-900 p-4 shadow rounded-xl w-44 lg:w-60 transition-all hover:ring-[#f5cb5c]/[50]">
                                <h3 className="text-[#f5cb5c] text-lg font-semibold tracking-tight">{el.username}</h3>
                                <hr className="h-1 my-2 w-full bg-[#cfdbd5]" />
                                <Link href={el.profile} target='_blank' className="text-[#e8eddf]">Ir al Perfil</Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="bg-neutral-900 h-20 flex items-center justify-evenly fixed bottom-0 left-0 right-0">
                {project && project.demo !== null ?
                    <Link href={project.demo} target='_blank' className="-translate-y-10 ring-2 ring-[#242423]/[33] bg-neutral-900 transition-all hover:ring-[#f5cb5c]/[50] p-4 hover:scale-105 w-16 h-16 flex items-center justify-center rounded-full">
                        <Image src={EyeIcon} className="invert" alt="icon" />
                    </Link> : null}
                {project && project.repository !== null ?
                    <Link href={project.repository} target='_blank' className="-translate-y-10 ring-2 ring-[#242423]/[33] bg-neutral-900 transition-all hover:ring-[#f5cb5c]/[50] p-4 hover:scale-105 w-16 h-16 flex items-center justify-center rounded-full">
                        <Image src={GithubIcon} className="invert" alt="icon" />
                    </Link> : null}
            </div>
        </article>
    )
}
