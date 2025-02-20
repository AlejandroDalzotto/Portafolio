import { TransitionLink } from "@/components";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { appLinks } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-full min-h-dvh px-4">
      <header className="flex flex-col items-center text-center gap-y-6">
        <h1 className="text-6xl font-bold text-center select-none font-ocean-trace">Alejandro Dalzotto</h1>
        <p className="text-xl italic font-light text-neutral-200 text-neutral">Full stack web developer</p>
        <div className="flex items-center justify-center gap-x-5">
          <Link target="_blank" rel="noreferrer noopener" href="https://github.com/alejandrodalzotto">
            <GithubIcon />
          </Link>
          <Link target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/alejandro-dalzotto-44214a24b/">
            <LinkedinIcon />
          </Link>
        </div>
      </header>
      <section className="absolute flex items-center bottom-14 gap-x-12 md:gap-x-16">
        {
          appLinks.map(({ label, href }) => {

            return (
              <TransitionLink
                key={href}
                href={href}
                className="text-2xl transition-all duration-300 font-ocean-trace hover:scale-110 hover:text-rose-600"
              >
                {label}
              </TransitionLink>
            )

          })
        }
      </section>
    </main>
  );
}
