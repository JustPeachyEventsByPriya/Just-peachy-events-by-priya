import heroImage from '../../assets/images/hero/hero-main.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src={heroImage}
        alt="Elegant event decor by Just Peachy Events"
      />

      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__eyebrow">Elegant Event Decor</p>

        <h1 id="hero-title" className="hero__title">
  Beautifully Designed.
  <br />
  Uniquely Yours.
</h1>

        <p className="hero__description">
          Thoughtfully designed decor for life's most memorable celebrations.
        </p>

        <div className="hero__actions">
          <a className="hero__button hero__button--primary" href="#gallery">
            Explore Our Work
          </a>

          <a className="hero__button hero__button--secondary" href="#contact">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero