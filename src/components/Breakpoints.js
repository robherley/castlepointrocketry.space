import { css } from "@emotion/core"
import facepaint from 'facepaint'

const mq = facepaint([
  // mobile
  '@media (min-width: 768px)',
  // tablets
  '@media (min-width: 976px)',
  // laptops
])

export default obj => css(mq(obj))
