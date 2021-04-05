import { useState, useEffect } from 'react'
import { throttle } from 'lodash'

const getCurrentWidth = () => {
  if (typeof window !== `undefined`) {
    return window.innerWidth
  } else {
    return 0
  }
}

const useWindowWidth = () => {
  const [width, setWidth] = useState(getCurrentWidth())

  useEffect(() => {
    const handleResize = throttle(() => {
      setWidth(getCurrentWidth())
    }, 100)

    window.addEventListener('resize', handleResize)

    return () => {
      handleResize.cancel()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return width
}

export default useWindowWidth
