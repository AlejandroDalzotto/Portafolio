"use client";

import * as motion from "motion/react-client"
import { useInView } from "motion/react"
import Image from "next/image";
import { useRef } from "react";

export const AboutServiceImage = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: "0px 100px -30% 0px"
  })

  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0
      }}
      ref={ref}
      className="sticky hidden top-40 lg:block">
      <Image
        src="/photo.jpg"
        alt="test image"
        width={432}
        height={655}
        className="rounded-xl mask-image-about pointer-events-none"
      />
    </motion.div>
  )
}
