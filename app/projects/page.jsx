import Project from "@/components/Project"

import data from '@/data.json' assert { type: 'JSON' };

export default function page() {

    const { projects } = data

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full">
            {projects.map((project, idx) => {
                return (
                    <Project key={idx} project={project} />
                )
            })}
        </section>
    )
}
