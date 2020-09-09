import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import { useLocation } from '@reach/router'

import { useScrollHeight } from "../hooks/"
import Logo from "../images/HSSwhite.svg"

const links = [
  {
    children: "Services",
    to: "/services",
  },
  {
    children: "Team",
    to: "/team",
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
    to: "/contact",
  },
  // {
  //   children: "Blog",
  //   to: "/",
  // },
]

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const scrollHeight = useScrollHeight()
  const location = useLocation()

  return (
    <>
      { location.pathname === '/' &&
        <h2 className="banner">Become a part of our company by <a target="_blank" href="https://invest.microventures.com/upcoming/hudson-space-systems/?referral_code=HSSWEB090820">investing</a> in HSS on MicroVentures</h2> }
      <header className={scrollHeight > 60 ? "floating" : ""}>
        <div className="container">
          <div
            className="logo-container"
            onClick={() => navigate("/")}
            tabIndex="0"
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
    </>
  )
}

export default Header
