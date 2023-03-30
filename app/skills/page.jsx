import Image from "next/image"
import data from '@/data.json' assert { type: 'JSON' };

export const metadata = {
    title: 'Portfolio - Conocimientos'
}

export default function page() {

    const { skills } = data
    const { backend, frontend, others } = skills

    return (
        <section>
            <div className="container mx-auto">
                <h2 className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-5xl font-bold leading-[1.2] tracking-tight text-transparent text-center my-6">Conocimientos</h2>
                <div className="max-w-[978px] mx-auto">
                    <React.Fragment>
                        <h3 className="text-[#f5cb5c] font-medium tracking-tight text-2xl p-4">Front-end</h3>
                        <p className="text-[#cfdbd5] font-medium tracking-tight text-lg p-4">Estas son las tecnologías en las cuales me especializo para desarrollo Front.</p>
                        <div className="grid grid-cols-4 h-40 p-4 md:grid-cols-8">
                            {frontend.map((item, idx) => {
                                return (
                                    <div key={idx} className="ring-2 ring-[#242423]/[33] bg-neutral-900 w-14 h-14 flex items-center justify-center rounded-full transition-all hover:ring-[#f5cb5c]/[50] hover:scale-105">
                                        <Image title={item.title} className="invert" width={30} height={30} alt={item.title} src={item.icon} />
                                    </div>
                                )
                            })}
                        </div>
                    </React.Fragment>
                    <React.Fragment>
                        <h3 className="text-[#f5cb5c] font-medium tracking-tight text-2xl p-4">Back-end</h3>
                        <p className="text-[#cfdbd5] font-medium tracking-tight text-lg p-4">Estas son las tecnologías en las cuales me especializo para desarrollo Back.</p>
                        <div className="grid grid-cols-4 h-40 p-4 md:grid-cols-8">
                            {backend.map((item, idx) => {
                                return (
                                    <div key={idx} className="ring-2 ring-[#242423]/[33] bg-neutral-900 w-14 h-14 flex items-center justify-center rounded-full transition-all hover:ring-[#f5cb5c]/[50] hover:scale-105">
                                        <Image title={item.title} width={30} height={30} className="invert" alt={item.title} src={item.icon} />
                                    </div>
                                )
                            })}
                        </div>
                    </React.Fragment>
                    <React.Fragment>
                        <h3 className="text-[#f5cb5c] font-medium tracking-tight text-2xl p-4">Otras habilidades</h3>
                        <p className="text-[#cfdbd5] font-medium tracking-tight text-lg p-4">Algunas de las otras tecnologías que uso a la hora de trabajar </p>
                        <div className="grid grid-cols-4 h-40 p-4 md:grid-cols-8">
                            {others.map((item, idx) => {
                                return (
                                    <div key={idx} className="ring-2 ring-[#242423]/[33] bg-neutral-900 w-14 h-14 flex items-center justify-center rounded-full transition-all hover:ring-[#f5cb5c]/[50] hover:scale-105">
                                        <Image title={item.title} width={30} height={30} className="invert" alt={item.title} src={item.icon} />
                                    </div>
                                )
                            })}
                        </div>
                    </React.Fragment>
                </div>
            </div>
        </section>
    )
}
