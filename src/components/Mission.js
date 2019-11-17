import React from "react"
import TeamPhoto from "../images/team.jpeg"

const Mission = () => {
  return (
    <div className="mission">
      <h1>Our Mission</h1>
      <div className="container">
        <section>
          <h1>The Goal</h1>
          <p>
            The ultimate goal in collegiate rocketry is to develop an affordable
            ground-launched platform capable of surpassing the Karman Line (an
            altitude of 100 km).
            <br />
            <br />
            With recent advances in rocket propulsion, flight-ready electronics,
            additive manufacturing, and lightweight composites, it has become
            possible to design and construct such a rocket. SMRt will
            incorporate all of these advances into a cost-optimized modular
            platform.
          </p>
        </section>

        <section>
          <h1>How we're doing it</h1>
          <p>
            The Suborbital Modular Rocket (SMRt) is a powerful and versatile
            launch platform. It is intended to be a proof of concept for a
            low-earth-orbit (LEO) capable platform, but is powerful enough to be
            a useful vehicle in its own right.
            <br />
            <br />
            The SMRt is a single-stage rocket fueled by a liquid propulsion
            system. The regeneratively cooled engine is pressure fed liquid
            oxygen and RP-1. Helium is used as the pressurant. The vehicle was
            designed with the intention of being fully reusable. All flight
            functions, including engine control, telemetry, and recovery are
            controlled by a commercial off the shelf flight computer.
          </p>
        </section>
      </div>
      <div className="container" style={{ backgroundColor: "var(--light)" }}>
        {/* TODO: i'll make this into a better comp with separate headshots when I have more time */}
        <section>
          <h1>Meet the Team</h1>
          <img src={TeamPhoto} alt="the team" />
          <p style={{ marginTop: "2rem" }}>
            From right to left: Monica Traupmann, William Skwirut, Abraham
            Edens, Faris Ibrahim, Dakota Van Deursen, Nathan Tahbaz, Ben Iofel,
            Thomas Flaherty
          </p>
        </section>
      </div>
    </div>
  )
}

export default Mission
