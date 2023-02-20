"use client"

/* Socials icons */
import GithubIcon from "@/public/icons/github.svg"
import FbIcon from "@/public/icons/facebook.svg"
import IgIcon from "@/public/icons/instagram.svg"
import LinkedinIcon from "@/public/icons/linkedin.svg"

/* Skills icons */
import HtmlIcon from "@/public/icons/html5.svg"
import CssIcon from "@/public/icons/css3.svg"
import JsIcon from "@/public/icons/javascript.svg"
import AngularIcon from "@/public/icons/angular.svg"
import ReactIcon from "@/public/icons/react.svg"
import TwcssIcon from "@/public/icons/tailwindcss.svg"
import JavaIcon from "@/public/icons/java.svg"
import SpringIcon from "@/public/icons/springboot.svg"
import MysqlIcon from "@/public/icons/mysql.svg"
import GitIcon from "@/public/icons/git.svg"

/* Projects image */
import DefaultImage from "@/public/imgs/default-image-project.jpg"

export const BACKEND_SKILLS = [
    {
        title: 'Java',
        icon: JavaIcon
    },
    {
        title: 'Spring boot',
        icon: SpringIcon
    },
    {
        title: 'MySQL',
        icon: MysqlIcon
    }
]

export const FRONTEND_SKILLS = [
    {
        title: 'HTML5',
        icon: HtmlIcon
    },
    {
        title: 'CSS3',
        icon: CssIcon
    },
    {
        title: 'JavaScript',
        icon: JsIcon
    },
    {
        title: 'Angular',
        icon: AngularIcon
    },
    {
        title: 'React',
        icon: ReactIcon
    },
    {
        title: 'TailwindCSS',
        icon: TwcssIcon
    }
]

export const OTHER_SKILLS = [
    {
        title: 'Git',
        icon: GitIcon
    }
]

export const SOCIALS = [
    {
        link: 'https://www.facebook.com/alejandro.dalzotto.1/',
        icon: FbIcon,
    },
    {
        link: 'https://github.com/AlejandroDalzotto',
        icon: GithubIcon,
    },
    {
        link: 'https://www.instagram.com/alejandrodalzotto/',
        icon: IgIcon,
    },
    {
        link: 'https://www.linkedin.com/in/alejandro-dalzotto-44214a24b/',
        icon: LinkedinIcon,
    }
]

