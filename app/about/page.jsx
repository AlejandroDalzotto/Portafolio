import Link from "next/link";
import Image from "next/image";
import data from '@/data.json' assert { type: 'JSON' };

export default function page() {

    const { socials } = data

    return (
        <div className="p-4 container mx-auto">
            <h2 className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-5xl font-bold leading-[1.2] tracking-wider text-transparent text-center my-6 md:mt-28">Sobre mí</h2>
            <p className="text-[#e8eddf] font-medium tracking-tight text-lg p-2">Soy programador Full Stack y aprendiz de desarrollo de software desde hace 2 años. Mi meta es mejorar mi nivel como desarrollador. Soy proactivo, confiable, me gusta trabajar en equipo, aprender sobre las nuevas tecnologías y siempre dar mi mejor esfuerzo.<br />
                Soy de Argentina egresado de Técnico en Programación en la Universidad Tecnológica Nacional.</p>
            <div className="flex justify-evenly mt-10 md:mt-28 md:justify-center md:gap-10">
                {socials.map((item, idx) => {
                    return (
                        <Link key={idx} className="ring-2 ring-[#242423]/[33] bg-neutral-900 w-14 h-14 flex items-center justify-center rounded-full transition-all hover:ring-[#f5cb5c]/[50] hover:scale-105" href={item.link} target="_blank">
                            <Image src={item.icon} alt="icon" width={30} height={30} className="invert" />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
