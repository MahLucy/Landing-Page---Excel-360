// src/app/components/Animacao.tsx (ou onde estiver seu arquivo)

'use client'
import { useEffect, useRef, useState } from 'react'
import { Box, usePrefersReducedMotion } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

// O hook useOnScreen está correto, não precisa de alterações.
function useOnScreen<T extends Element>(rootMargin = '0px') {
  const ref = useRef<T | null>(null)
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [rootMargin])

  return { ref, isIntersecting }
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function Animacao({
  to,
  duration = 900,
  startFrom = 0,
  suffix = '',
  prefix = '',
  decimals = 0,
  once = true,
}: {
  to: number
  duration?: number
  startFrom?: number
  suffix?: string
  prefix?: string
  decimals?: number
  once?: boolean
}) {
  const prefersReduced = usePrefersReducedMotion()
  const { ref, isIntersecting } = useOnScreen<HTMLSpanElement>('0px 0px -25% 0px')
  const [value, setValue] = useState(startFrom)
  const [played, setPlayed] = useState(false)

  useEffect(() => {
    if (!isIntersecting || (once && played)) {
      return
    }

    if (prefersReduced) {
      setValue(to)
      return
    }

    let raf = 0
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const t = Math.min(1, elapsed / duration)
      const eased = easeOutCubic(t)
      const current = startFrom + (to - startFrom) * eased
      setValue(current)

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        // 👇 A MUDANÇA ESTÁ AQUI!
        // A animação terminou, agora podemos marcar como "played".
        if (once) {
          setPlayed(true)
        }
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isIntersecting, prefersReduced, to, duration, startFrom, once, played])

  const bounce = keyframes`
    0% { transform: translateY(0) scale(1); }
    40% { transform: translateY(-4px) scale(1.04); }
    100% { transform: translateY(0) scale(1); }
  `

  const done = Math.abs(value - to) < 0.001

  return (
    <Box
      as="span"
      ref={ref}
      display="inline-block"
      animation={done && !prefersReduced ? `${bounce} 320ms ease-out` : undefined}
      willChange="transform"
    >
      {prefix}
      {value.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </Box>
  )
}

export default Animacao