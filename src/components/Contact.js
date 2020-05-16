import React from "react"

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="container">
        <section>
          <h1>How to reach out</h1>
          <p>
            Are you a member of the aerospace industry? An experienced academic?
            A passionate rocketry enthusiast? Contact us to learn more or book
            your launch at{" "}
            <a href="mailto:contact@hudsonspace.systems">contact@hudsonspace.systems</a>
            {" "}or call us at{" "}
            <a href="tel:12012687887">(201) 268-7887</a>
          </p>
          <br />
          <p>
            Interested in our mission and joining our team? Email{" "}
            <a href="mailto:jobs@hudsonspace.systems">jobs@hudsonspace.systems</a>.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Contact
