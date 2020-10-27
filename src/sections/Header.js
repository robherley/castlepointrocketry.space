import React, { useState } from "react"
import { Link, navigate } from "gatsby"

import { useScrollHeight } from "../hooks/"
import Logo from "../images/HSSwhite.svg"

const links = [
  {
    children: "Services",
    to: "/services",
  },
  {
    children: "Team",
    to: "/#team",
  },
  // {
  //   children: "News",
  //   to: "/news",
  // },
  // {
  //   children: "Services",
  //   to: "/",
  // },
  {
    children: "Gallery",
    to: "/gallery",
  },
  {
    children: "Contact",
    to: "/#contact",
  },
  // {
  //   children: "Blog",
  //   to: "/",
  // },
]

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const scrollHeight = useScrollHeight()

  return (
    <>
      <header className={scrollHeight > 60 ? "floating" : ""}>
        <div className="container">
          <div
            className="logo-container"
            onClick={() => navigate("/")}
            tabIndex="0"
            role="link"
          >
            <img className="logo-icon" src={Logo} alt="logo" />
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
          <div className="burger" role="button" onClick={() => setOpen(!isOpen)} tabIndex="0">
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
    </>
  )
}

export default Header
