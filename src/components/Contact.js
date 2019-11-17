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
            A passionate rocketry enthusiast? Join our team and help us reach
            the Karman line!
          </p>
          <br />
          <p>
            The team is looking for sponsors and mentors that are willing to
            join us on our one year mission. Donations, parts contributions,
            advice, or coffee. We’re excited about any help you want to give!
          </p>
          <br />
          <p>
            Interested? Fill out the contact form or email us at{" "}
            <a href="mailto:contact@cprocketry.com">contact@cprocketry.com</a>
          </p>
          <br />
        </section>
      </div>
    </div>
  )
}

export default Contact
