export type AppLink = {
  label: string;
  href: string;
}

export type ArticleMetadata = {
  title: string
  publishedAt: string
  summary: string
  tags: string[]
}

export type Article = {
  slug: string
  metadata: ArticleMetadata
  content: string
}

export type ProjectType = "Website" | "Web application" | "Console application" | "API RESTful" | "Desktop application"

export type ProjectCategory = "Freelance" | "Personal" | "Code practice"

export type Project = {
  slug: string
  metadata: ProjectMetadata
  content: string
}

export type ProjectMetadata = {
  name: string;
  category: ProjectCategory;

  /**
   * The date when the project was developed.
   */
  publishedAt: number;
  appType: ProjectType;
  summary: string;
  technologies: string[];
  repositoryUrl: string | null;
  imageSrc: string;
  demoUrl: string | null;
}

export type Aptitude = {
  id: string;
  title: string;
  description: string;
  tags: string[];
}