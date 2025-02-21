import { CustomMDX } from "@/components/CustomMDX"
import { getBlogArticleBySlug } from "@/lib/mdx-utils"
import { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug

  // fetch data
  const article = await getBlogArticleBySlug(slug)

  return {
    title: article.metadata.title,
    description: article.metadata.summary,
  }
}

export default async function BlogPage({ params }: Props) {

  const slug = (await params).slug

  const { content } = await getBlogArticleBySlug(slug)

  return (
    <CustomMDX source={content} />
  )
}
