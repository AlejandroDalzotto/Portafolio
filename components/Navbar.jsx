'use client'

import Link from "next/link"
import 'app/globals.css'
import Image from "next/image"
import BarsSolid from "public/icons/bars-solid.svg"
import { useRef } from "react"

const navigation = [
    {
        label: 'Inicio',
        route: '/'
    },
    {
        label: 'Sobre mí',
        route: '/about'
    },
    {
        label: 'Conocimientos',
        route: '/skills'
    },
    {
        label: 'Educación',
        route: '/education'
    },
    {
        label: 'Proyectos',
        route: '/projects'
    }
]

export default function Navbar() {


    const ref = useRef()

    return (
        <header className="font-semibold text-[#fafafa] h-20 w-full md:relative">

            <div className="md:hidden">
                <button className="m-4 fixed top-1 left-1 z-[5] invert" onClick={() => { ref.current.classList.toggle('active') }}>
                    <Image src={BarsSolid} width={25} height={25} alt='bars_icon' />
                </button>
            </div>



            <nav ref={ref} className="fixed md:relative md:block bottom-0 md:bottom-auto w-full md:max-w-[768px] left-[-100%] md:left-0 top-0 md:h-[inherit] bg-black md:bg-transparent z-[3] transition-all opacity-0 md:opacity-100">
                <ul className="h-full flex flex-col md:flex-row items-center justify-evenly">
                    {navigation.map(({ label, route }) => (
                        <li key={route} className="md:transition-all md:hover:text-[#709DF7] md:hover:underline">
                            <Link href={route} onClick={() => { ref.current.classList.toggle('active') }}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

        </header>
    )
}
