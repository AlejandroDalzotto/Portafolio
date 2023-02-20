import Link from "next/link";
import Image from "next/image";
import { SOCIALS } from "@/data";

export default function page() {
    return (
        <div className="p-4 container mx-auto">
            <h2 className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl font-bold leading-[1.2] tracking-wider text-transparent text-center my-6 md:mt-28">Sobre mí</h2>
            <p className="text-slate-400 font-medium tracking-tight text-lg p-2">Soy programador Full Stack y aprendiz de desarrollo de software desde hace 2 años. Mi meta es mejorar mi nivel como desarrollador. Soy proactivo, confiable, me gusta trabajar en equipo, aprender sobre las nuevas tecnologías y siempre dar mi mejor esfuerzo.<br />
                Soy de Argentina egresado de Técnico en Programación en la Universidad Tecnológica Nacional.</p>
            <div className="flex justify-evenly mt-10 md:mt-28 md:justify-center md:gap-10">
                {SOCIALS.map((item, idx) => {
                    return (
                        <Link key={idx} className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] p-3 w-14 h-14 flex items-center justify-center rounded-full" href={item.link} target="_blank">
                            <Image src={item.icon} alt="icon" className="invert" />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
