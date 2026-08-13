'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  className?: string
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.7,
  className = '',
}: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const directions = {
    up:    { hidden: { opacity: 0, y: 50 },  visible: { opacity: 1, y: 0 } },
    down:  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 },  visible: { opacity: 1, x: 0 } },
    none:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={directions[direction]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}