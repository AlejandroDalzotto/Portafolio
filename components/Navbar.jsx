"use client"

import Link from "next/link"
import 'app/globals.css'
import Image from "next/image"
import BarsSolid from "@/public/icons/bars-solid.svg"
import { useState } from "react"

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
        <header className="font-semibold text-[#fafafa] h-20 w-full md:relative">

            <div className="md:hidden">
                <button className="m-4 fixed top-1 left-1 z-[5] invert" onClick={() => setNavbar(!navbar)}>
                    <Image src={BarsSolid} width={25} height={25} alt='bars_icon' />
                </button>
            </div>


            <div className={`fixed md:relative md:block bottom-0 md:bottom-auto w-full md:max-w-[768px] md:left-0 top-0 md:h-[inherit] bg-black md:bg-transparent z-[3] transition-all opacity-0 md:opacity-100 ${navbar ? "left-[0] opacity-100" : "left-[-100%] opacity-0"}`}>
                <nav className="h-full">
                    <ul className="h-full flex flex-col md:flex-row items-center justify-evenly">
                        {navigation.map(({ label, route }) => (
                            <li key={route} className="md:transition-all md:hover:text-[#709DF7] md:hover:underline">
                                <Link href={route} onClick={() => setNavbar(!navbar)}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

        </header>
    )
}
