'use client'

import { useInView, useMotionValue, useSpring, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface Props {
  value: string
  className?: string
}

export default function CountUp({ value, className = '' }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Extract number and suffix e.g. "50+" → 50, "+"
  const numeric = parseInt(value.replace(/\D/g, ''))
  const suffix = value.replace(/[0-9]/g, '')

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: 2000,
    bounce: 0,
  })

  useEffect(() => {
    if (isInView) motionValue.set(numeric)
  }, [isInView, motionValue, numeric])

  return (
    <span ref={ref} className={className}>
      <motion.span>
        {springValue.get() === 0 ? '0' : Math.round(springValue.get())}
      </motion.span>
      {suffix}
    </span>
  )
}