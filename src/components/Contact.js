import React from "react"

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="container">
        <section>
          {/* TODO: this will prob be a form eventually */}
          <h1>How to reach out</h1>
          <p>
            Are you a member of the aerospace industry? An experienced academic?
            A passionate rocketry enthusiast? Contact us to learn more or book
            your launch at{" "}
            <a href="mailto:contact@cprocketry.com">contact@cprocketry.com</a>!
          </p>
          <br />
          <p>
            Interested in our mission and joining our team? Email{" "}
            <a href="mailto:careers@cprocketry.com">careers@cprocketry.com</a>!
          </p>
        </section>
      </div>
    </div>
  )
}

export default Contact
