import './Services.css'

type Service = {
  title: string
  description: string
  theme: string
}

const services: Service[] = [
  {
    title: 'Weddings',
    description:
      'Elegant decor thoughtfully designed around your ceremony, venue, and vision.',
    theme: 'blush',
  },
  {
    title: 'Receptions & Engagements',
    description:
      'Beautiful settings for engagements, receptions, and the celebrations surrounding your big day.',
    theme: 'champagne',
  },
  {
    title: 'Birthdays',
    description:
      'Personalized decor for milestone birthdays, intimate celebrations, and everything in between.',
    theme: 'peach',
  },
  {
    title: 'Traditional Celebrations',
    description:
      'Meaningful decor for traditional ceremonies and culturally significant family celebrations.',
    theme: 'sage',
  },
  {
    title: 'Baby Showers',
    description:
      'Warm and elegant settings for baby showers, seemantham, and welcoming a new beginning.',
    theme: 'rose',
  },
  {
    title: 'Corporate & Special Events',
    description:
      'Polished event styling for corporate gatherings, communions, and other special occasions.',
    theme: 'lavender',
  },
]

function Services() {
  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="services__container">
        <div className="services__intro">
          <p className="services__eyebrow">What We Create</p>

          <h2 id="services-title" className="services__title">
            Decor for every celebration
          </h2>

          <p className="services__description">
            From intimate gatherings to grand celebrations, we create
            thoughtfully designed spaces that feel personal to you.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article
              className={`service-card service-card--${service.theme}`}
              key={service.title}
            >
              <span className="service-card__number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="service-card__title">{service.title}</h3>

              <p className="service-card__description">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services