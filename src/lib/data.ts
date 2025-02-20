import type { AppLink, Aptitude } from "@/lib/types";

export const appLinks: AppLink[] = [
  {
    label: "projects",
    href: "/projects",
  },
  {
    label: "blog",
    href: "/blog",
  },
  {
    label: "about",
    href: "/about",
  }
]

export const aptitudes: Aptitude[] = [
  {
    id: "60b6efc5-f41f-4da7-9670-1fadaad0485a",
    title: "Web applications",
    description: "Development and deployment of scalable, secure, and interactive web applications using modern technologies like JavaScript, HTML, CSS, and mainly NextJs.",
    tags: ["Frontend Development", "Backend Development", "Database connections"]
  },
  {
    id: "5cbf0858-fd4f-49ce-8073-3944f1a6f77c",
    title: "Websites",
    description: "Designing and building websites with user-friendly interfaces, focusing on responsive design and accessibility using the latest web standards.",
    tags: ["Mobile first", "Responsive Design", "SEO", "User Experience"]
  },
  {
    id: "610fc69e-439e-424f-b768-bb3f085d8be7",
    title: "API RESTful Development",
    description: "Building and maintaining RESTful APIs with proper design principles and scalability in mind. Implementing security measures like JWT authentication and role-based access control.",
    tags: ["Authentication", "Role-based authorization", "JWT", "API design"]
  },
]