export const PROJECTS = [
    {
        id: 1,
        name: "StockTracking",
        short_description: "Aplicación Full stack para el control de Stock.",
        description: "Es una aplicación que nos permite realizar el seguimiento de Stock de la medicina usada en un Tambo.",
        repository: "https://github.com/WaldoCuevas/StockTracking",
        languages: [
            "Java",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS"
        ],
        frameworks: [
            "Spring boot",
            "Spring Security",
            "Angular"
        ],
        resources: [
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
        contributors: [
            {
                username: "Waldo Cuevas",
                profile: "https://github.com/WaldoCuevas"
            },
            {
                username: "Alejandro Dalzotto",
                profile: "https://github.com/alejandrodalzotto"
            }
        ],
        demo: null,
        img: "https://images.unsplash.com/photo-1533305120462-aed774147024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHwxMnx8Y291bnRyeXxlbnwwfHx8fDE2NzY4MTc3MTU&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        id: 2,
        name: "Comunitate",
        short_description: "PWA que ayuda a mejorar la comunicación.",
        description: "Es una aplicación web progresiva que permite a los usuarios en condiciones especiales mejorar su comunicacíon.",
        repository: "https://github.com/lM4nu/Comunicate",
        languages: [
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS"
        ],
        frameworks: [
            "Angular"
        ],
        resources: [
            "Angular PWA",
            "LocalStorage",
            "Google Fonts",
            "Font Awesome",
            "SpeechSynthesisUtterance"
        ],
        contributors: [
            {
                username: "Waldo Cuevas",
                profile: "https://github.com/WaldoCuevas"
            },
            {
                username: "Alejandro Dalzotto",
                profile: "https://github.com/alejandrodalzotto"
            },
            {
                username: "Manuel Sosa",
                profile: "https://github.com/lM4nu"
            }
        ],
        demo: "https://comunicate-con-nosotros.web.app/home",
        img: "https://images.unsplash.com/photo-1588072432836-e10032774350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHwzfHxzY2hvb2x8ZW58MHx8fHwxNjc2ODE4MTY0&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        id: 3,
        name: "Carrito de compras",
        short_description: "Aplicación que simula un comportamiento de una web Ecommerce.",
        description: "Una pequeña aplicación que muestra una serie de productos los cuales se puede agregar a un carro.",
        repository: "https://github.com/AlejandroDalzotto/carrito-de-compras",
        languages: [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        frameworks: [
            "React",
            "TailwindCSS"
        ],
        resources: [
            "Font Awesome",
            "Aos library"
        ],
        contributors: [
            {
                username: "Alejandro Dalzotto",
                profile: "https://github.com/alejandrodalzotto"
            }
        ],
        demo: "https://alejandrodalzotto.github.io/carrito-de-compras/",
        img: "https://images.unsplash.com/photo-1557821552-17105176677c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHwxNXx8c2hvcHBpbmd8ZW58MHx8fHwxNjc2ODE4MzIw&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        id: 4,
        name: "Gestor de Usuarios",
        short_description: "Un pequeño C.R de Usuarios.",
        description: "Un pequeño proyecto con React para practicar el manejo de estado de los formularios.",
        repository: "https://github.com/AlejandroDalzotto/gestor-de-usuarios",
        languages: [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        frameworks: [
            "React",
            "Tailwind"
        ],
        resources: [
            "Google Fonts"
        ],
        contributors: [
            {
                username: "Alejandro Dalzotto",
                profile: "https://github.com/alejandrodalzotto"
            }
        ],
        demo: null,
        img: DefaultImage
    },
    {
        id: 5,
        name: "My galery",
        short_description: "Un buscador de imágenes.",
        description: "Un pequeño proyecto con React el cual nos permite hacer llamados a la API de Unsplash y nos itera una pequeña cantidad de imágenes como resultado de nuestra búsqueda.",
        repository: "https://github.com/AlejandroDalzotto/galeria-de-imagenes",
        languages: [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        frameworks: [
            "React",
            "TailwindCSS"
        ],
        resources: [
            "Unsplash API",
            "Font Awesome",
            "Aos Librery"
        ],
        contributors: [
            {
                username: "Alejandro Dalzotto",
                profile: "https: //github.com/alejandrodalzotto"
            }
        ],
        demo: "https://alejandrodalzotto.github.io/galeria-de-imagenes/",
        img: "https://images.unsplash.com/photo-1523461811963-7f1023caeddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHw2fHxpbWFnZXN8ZW58MHx8fHwxNjc2ODE4NDg0&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        id: 6,
        name: "Lista Series",
        short_description: "Un C.R.U.D para controlar que series estamos viendo.",
        description: "Es una aplicación web donde podemos agregar series/películas/animes para controlar cuantos episodios vimos y así no perdernos.",
        repository: null,
        languages: [
            "Java"
        ],
        frameworks: [
            "Spring boot"
        ],
        resources: [
            "Google Fonts",
            "Font Awesome",
            "Maven",
            "NodeJS",
            "MySQL",
            "JPA"
        ],
        contributors: [
            {
                username: "Alejandro Dalzotto",
                profile: "https://github.com/alejandrodalzotto"
            }
        ],
        demo: null,
        img: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHwxMHx8bmV0ZmxpeHxlbnwwfHx8fDE2NzY4MTg2MDI&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        id: 7,
        name: "Calculadora",
        short_description: "Calculadora de interés compuesto.",
        description: "Este es un proyecto hecho con React que nos da una calculadora de interés compuesto. Esto lo que hace es calcular cuanto dinero (En dolares) nosotros vamos a ganar en el transcurso de los años si es que nosotros hacemos un deposito inicial y luego seguimos contribuyendo dinero de manera anual.",
        repository: "https://github.com/AlejandroDalzotto/calculadora-interes-compuesto",
        languages: [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        frameworks: [
            "React",
            "TailwindCSS"
        ],
        resources: [
            "Styled-components librery",
            "Formik"
        ],
        contributors: [
            {
                username: "Alejandro Dalzotto",
                profile: "https://github.com/alejandrodalzotto"
            }
        ],
        demo: "https://calculadoradeinteres.vercel.app/",
        img: "https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yfGVufDB8fHx8MTY3NjgxODY1Mw&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
        id: 8,
        name: "Portfolio Web",
        short_description: "Mi página personal.",
        description: "Esta es mi página web personal hecha con Next.js 13 pensada para que quienes estén interesados en conocerme puedan encontrar todo lo relacionado con mi experiencia como desarrollador en un solo lugar..",
        repository: "https://github.com/AlejandroDalzotto/Portafolio",
        languages: [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        frameworks: [
            "Next.JS",
            "TailwindCSS"
        ],
        resources: [
            "Vercel"
        ],
        contributors: [
            {
                username: "Alejandro Dalzotto",
                profile: "https://github.com/alejandrodalzotto"
            }
        ],
        demo: null,
        img: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTAyMTV8MHwxfHNlYXJjaHwxMnx8d2ViJTIwZGVzaWdufGVufDB8fHx8MTY3NjgxODcwNA&ixlib=rb-4.0.3&q=80&w=1080"
    }
]

export const EDUCATION = [
    {
        id: 1,
        title: 'Técnico en Programación',
        description: 'Esta carrera me ofrecio conocimientos y prácticas intensivas en diferentes tecnologías que me permiten analizar un problema de procesamiento de datos y desarrollar una solución en un lenguaje apropiado.',
        link: 'https://files.deply.dev/files/baa83db5-e885-4385-94de-a1b939b0b07c-520ceb42-5a7b-41c3-ab63-71bf903de69a-certificado.jpg'
    }
]
