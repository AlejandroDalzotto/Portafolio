"use client"

import { AnimatePresence, motion, type Variants } from "motion/react"
import { useTransitionStore } from "@/contexts"

const items = [1, 2, 3, 4, 5, 6, 7, 8]
const STAGGER_DELAY = 0.06

export function LoaderOverlay() {
  const isTransitioning = useTransitionStore((state) => state.isTransitioning)

  const variants: Variants = {
    initial: {
      y: "100%"
    },
    animate: (value: number) => ({
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.645, 0.045, 0.355, 1],
        delay: value * STAGGER_DELAY,
      }
    }),
    exit: (value: number) => ({
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.645, 0.045, 0.355, 1],
        delay: (items.length + 1 - value) * STAGGER_DELAY,
      },
    }),
  }

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          role="presentation"
          aria-hidden="true"
          className="fixed inset-0 z-[60] flex pointer-events-none"
        >
          {items.map((item) => (
            <motion.div
              key={item}
              custom={item}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full bg-white -mx-[1px]"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

