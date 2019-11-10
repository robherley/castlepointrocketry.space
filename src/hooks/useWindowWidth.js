import { useState, useEffect } from "react"
import { throttle } from "lodash"

export default () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = throttle(() => {
      setWidth(window.innerWidth)
    }, 100)

    window.addEventListener("resize", handleResize)

    return () => {
      handleResize.cancel()
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return width
}
