import React, { useState } from "react"
import { Link } from "gatsby"

import useScrollHeight from "../hooks/useScrollHeight"
import Logo from "../images/icon.png"

const links = [
  {
    children: "Our Mission",
    to: "/",
  },
  {
    children: "Services",
    to: "/",
  },
  {
    children: "Gallery",
    to: "/",
  },
  {
    children: "Contact",
    to: "/",
  },
  {
    children: "Blog",
    to: "/",
  },
]

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const scrollHeight = useScrollHeight()
  return (
    <header className={scrollHeight > 60 ? "floating" : ""}>
      <div className="container">
        <div className="logo-container">
          <img className="logo-icon" src={Logo} alt="logo" />
          <span className="logo-text">CPR</span>
        </div>
        <div className="links">
          {links.map(e => (
            <Link
              {...e}
              key={e.children.toString()}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
        <div className="burger" onClick={() => setOpen(!isOpen)} tabIndex="0">
          <div className="meat" />
        </div>
      </div>
      <div
        className="mobile-nav"
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          opacity: isOpen ? "1" : "0",
        }}
      >
        {links.map(e => (
          <Link
            {...e}
            key={e.children.toString()}
            onClick={() => setOpen(false)}
          />
        ))}
      </div>
    </header>
  )
}

export default Header
