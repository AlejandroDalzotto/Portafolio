import Link from "next/link.js"
import Image from "next/image.js"
import EyeIcon from "@/public/icons/eye-solid.svg"
import GithubIcon from "@/public/icons/github.svg"

export default function DetailsProject(props: any) {

    const { project } = props

    return (
        <article>
            <div>
                <h2 className="text-center my-6 text-4xl font-bold text-slate-50">{project.name}</h2>
                <p className="text-center my-6 font-medium text-slate-50">{project.description}</p>
                <div className="flex overflow-x-auto p-4 h-80 gap-4 md:gap-6 md:justify-center">
                    <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] text-slate-50 p-4 shadow rounded-xl min-w-[80%] md:min-w-[20%] transition-all lg:hover:min-w-[45%]">
                        <h3 className="text-xl font-semibold">Tecnologías</h3>
                        <hr className="h-1 my-2 w-full bg-slate-50 text-slate-50" />
                        <div className="w-full h-[calc(100%-16px-28px)] grid grid-cols-2 lg:grid-cols-3 content-start justify-items-stretch">
                            {project.languages.map((el: any, idx: number) => {
                                return (
                                    <p key={idx} className="text-slate-300">{el}</p>
                                )
                            })}
                            {project.frameworks.map((el: any, idx: number) => {
                                return (
                                    <p key={idx} className="text-slate-300">{el}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] text-slate-50 p-4 shadow rounded-xl min-w-[80%] md:min-w-[20%] transition-all lg:hover:min-w-[45%]">
                        <h3 className="text-xl font-semibold">Recursos</h3>
                        <hr className="h-1 my-2 w-full bg-slate-50 text-slate-50" />
                        <div className="w-full h-[calc(100%-16px-28px)] grid grid-cols-2 lg:grid-cols-3 content-start justify-items-stretch">
                            {project.resources.map((el: any, idx: number) => {
                                return (
                                    <p key={idx} className="text-slate-300">{el}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <h2 className="text-xl text-center font-semibold my-4 text-slate-50">Contribuidores</h2>
                <div className="my-6 px-4 grid grid-cols-2 md:grid-cols-3 gap-8 md:justify-items-center">
                    {project.contributors.map((el: any, idx: number) => {
                        return (
                            <div key={idx} className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] text-slate-50 p-4 shadow rounded-xl w-44 lg:w-60">
                                <h3 className="text-lg font-semibold tracking-tight">{el.username}</h3>
                                <hr className="h-1 my-2 w-full bg-slate-50 text-slate-50" />
                                <Link href={el.profile} target='_blank'>Ir al Perfil</Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="bg-[#050a12] h-20 flex items-center justify-evenly fixed bottom-0 left-0 right-0">
                {project.demo !== null ?
                    <Link href={project.demo} target='_blank' className="-translate-y-10 ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] text-slate-50 p-4 text-4xl w-16 h-16 flex items-center justify-center rounded-full">
                        <Image src={EyeIcon} className="invert" alt="icon" />
                    </Link> : null}
                {project.repository !== null ?
                    <Link href={project.repository} target='_blank' className="-translate-y-10 ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] text-slate-50 p-4 w-16 h-16 flex items-center justify-center rounded-full">
                        <Image src={GithubIcon} className="invert" alt="icon" />
                    </Link> : null}
            </div>
        </article>
    )
}