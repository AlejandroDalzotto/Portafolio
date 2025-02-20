"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'motion/react'
import { FlameIcon, GithubIcon } from '@/components/icons'
import type { ProjectMetadata } from '@/lib/types'

export const ProjectCard = ({
  project,
  index
}: {
  project: ProjectMetadata,
  index: number
}) => {

  const { scrollY } = useScroll()

  // Calculate the scroll range where the animation should happen
  const startScroll = index * 750 // Adjust this value to control when each card starts animating
  const endScroll = startScroll + 750 // Adjust this value to control animation duration

  const scale = useTransform(
    scrollY,
    [startScroll, endScroll],
    [1, 0.8], // Scale from 100% to 80%
  )

  const y = useTransform(
    scrollY,
    [startScroll, endScroll],
    [0, -50], // Move up by 50px
  )

  return (
    <motion.article
      style={{
        scale,
        y,
      }}
      className="rounded-xl h-[80svh] sticky mb-10 top-20 p-4 flex flex-col justify-between"
    >
      <Image
        src={project.imageSrc}
        alt="bg image"
        priority
        width={1920}
        height={1080}
        className="absolute inset-0 object-cover h-full rounded-[inherit] -z-10 pointer-events-none"
      />
      <header className="flex items-start justify-between">
        <div className="flex flex-col text-sm gap-y-1">
          {
            project.technologies.map(technology => {

              return (
                <p key={technology}>{technology}</p>
              )

            })
          }
        </div>
        <span className="text-lg">{new Date(project.publishedAt).getFullYear()}</span>
      </header>
      <section className="absolute inset-0 grid pointer-events-none place-content-center">
        <p className="text-5xl font-black text-center font-ocean-trace">{project.name}</p>
      </section>
      <footer className="flex items-end justify-between">
        <div>
          <p>{project.appType}</p>
        </div>
        {project.repositoryUrl || project.demoUrl ? (
          <div className="flex flex-col items-center gap-x-2">
            {project.repositoryUrl ? (
              <Link className="flex flex-col items-center" target="_blank" rel="noreferrer noopener" href={project.repositoryUrl}>
                <GithubIcon />
                <p className="text-xs">view code</p>
              </Link>
            ) : null}
            {project.demoUrl ? (
              <Link className="flex flex-col items-center" target="_blank" rel="noreferrer noopener" href={project.demoUrl}>
                <FlameIcon />
                <p className="text-xs">try demo</p>
              </Link>
            ) : null}
          </div>
        ) : null}
      </footer>
    </motion.article>
  )
}
