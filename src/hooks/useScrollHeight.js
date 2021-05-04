import { useState, useLayoutEffect } from 'react'
import { throttle } from 'lodash'

const getCurrentHeight = () => {
  if (typeof window !== `undefined`) {
    return window.pageYOffset
  } else {
    return 0
  }
}

const useScrollHeight = () => {
  const [height, setHeight] = useState(getCurrentHeight())

  useLayoutEffect(() => {
    const handleScroll = throttle(() => {
      setHeight(getCurrentHeight())
    }, 100)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('touchmove', handleScroll)

    return () => {
      handleScroll.cancel()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchmove', handleScroll)
    }
  }, [])

  return height
}

export default useScrollHeight
