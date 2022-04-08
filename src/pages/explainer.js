import { useEffect } from 'react'
import { navigate } from '@reach/router'

const Handout1 = () => {
  useEffect(() => {
    navigate('https://youtu.be/WBYJer5THBM')
  }, [])
  return null
}

export default Handout1
