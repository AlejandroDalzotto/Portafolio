"use client"

import useTransitionStore from "@/contexts/page-transition-store"
import { AnimatePresence, type Variants } from "motion/react"
import * as motion from "motion/react-client"

const LoaderOverlayTitle = () => {

  const title = useTransitionStore(state => state.title)
  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut"
      }
    },
  }

  return (
    <AnimatePresence>
      {title && (
        <motion.p
          variants={variants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="fixed top-1/2 capitalize text-neutral-950 text-center left-1/2 -translate-x-1/2 -translate-y-1/2 font-ocean-trace font-black text-3xl z-[99]"
        >
          {title}
        </motion.p>
      )}
    </AnimatePresence>
  )
}

export default LoaderOverlayTitle;