import DiplomaIcon from "@/public/icons/diploma.png"
import Image from "next/image"
import Link from "next/link"
import data from '@/data.json' assert { type: 'JSON' };

export default function page() {

    const { educations } = data

    return (
        <div>
            <div className="flex flex-col items-center">
                <h2 className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-5xl font-bold leading-[1.2] tracking-wider text-transparent text-center my-6">Educación</h2>
                <div className="flex flex-wrap gap-5 justify-center">

                    {educations.map((item, idx) => {
                        return (

                            <div key={idx} className="ring-2 ring-[#242423]/[33] bg-neutral-900 w-72 h-96 shadow-lg m-4 p-4 rounded relative transition-all hover:ring-[#f5cb5c]/[50]">
                                <Link href={item.link} target="_blank" className="absolute top-4 right-4">
                                    <Image src={DiplomaIcon} alt="icon" width={30} height={30} className="invert" />
                                </Link>
                                <h2 className="text-[#f5cb5c] font-medium tracking-tighter text-xl h-[15%]">{item.title}</h2>
                                <hr className="bg-[#cfdbd5] h-[1%] w-full my-6" />
                                <p className="text-[#cfdbd5] h-[calc(100%-1%-15%)]">{item.description}</p>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}
