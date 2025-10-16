'use client'

import { useEffect, useState } from 'react'
import { IconButton, useBreakpointValue  } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false)
  const isMobile = useBreakpointValue({ base: true, md: false })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
    // Se for mobile, não renderiza o botão
  if (isMobile) return null

  return (
    <>
      {showButton && (
        <IconButton
          aria-label="Voltar ao topo"
          icon={<ChevronUpIcon boxSize={6} />}
          onClick={scrollToTop}
          position="fixed"
          bottom="30px"
          right="30px"
          zIndex="1000"
          bgGradient="linear(to-r, #218F60, #28B779, #1F8C5E)"
          color="white"
          _hover={{ bg: 'green.700' }}
          borderRadius="full"
          size="lg"
          shadow="lg"
        />
      )}
    </>
  )
}
