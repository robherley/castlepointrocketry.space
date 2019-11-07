import React from "react"

// TODO: i'll prob change this

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", margin: "1rem 0" }}>
      © {new Date().getFullYear()}, Made with {"♥️"} by @robherley
    </footer>
  )
}

export default Footer
