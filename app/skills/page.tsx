import Image from "next/image"
import { BACKEND_SKILLS, FRONTEND_SKILLS, OTHER_SKILLS } from "@/app/data.ts"

export default function page() {
    return (
        <section>
            <div className="container mx-auto">
                <h2 className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl font-bold leading-[1.2] tracking-tight text-transparent text-center my-6">Conocimientos</h2>
                <div className="max-w-[978px] mx-auto">
                    <div>
                        <h3 className="text-slate-50 font-medium tracking-tight text-2xl p-4">Front-end</h3>
                        <p className="text-slate-400 font-medium tracking-tight text-lg p-4">Estas son las tecnologías en las cuales me especializo para desarrollo Front.</p>
                        <div className="grid grid-cols-4 h-40 p-4 md:grid-cols-8">
                            {FRONTEND_SKILLS.map((item: any, idx: any) => {
                                return (
                                    <div key={idx} className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
                                        <Image title={item.title} className="invert" width={30} height={30} alt={item.title} src={item.icon} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-medium tracking-tight text-2xl p-4">Back-end</h3>
                        <p className="text-slate-400 font-medium tracking-tight text-lg p-4">Estas son las tecnologías en las cuales me especializo para desarrollo Back.</p>
                        <div className="grid grid-cols-4 h-40 p-4 md:grid-cols-8">
                            {BACKEND_SKILLS.map((item: any, idx: any) => {
                                return (
                                    <div key={idx} className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
                                        <Image title={item.title} width={30} height={30} className="invert" alt={item.title} src={item.icon} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-slate-50 font-medium tracking-tight text-2xl p-4">Otras habilidades</h3>
                        <p className="text-slate-400 font-medium tracking-tight text-lg p-4">Algunas de las otras tecnologías que uso a la hora de trabajar </p>
                        <div className="grid grid-cols-4 h-40 p-4 md:grid-cols-8">
                            {OTHER_SKILLS.map((item: any, idx: any) => {
                                return (
                                    <div key={idx} className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
                                        <Image title={item.title} width={30} height={30} className="invert" alt={item.title} src={item.icon} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
