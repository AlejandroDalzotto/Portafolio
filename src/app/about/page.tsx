import { ScrollSign, TransitionLink } from "@/components";
import { AboutServiceImage } from "@/components";
import { CheckIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import { aptitudes } from "@/lib/data";
// import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {



  return (
    <main className="container flex flex-col px-10 py-20 mx-auto sm:max-w-[60ch] md:max-w-[80ch] lg:max-w-[120ch] font-safiro">
      {/* <Image
        width={612}
        height={923}
        alt="photo"
        src="/photo.jpg"
        className="fixed -translate-x-1/2 -translate-y-1/2 opacity-75 pointer-events-none top-1/2 left-1/2 -z-10 sm:textblack mask-image-about"
      /> */}
      <header className="relative max-w-[80ch] grid h-screen mx-auto px-4 place-items-center justify-items-start">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-4xl font-bold font-ocean-trace">About me</h1>
          <hr />
          <p className="text-balance md:text-center font-safiro">Hey there, my name is <span translate="no">Alejandro Dalzotto</span>. I&apos;m a software web developer & programmer from Argentina. I enjoy working on the front-end side making creative designs but I&apos;m also curious about back-end technologies & topics such as security, API&apos;s development, and databases.</p>
        </div>

        <ScrollSign />
      </header>

      <section className="flex items-start justify-center w-full gap-x-20 pt-80">
        <article>
          <header className="flex flex-col items-start gap-y-56 lg:gap-y-96">
            <div className="flex flex-col items-start gap-y-4">
              <span className="px-3 py-1 text-sm uppercase border rounded-full font-safiro text-neutral-200 border-neutral-600">services</span>
              <p className="text-4xl font-bold font-safiro">What I do</p>
            </div>

            {
              aptitudes.map((aptitude) => {

                return (

                  <div className="flex flex-col gap-y-2 max-w-96" key={aptitude.id}>
                    <p className="text-4xl font-bold font-safiro">{aptitude.title}</p>
                    <p className="text-neutral-200 [text-shadow:_0px_0px_5px_black] text-balance font-safiro">{aptitude.description}</p>
                    <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
                      {
                        aptitude.tags.map(tag => {

                          return (
                            <div className="flex items-center gap-x-2" key={tag}>
                              <CheckIcon />
                              <p className="font-safiro">{tag}</p>
                            </div>
                          )

                        })
                      }
                    </div>
                  </div>

                )

              })
            }
          </header>
        </article>
        <AboutServiceImage />
      </section>

      <section className="grid py-40 place-items-center justify-items-center">
        <TransitionLink
          href="/"
          className="text-2xl font-bold tracking-widest transition-all duration-300 font-ocean-trace hover:scale-110 hover:text-rose-600"
        >
          Return to home
        </TransitionLink>
      </section>

      <footer className="flex items-center justify-center gap-x-5">
        <Link target="_blank" rel="noreferrer noopener" href="https://github.com/alejandrodalzotto">
          <GithubIcon />
        </Link>
        <Link target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/alejandro-dalzotto-44214a24b/">
          <LinkedinIcon />
        </Link>
      </footer>
    </main>
  )
}
