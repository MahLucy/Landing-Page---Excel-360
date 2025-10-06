// src/app/components/ScrollFadeIn.tsx
'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

function useOnScreen<T extends Element>(rootMargin = '0px') {
  const ref = useRef<T | null>(null)
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    )
    const el = ref.current
    obs.observe(el)
    return () => obs.unobserve(el)
  }, [rootMargin])

  return { ref, isIntersecting }
}

export function ScrollFadeIn({
  children,
  duration = 1.2,     // segundos
  offsetY = 40,        // px
}: {
  children: ReactNode
  duration?: number
  offsetY?: number
}) {
  const { ref, isIntersecting } = useOnScreen<HTMLDivElement>('0px 0px -20% 0px')
  const [hasAnimated, setHasAnimated] = useState(false)

  // Marca como animado só na primeira vez
  useEffect(() => {
    if (isIntersecting && !hasAnimated) setHasAnimated(true)
  }, [isIntersecting, hasAnimated])

  return (
    <Box
      ref={ref}
      // Antes de animar: começa deslocado e transparente
      opacity={hasAnimated ? 1 : 0}
      transform={hasAnimated ? 'translateY(0)' : `translateY(${offsetY}px)`}
      transition={`opacity ${duration}s ease, transform ${duration}s ease`}
      willChange="opacity, transform"
    >
      {children}
    </Box>
  )
}
