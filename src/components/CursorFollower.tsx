"use client";

import { motion } from "motion/react"
import { useEffect, useState } from "react";

export const CursorFollower = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-30 hidden pointer-events-none lg:block">
      <motion.div
        className="w-5 h-5 bg-white rounded-full"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          ease: "backOut",
          type: "tween"
        }}
      />
    </div>
  )
}
