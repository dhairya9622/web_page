'use client'

import React, { useRef, useEffect, ReactNode } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

interface ScrollSectionProps {
  children: ReactNode
}

export default function ScrollSection({ children }: ScrollSectionProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <Parallax speed={-5}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              type: "spring",
              damping: 25,
              stiffness: 100,
              duration: 0.8 
            }
          },
          hidden: { 
            opacity: 0, 
            y: 50,
            transition: { 
              type: "spring",
              damping: 25,
              stiffness: 100,
              duration: 0.8 
            }
          }
        }}
        className="min-h-screen flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </Parallax>
  )
}

