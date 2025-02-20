"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import Link, { type LinkProps } from "next/link"
import { useTransitionStore } from "@/contexts"
import { getTitleFromPath, sleep } from "@/lib/utils"

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}


export function TransitionLink({ children, href, className, ...props }: TransitionLinkProps) {
  const router = useRouter()
  const startTransition = useTransitionStore((state) => state.startTransition)
  const completeTransition = useTransitionStore((state) => state.completeTransition)
  const setTitle = useTransitionStore((state) => state.setTitle)
  const setTitleToNull = useTransitionStore((state) => state.setTitleToNull)

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Start entrance animation
    startTransition()
    await sleep(800)

    // Navigate after entrance animation
    router.push(href.toString())
    setTitle(getTitleFromPath(href.toString()))

    // Start exit animation after a small delay to ensure the new page is loaded
    await sleep(800)
    setTitleToNull()
    completeTransition()
  }

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  )
}

