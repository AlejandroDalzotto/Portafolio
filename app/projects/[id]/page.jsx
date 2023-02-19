"use client"

import Link from "next/link.js"
import Image from "next/image.js"
import EyeIcon from "public/icons/eye-solid.svg"
import GithubIcon from "public/icons/github.svg"

const projects = [
    {
        "id": 1,
        "name": "StockTracking",
        "short_description": "Aplicación Full stack para el control de Stock.",
        "description": "Es una aplicación que nos permite realizar el seguimiento de Stock de la medicina usada en un Tambo.",
        "repository": "https://github.com/WaldoCuevas/StockTracking",
        "languages": [
            "Java",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "frameworks": [
            "Spring boot",
            "Spring Security",
            "Angular"
        ],
        "resources": [
            "Toastr",
            "JWT",
            "Auth 2.0",
            "Cors",
            "Maven",
            "NodeJS",
            "MySQL",
            "JPA",
            "Hibernate",
            "Font Awesome",
            "Google Fonts"
        ],
        "contributors": [
            {
                "name": "Waldo Cuevas",
                "profile": "https://github.com/WaldoCuevas"
            },
            {
                "name": "Alejandro Dalzotto",
                "profile": "https://github.com/alejandrodalzotto"
            }
        ],
        "demo": null,
        "img": "https://images.unsplash.com/photo-1533305120462-aed774147024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHwxMnx8Y291bnRyeXxlbnwwfHx8fDE2NzY4MTc3MTU&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        "id": 2,
        "name": "Comunitate",
        "short_description": "PWA que ayuda a mejorar la comunicación.",
        "description": "Es una aplicación web progresiva que permite a los usuarios en condiciones especiales mejorar su comunicacíon.",
        "repository": "https://github.com/lM4nu/Comunicate",
        "languages": [
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "frameworks": [
            "Angular"
        ],
        "resources": [
            "Angular PWA",
            "LocalStorage",
            "Google Fonts",
            "Font Awesome",
            "SpeechSynthesisUtterance"
        ],
        "contributors": [
            {
                "name": "Waldo Cuevas",
                "profile": "https://github.com/WaldoCuevas"
            },
            {
                "name": "Alejandro Dalzotto",
                "profile": "https://github.com/alejandrodalzotto"
            },
            {
                "name": "Manuel Sosa",
                "profile": "https://github.com/lM4nu"
            }
        ],
        "demo": "https://comunicate-con-nosotros.web.app/home",
        "img": "https://images.unsplash.com/photo-1588072432836-e10032774350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHwzfHxzY2hvb2x8ZW58MHx8fHwxNjc2ODE4MTY0&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        "id": 3,
        "name": "Carrito de compras",
        "short_description": "Aplicación que simula un comportamiento de una web Ecommerce.",
        "description": "Una pequeña aplicación que muestra una serie de productos los cuales se puede agregar a un carro.",
        "repository": "https://github.com/AlejandroDalzotto/carrito-de-compras",
        "languages": [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "frameworks": [
            "React",
            "TailwindCSS"
        ],
        "resources": [
            "Font Awesome",
            "Aos library"
        ],
        "contributors": [
            {
                "name": "Alejandro Dalzotto",
                "profile": "https://github.com/alejandrodalzotto"
            }
        ],
        "demo": "https://alejandrodalzotto.github.io/carrito-de-compras/",
        "img": "https://images.unsplash.com/photo-1557821552-17105176677c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHwxNXx8c2hvcHBpbmd8ZW58MHx8fHwxNjc2ODE4MzIw&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        "id": 4,
        "name": "Gestor de Usuarios",
        "short_description": "Un pequeño C.R de Usuarios.",
        "description": "Un pequeño proyecto con React para practicar el manejo de estado de los formularios.",
        "repository": "https://github.com/AlejandroDalzotto/gestor-de-usuarios",
        "languages": [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "frameworks": [
            "React",
            "Tailwind"
        ],
        "resources": [
            "Google Fonts"
        ],
        "contributors": [
            {
                "name": "Alejandro Dalzotto",
                "profile": "https://github.com/alejandrodalzotto"
            }
        ],
        "demo": null,
        "img": false
    },
    {
        "id": 5,
        "name": "My galery",
        "short_description": "Un buscador de imágenes.",
        "description": "Un pequeño proyecto con React el cual nos permite hacer llamados a la API de Unsplash y nos itera una pequeña cantidad de imágenes como resultado de nuestra búsqueda.",
        "repository": "https://github.com/AlejandroDalzotto/galeria-de-imagenes",
        "languages": [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "frameworks": [
            "React",
            "TailwindCSS"
        ],
        "resources": [
            "Unsplash API",
            "Font Awesome",
            "Aos Librery"
        ],
        "contributors": [
            {
                "name": "Alejandro Dalzotto",
                "profile": "https: //github.com/alejandrodalzotto"
            }
        ],
        "demo": "https://alejandrodalzotto.github.io/galeria-de-imagenes/",
        "img": "https://images.unsplash.com/photo-1523461811963-7f1023caeddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHw2fHxpbWFnZXN8ZW58MHx8fHwxNjc2ODE4NDg0&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        "id": 6,
        "name": "Lista Series",
        "short_description": "Un C.R.U.D para controlar que series estamos viendo.",
        "description": "Es una aplicación web donde podemos agregar series/películas/animes para controlar cuantos episodios vimos y así no perdernos.",
        "repository": null,
        "languages": [
            "Java"
        ],
        "frameworks": [
            "Spring boot"
        ],
        "resources": [
            "Google Fonts",
            "Font Awesome",
            "Maven",
            "NodeJS",
            "MySQL",
            "JPA"
        ],
        "contributors": [
            {
                "name": "Alejandro Dalzotto",
                "profile": "https://github.com/alejandrodalzotto"
            }
        ],
        "demo": null,
        "img": "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHwxMHx8bmV0ZmxpeHxlbnwwfHx8fDE2NzY4MTg2MDI&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        "id": 7,
        "name": "Calculadora",
        "short_description": "Calculadora de interés compuesto.",
        "description": "Este es un proyecto hecho con React que nos da una calculadora de interés compuesto. Esto lo que hace es calcular cuanto dinero (En dolares) nosotros vamos a ganar en el transcurso de los años si es que nosotros hacemos un deposito inicial y luego seguimos contribuyendo dinero de manera anual.",
        "repository": "https://github.com/AlejandroDalzotto/calculadora-interes-compuesto",
        "languages": [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "frameworks": [
            "React",
            "TailwindCSS"
        ],
        "resources": [
            "Styled-components librery",
            "Formik"
        ],
        "contributors": [
            {
                "name": "Alejandro Dalzotto",
                "profile": "https://github.com/alejandrodalzotto"
            }
        ],
        "demo": null,
        "img": "https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yfGVufDB8fHx8MTY3NjgxODY1Mw&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        "id": 8,
        "name": "Portfolio Web",
        "short_description": "Mi página personal.",
        "description": "Esta es mi página web personal hecha con Next.js 13 pensada para que quienes estén interesados en conocerme puedan encontrar todo lo relacionado con mi experiencia como desarrollador en un solo lugar..",
        "repository": "https://github.com/AlejandroDalzotto/Portafolio",
        "languages": [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "frameworks": [
            "Next.JS",
            "TailwindCSS"
        ],
        "resources": [
            "Vercel"
        ],
        "contributors": [
            {
                "name": "Alejandro Dalzotto",
                "profile": "https://github.com/alejandrodalzotto"
            }
        ],
        "demo": null,
        "img": "https://images.unsplash.com/photo-1621839673705-6617adf9e890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHwxMnx8d2ViJTIwZGVzaWdufGVufDB8fHx8MTY3NjgxODcwNA&ixlib=rb-4.0.3&q=80&w=1080"
    }
]


export default function Project({ params }) {
    const { id } = params
    const { name, description, repository, contributors, frameworks, languages, demo, resources } = projects[id - 1]

    return (
        <div className="min-h-[calc(110vh+80px)] px-4">
            <div>
                <h2 className="text-center my-6 text-4xl font-bold text-slate-50">{name}</h2>
                <p className="text-center my-6 font-medium text-slate-50">{description}</p>
                <div className="flex overflow-x-auto p-4 h-80 gap-4 md:gap-6 md:justify-center">
                    <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] text-slate-50 p-4 shadow rounded-xl min-w-[80%] md:min-w-[20%] transition-all lg:hover:min-w-[45%]">
                        <h3 className="text-xl font-semibold">Tecnologías</h3>
                        <hr className="h-1 my-2 w-full bg-slate-50 text-slate-50" />
                        <div className="w-full h-[calc(100%-16px-28px)] grid grid-cols-2 lg:grid-cols-3 content-start justify-items-stretch">
                            {languages.map((el) => (
                                <p key={el} className="text-slate-300">{el}</p>
                            ))}
                            {frameworks.map((el) => (
                                <p key={el} className="text-slate-300">{el}</p>
                            ))}
                        </div>
                    </div>
                    <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] text-slate-50 p-4 shadow rounded-xl min-w-[80%] md:min-w-[20%] transition-all lg:hover:min-w-[45%]">
                        <h3 className="text-xl font-semibold">Recursos</h3>
                        <hr className="h-1 my-2 w-full bg-slate-50 text-slate-50" />
                        <div className="w-full h-[calc(100%-16px-28px)] grid grid-cols-2 lg:grid-cols-3 content-start justify-items-stretch">
                            {resources.map((el) => (
                                <p key={el} className="text-slate-300">{el}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <h2 className="text-xl text-center font-semibold my-4 text-slate-50">Contribuidores</h2>
                <div className="my-6 px-4 grid grid-cols-2 md:grid-cols-3 gap-8 md:justify-items-center">
                    {contributors.map((el) => (
                        <div key={el.name} className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] text-slate-50 p-4 shadow rounded-xl w-44 lg:w-60">
                            <h3 className="text-lg font-semibold tracking-tight">{el.name}</h3>
                            <hr className="h-1 my-2 w-full bg-slate-50 text-slate-50" />
                            <Link href={el.profile} target='_blank'>Ir al Perfil</Link>
                        </div>
                    ))}
                </div>
            </div>

            {(demo !== null || repository !== null) ?
                <div className="bg-[#050a12] h-20 flex items-center justify-evenly fixed bottom-0 left-0 right-0">
                    {demo !== null ?
                        <Link href={demo} target='_blank' className="-translate-y-10 ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] text-slate-50 p-4 text-4xl w-16 h-16 flex items-center justify-center rounded-full">
                            <Image src={EyeIcon} className="invert" alt="icon" />
                        </Link> : null}
                    {repository !== null ?
                        <Link href={repository} target='_blank' className="-translate-y-10 ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] text-slate-50 p-4 w-16 h-16 flex items-center justify-center rounded-full">
                            <Image src={GithubIcon} className="invert" alt="icon" />
                        </Link> : null}
                </div>
                : null}
        </div>
    )
}