import { useState, useEffect } from "react"
import { throttle } from "lodash"

const getCurrentHeight = () => {
  if (typeof window !== `undefined`) {
    return window.pageYOffset
  } else {
    return 0
  }
}

export default () => {
  const [height, setHeight] = useState(getCurrentHeight())

  useEffect(() => {
    const handleScroll = throttle(() => {
      setHeight(getCurrentHeight())
    }, 100)

    window.addEventListener("scroll", handleScroll)

    return () => {
      handleScroll.cancel()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return height
}
