import './About.css'

function About() {
  return (
    <section
      className="about"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about__container">
        <p className="about__eyebrow">Our Story</p>

        <div className="about__content">
          <div className="about__heading">
            <h2 id="about-title" className="about__title">
              What started with a love for beautiful celebrations became
              Just Peachy.
            </h2>
          </div>

          <div className="about__story">
            <p><b>Just Peachy Events by Priya is a GTA event décor company creating personalized décor for weddings, engagements, receptions, birthdays, baby showers, traditional Indian celebrations, corporate events, and other special occasions.
            </b></p>

            <p>
                What began three years ago with a love for beautiful celebrations has grown one event at a time. Today, we've had the privilege of designing and decorating more than 500 events across the Greater Toronto Area, creating everything from intimate family celebrations to elaborate wedding and reception setups. Our work brings together modern event styling and the traditions that make every celebration meaningful. From floral backdrops and elegant stage décor to Indian wedding décor, seemantham and traditional ceremony décor, we design each setup around the occasion, venue, color palette, and our client's vision
            </p>

            <p>
              Based in Courtice, Ontario, we serve clients throughout Durham Region and the GTA, including Oshawa, Whitby, Ajax, Pickering, Scarborough, Toronto and surrounding communities. We remain hands-on throughout the process—from understanding your vision and planning the design to setup at the venue and the finishing details that bring everything together.
            </p>

            <p>
              We're still hands-on with the process — from understanding
              your vision and designing the setup to bringing it all
              together at the venue. Because behind every backdrop,
              flower, and finishing detail is a moment that matters to
              someone.
            </p>
          </div>
        </div>

        <div className="about__stats" aria-label="Just Peachy Events highlights">
          <div className="about-stat">
            <strong className="about-stat__value">500+</strong>
            <span className="about-stat__label">Events Created</span>
          </div>

          <div className="about-stat">
            <strong className="about-stat__value">3</strong>
            <span className="about-stat__label">Years Creating</span>
          </div>

          <div className="about-stat">
            <strong className="about-stat__value">GTA</strong>
            <span className="about-stat__label">Proudly Serving</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About