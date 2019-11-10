import { useState, useEffect } from "react"
import { throttle } from "lodash"

const getCurrentHeight = () => window.pageYOffset

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
