import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <a className="footer__logo" href="#" aria-label="Just Peachy Events home">
              <span>JUST PEACHY EVENTS</span>
              <small>by Priya</small>
            </a>

            <p className="footer__tagline">
              Thoughtfully designed event decor for celebrations across
              Durham Region and the Greater Toronto Area.
            </p>
          </div>

          <div className="footer__navigation">
            <p className="footer__heading">Explore</p>

            <nav aria-label="Footer navigation">
              <a href="#">Home</a>
              <a href="#services">Services</a>
              <a href="#gallery">Gallery</a>
              <a href="#about">About</a>
              <a href="#contact">Request a Quote</a>
            </nav>
          </div>

          <div className="footer__contact">
            <p className="footer__heading">Get in Touch</p>

            <a href="mailto:justpeachyeventsbypriya@gmail.com">
              justpeachyeventsbypriya@gmail.com
            </a>

            <p>
              Courtice, Ontario
              <br />
              Serving Durham Region &amp; the GTA
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} Just Peachy Events by Priya. All rights reserved.
          </p>

          <p>Designed with care for beautiful celebrations.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer