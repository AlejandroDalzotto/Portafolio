"use client"
import Project from "@/components/Project"

import { PROJECTS } from "@/data"

export default function page() {
    
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full">
            {PROJECTS.map((project, idx) => {
                return (
                    <Project key={idx} project={project} />
                )
            })}
        </section>
    )
}
