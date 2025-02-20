import { TransitionLink } from "@/components"
import { getAllBlogArticles } from "@/lib/mdx-utils"
import type { Metadata } from "next"

// TODO: Work on metadata objects.
export const metadata: Metadata = {
  title: 'Personal blog • Alejandro Dalzotto',
  description: 'My personal place on the internet where you can discover what things I\'m studying and working on ^^.',
}

export default async function BlogsPage() {

  const articles = await getAllBlogArticles()

  const thereIsBlogPostsAvailable = articles.length > 0

  return (
    <main className="container flex flex-col px-10 py-20 mx-auto sm:max-w-[60ch] md:max-w-[80ch] lg:max-w-[100ch] font-safiro min-h-svh">
      <h1 className="mb-8 text-3xl font-bold font-ocean-trace">My Blog</h1>
      <hr className="my-2" />
      <p className="text-sm">Welcome to my corner of the internet, where I share insights, tips, and experiences about technology and programming. Join me as I explore the ever-evolving world of tech!</p>
      <section className="flex flex-col flex-grow mt-10 gap-y-10">
        {thereIsBlogPostsAvailable ?
          articles.map((article) => {

            return (

              <TransitionLink
                href={`/blog/${article.slug}`}
                key={article.slug}
                className="flex flex-col p-3 transition-colors rounded-md gap-y-2 font-safiro hover:bg-white/15"
              >
                <p className="text-lg font-bold text-balance line-clamp-2">{article.metadata.title}</p>
                <p className="text-sm line-clamp-2 text-neutral-300">{article.metadata.summary}</p>
                <footer className="flex gap-x-2">
                  {
                    article.metadata.tags.map(tag => {

                      return (
                        <span className="px-3 py-1 border rounded-full border-neutral-600 bg-white/10" key={tag + article.metadata.title}>{tag}</span>
                      )

                    })
                  }
                </footer>
              </TransitionLink>

            )

          }) : (
            <div className="flex-grow flex justify-center items-center flex-col text-center text-4xl text-neutral-200">
              <p>New posts</p>
              <p>are coming soon.</p>
              <p>Stay tuned!</p>
            </div>
          )
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