import Image from "next/image"
import HtmlIcon from "../../public/icons/html5.svg"
import CssIcon from "../../public/icons/css3.svg"
import JsIcon from "../../public/icons/javascript.svg"
import AngularIcon from "../../public/icons/angular.svg"
import ReactIcon from "../../public/icons/react.svg"
import TwcssIcon from "../../public/icons/tailwindcss.svg"
import JavaIcon from "../../public/icons/java.svg"
import SpingIcon from "../../public/icons/springboot.svg"
import MysqlIcon from "../../public/icons/mysql.svg"
import GitIcon from "../../public/icons/git.svg"

export default function SkillsPage() {
  return (
    <div className="container mx-auto">
      <h2 className="bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl font-bold leading-[1.2] tracking-tight text-transparent text-center my-6">Conocimientos</h2>
      <div className="max-w-[978px] mx-auto">
        <div>
          <h3 className="text-slate-50 font-medium tracking-tight text-2xl p-4">Front-end</h3>
          <p className="text-slate-400 font-medium tracking-tight text-lg p-4">Estas son las tecnologías en las cuales me especializo para desarrollo Front.</p>
          <div className="grid grid-cols-4 h-40 p-4 md:grid-cols-8">
            <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
              <Image title="HTML5" className="invert" width={30} height={30} alt={HtmlIcon} src={HtmlIcon} />
            </div>
            <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
              <Image title="CSS3" width={30} height={30} className="invert" alt={CssIcon} src={CssIcon} />
            </div>
            <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
              <Image title="JavaScript" width={30} height={30} className="invert" alt={JsIcon} src={JsIcon} />
            </div>
            <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
              <Image title="Angular" width={30} height={30} className="invert" alt={AngularIcon} src={AngularIcon} />
            </div>
            <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
              <Image title="React" width={30} height={30} className="invert" alt={ReactIcon} src={ReactIcon} />
            </div>
            <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
              <Image title="TailwindCSS" width={30} height={30} className="invert" alt={TwcssIcon} src={TwcssIcon} />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-slate-50 font-medium tracking-tight text-2xl p-4">Back-end</h3>
          <p className="text-slate-400 font-medium tracking-tight text-lg p-4">Estas son las tecnologías en las cuales me especializo para desarrollo Back.</p>
          <div className="grid grid-cols-4 h-40 p-4 md:grid-cols-8">
            <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
              <Image title="Java" width={30} height={30} className="invert" alt={JavaIcon} src={JavaIcon} />
            </div>
            <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
              <Image title="Spring boot" width={30} height={30} className="invert" alt={SpingIcon} src={SpingIcon} />
            </div>
            <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
              <Image title="MySQL" width={30} height={30} className="invert" alt={MysqlIcon} src={MysqlIcon} />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-slate-50 font-medium tracking-tight text-2xl p-4">Otras habilidades</h3>
          <p className="text-slate-400 font-medium tracking-tight text-lg p-4">Algunas de las otras tecnologías que uso a la hora de trabajar </p>
          <div className="grid grid-cols-4 h-40 p-4 md:grid-cols-8">
            <div className="ring-1 ring-white/[0.15] bg-[radial-gradient(145.05%_100%_at_50%_0%,#334e68_0%,#243b53_57.38%,#102a43_88.16%)] w-14 h-14 flex items-center justify-center rounded-full">
              <Image title="Git" width={30} height={30} className="invert" alt={GitIcon} src={GitIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
