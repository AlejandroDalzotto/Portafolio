import { ProjectCard, TransitionLink } from "@/components"
import { getAllProjectsArticles } from "@/lib/mdx-utils"
import type { Metadata } from "next"

// TODO: Work on metadata objects.
export const metadata: Metadata = {
  title: 'Projects • Alejandro Dalzotto',
  description: 'All the projects I\'ve worked on. Here, you\'ll find both professional projects and others that are more personal. Also, in the near future I\'m adding new sections like code challenges solved by me. Stay tuned ^^',
}

export default async function BlogsPage() {

  const projects = await getAllProjectsArticles()

  return (
    <main className="container flex flex-col px-10 pb-20 pt-10 mx-auto sm:max-w-[60ch] md:max-w-[80ch] lg:max-w-[100ch] font-safiro min-h-svh">
      <header>
        <h1 className="text-3xl font-ocean-trace">Projects</h1>
      </header>
      <section className="flex-grow mt-16">
        {
          projects.map((project, i) => {
            return (
              <ProjectCard key={project.slug} index={i} project={project.metadata} />
            )
          })
        }
      </section>
      <footer className="grid w-full mt-10 place-content-center">
        <TransitionLink
          href="/"
          className="text-2xl transition-all duration-300 font-ocean-trace hover:scale-110 hover:text-rose-600"
        >
          return to home
        </TransitionLink>
      </footer>
    </main>
  )
}