"use client"

import Image from "next/image"
import Link from "next/link"
import DefaultImage from "../../public/imgs/default-image-project.jpg"

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

export default function ProjectsPage() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full">
      {projects.map(({ id, name, img, short_description }) => (
        <div key={id} className="ring-1 ring-white/[0.15] bg-gray-900 text-slate-50 w-72 h-96 shadow-lg m-4 p-4 rounded relative">
          <Image className="rounded-t" src={!img ? DefaultImage : img} alt={name} width={260} height={192} />
          <h3 className="font-semibold my-3 text-xl">{name}</h3>
          <p>{short_description}</p>
          <Link href='/projects/[id]' as={`/projects/${id}`} className="py-2 px-2 bg-indigo-500 rounded block text-center text-white font-semibold absolute bottom-4 right-4 left-4">Ver info</Link>
        </div>
      ))}
    </div>
  )
}
