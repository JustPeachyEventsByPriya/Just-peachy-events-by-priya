import { galleryItems } from '../../data/gallery'
import './Gallery.css'

function Gallery() {
  return (
    <section
      className="gallery"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="gallery__container">
        <div className="gallery__header">
          <div>
            <p className="gallery__eyebrow">Our Work</p>

            <h2 id="gallery-title" className="gallery__title">
              Moments we've brought to life
            </h2>
          </div>

          <p className="gallery__intro">
            A glimpse into celebrations thoughtfully designed and brought
            together by Just Peachy Events.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.id}>
              <img
                className="gallery-card__image"
                src={item.imageUrl}
                alt={item.alt}
                loading="lazy"
              />

              <div className="gallery-card__overlay">
                <p className="gallery-card__category">{item.category}</p>

                <h3 className="gallery-card__title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery