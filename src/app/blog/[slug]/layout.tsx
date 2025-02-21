import ArrowLeftIcon from "@/components/icons/ArrowLeft";
import TransitionLink from "@/components/TransitionLink";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="container flex flex-col items-center px-10 py-20 mx-auto sm:max-w-[60ch] md:max-w-[80ch] lg:max-w-[100ch]">
      <header className="grid w-full pb-20 place-content-start">
        <TransitionLink href="/blog"  className="flex items-center text-2xl transition-all duration-300 gap-x-2 font-ocean-trace hover:scale-110 hover:text-rose-600">
          <ArrowLeftIcon />
          <p>Go back</p>
        </TransitionLink>
      </header>
      <main className="prose px-4 max-w-[40ch] sm:max-w-[60ch] md:max-w-[80ch] lg:max-w-[100ch] prose-headings:mt-8 prose-p:text-neutral-200 hover:prose-a:text-rose-600 prose-a:transition-colors prose-a:no-underline prose-strong:text-neutral-50 prose-li:text-neutral-200 prose-headings:font-semibold prose-headings:text-white prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-pre:bg-white/10 prose-h5:text-xl prose-h6:text-lg">
        {children}
      </main>
      <footer className="grid w-full pt-20 place-content-center">
        <TransitionLink
          href="/"
          className="text-2xl transition-all duration-300 font-ocean-trace hover:scale-110 hover:text-rose-600"
        >
          return to home
        </TransitionLink>
      </footer>
    </div>
  )
}