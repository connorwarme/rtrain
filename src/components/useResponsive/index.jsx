import { useLayoutEffect, useState } from 'react'

const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  })

  const handleResize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: innerWidth,
    })
  }
  useLayoutEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return { windowSize }
}

export default useResponsive
