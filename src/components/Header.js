import React from "react"
import { Link } from "gatsby"
import Logo from "../images/icon.png"

// TODO: sticky nav appear when user scrolls up
const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} />
      <div className="links">
        <Link to="/">Our Mission</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Services</Link>
        <Link to="/">Gallery</Link>
        <Link to="/">Contact</Link>
      </div>
    </header>
  )
}

export default Header
