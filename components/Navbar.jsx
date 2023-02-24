"use client"

import Link from "next/link"
import 'app/globals.css'
import Image from "next/image"
import BarsSolid from "@/public/icons/bars-solid.svg"
import { useState } from "react"
import logo from "@/public/logo.png"

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

    const [navbar, setNavbar] = useState(false)

    return (
        <header className="font-semibold text-[#fafafa] h-20 w-full md:relative" onClick={() => setNavbar(!navbar)}>

            <div className="md:hidden">
                <button className={`${navbar ? "invert-0" : "invert"} m-4 fixed top-1 left-1 z-[5]`} onClick={() => setNavbar(!navbar)}>
                    <Image src={BarsSolid} width={25} height={25} alt='bars_icon' />
                </button>
            </div>


            <div className={`fixed md:relative md:block bottom-0 md:bottom-auto w-full md:max-w-[768px] md:left-0 top-0 md:h-[inherit] bg-white/10 backdrop-blur-sm md:bg-transparent z-[3] transition-all opacity-0 md:opacity-100 ${navbar ? "left-[0] opacity-100" : "left-[-100%] opacity-0"}`}>
                <nav className="h-96 md:h-full bg-slate-100 md:bg-transparent m-2 p-4 flex items-end text-black md:text-[#e8eddf]">
                    <div className="absolute top-6 right-6 md:hidden">
                        <figure className="flex items-center gap-2">
                            <Image src={logo} alt="logo" width={40} height={40} />
                            <figcaption>
                                <p className="text-2xl font-medium">A|D</p>
                            </figcaption>
                        </figure>
                    </div>
                    <ul className="h-2/3 w-2/3 flex flex-col md:flex-row justify-around">
                        {navigation.map(({ label, route }) => (
                            <li key={route} className="md:transition-all md:hover:text-[#f5cb5c] md:hover:underline">
                                <Link href={route} onClick={() => setNavbar(!navbar)}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

        </header>
    )
}
