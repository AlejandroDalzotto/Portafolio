import fs from "node:fs/promises"
import path from "path"
import matter from "gray-matter"
import type { Article, ArticleMetadata, Project, ProjectMetadata } from "./types"

const contentBlogDirectory = path.join(process.cwd(), "src", "content", "blog")
const contentProjectsDirectory = path.join(process.cwd(), "src", "content", "projects")


export async function getAllProjectsArticles(): Promise<Project[]> {
  const files = await fs.readdir(contentProjectsDirectory)

  const projects = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(".mdx", "")
      const filePath = path.join(contentProjectsDirectory, fileName)
      const fileContents = await fs.readFile(filePath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        metadata: data as ProjectMetadata,
        content,
      }
    }),
  )

  return projects.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
}

export async function getProjectArticleBySlug(slug: string): Promise<Project> {
  const filePath = path.join(contentBlogDirectory, `${slug}.mdx`)

  const fileContents = await fs.readFile(filePath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    metadata: data as ProjectMetadata,
    content,
  }
}




export async function getAllBlogArticles(): Promise<Article[]> {
  const files = await fs.readdir(contentBlogDirectory)

  const articles = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(".mdx", "")
      const filePath = path.join(contentBlogDirectory, fileName)
      const fileContents = await fs.readFile(filePath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        metadata: data as ArticleMetadata,
        content,
      }
    }),
  )

  return articles.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
}

export async function getBlogArticleBySlug(slug: string): Promise<Article> {
  const filePath = path.join(contentBlogDirectory, `${slug}.mdx`)

  const fileContents = await fs.readFile(filePath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    metadata: data as ArticleMetadata,
    content,
  }
}

