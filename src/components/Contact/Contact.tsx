import { useState, type FormEvent } from 'react'
import {
  submitQuoteRequest,
  type QuoteRequest,
} from '../../services/quoteService'
import './Contact.css'
import { socialLinks } from '../../config/socialLinks'

const initialForm: QuoteRequest = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  location: '',
  guestCount: '',
  message: '',
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="contact-social__icon"
    >
      <path
        fill="currentColor"
        d="M12.04 2a9.84 9.84 0 0 0-8.42 14.93L2 22l5.2-1.57A9.95 9.95 0 1 0 12.04 2Zm0 17.9a8.02 8.02 0 0 1-4.09-1.12l-.29-.17-3.08.93.95-3-.19-.31a7.94 7.94 0 1 1 6.7 3.67Zm4.4-5.94c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="contact-social__icon"
    >
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 1.5A1.25 1.25 0 1 1 16.25 6.75 1.25 1.25 0 0 1 17.5 5.5ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z"
      />
    </svg>
  )
}

function Contact() {
  const [form, setForm] = useState<QuoteRequest>(initialForm)

const [status, setStatus] = useState<
  'idle' | 'submitting' | 'success' | 'error'
>('idle')

  function updateField(field: keyof QuoteRequest, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()

  setStatus('submitting')

  try {
    await submitQuoteRequest(form)

    setForm(initialForm)
    setStatus('success')
  } catch (error) {
    console.error('Quote submission failed:', error)

    setStatus('error')
  }
}

  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact__container">
        <div className="contact__intro">
          <p className="contact__eyebrow">Let's Create Something Beautiful</p>

          <h2 id="contact-title" className="contact__title">
            Tell us about your celebration.
          </h2>

          <p className="contact__description">
            Planning an event in Durham Region or the Greater Toronto Area?
            Tell us what you're celebrating and a little about your vision.
          </p>

          <p className="contact__note">
            Based in Courtice, Ontario and serving celebrations across the GTA.
          </p>

          <div className="contact-social">
            <p className="contact-social__eyebrow">
              Prefer to connect directly?
            </p>

            <div className="contact-social__links">
              <a
                href={socialLinks.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social__card"
                aria-label="Chat with Just Peachy Events on WhatsApp"
              >
                <span className="contact-social__icon-wrapper contact-social__icon-wrapper--whatsapp">
                  <WhatsAppIcon />
                </span>

                <span className="contact-social__content">
                  <strong>WhatsApp</strong>
                  <small>Chat with us about your event</small>
                </span>

                <span className="contact-social__arrow" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href={socialLinks.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social__card"
                aria-label="Visit Just Peachy Events on Instagram"
              >
                <span className="contact-social__icon-wrapper contact-social__icon-wrapper--instagram">
                  <InstagramIcon />
                </span>

                <span className="contact-social__content">
                  <strong>Instagram</strong>
                  <small>See our latest event decor</small>
                </span>

                <span className="contact-social__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="quote-form__row">
            <div className="quote-form__field">
              <label htmlFor="name">Name *</label>
              <input
                type="checkbox"
                name="botcheck"
                className="quote-form__botcheck"
                tabIndex={-1}
                autoComplete="off"
              />
              
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
              />
            </div>

            <div className="quote-form__field">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
              />
            </div>
          </div>

          <div className="quote-form__row">
            <div className="quote-form__field">
              <label htmlFor="phone">Phone *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
              />
            </div>

            <div className="quote-form__field">
              <label htmlFor="event-type">Event Type *</label>

              <select
                id="event-type"
                name="eventType"
                required
                value={form.eventType}
                onChange={(event) =>
                  updateField('eventType', event.target.value)
                }
              >
                <option value="">Select an event</option>
                <option value="wedding">Wedding</option>
                <option value="engagement-reception">
                  Engagement / Reception
                </option>
                <option value="birthday">Birthday</option>
                <option value="baby-shower">Baby Shower</option>
                <option value="traditional">
                  Traditional Celebration
                </option>
                <option value="corporate">Corporate Event</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="quote-form__row">
            <div className="quote-form__field">
              <label htmlFor="event-date">Event Date</label>
              <input
                id="event-date"
                name="eventDate"
                type="date"
                value={form.eventDate}
                onChange={(event) =>
                  updateField('eventDate', event.target.value)
                }
              />
            </div>

            <div className="quote-form__field">
              <label htmlFor="location">Event Location / Venue</label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="e.g. Whitby, ON"
                value={form.location}
                onChange={(event) =>
                  updateField('location', event.target.value)
                }
              />
            </div>
          </div>

          <div className="quote-form__field">
            <label htmlFor="guest-count">Approximate Guest Count</label>
            <input
              id="guest-count"
              name="guestCount"
              type="number"
              min="1"
              value={form.guestCount}
              onChange={(event) =>
                updateField('guestCount', event.target.value)
              }
            />
          </div>

          <div className="quote-form__field">
            <label htmlFor="message">Message *</label>

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your theme, colors, venue, or the kind of decor you have in mind."
              value={form.message}
              onChange={(event) =>
                updateField('message', event.target.value)
              }
            />
          </div>

          <button
            className="quote-form__submit"
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting'
              ? 'Sending...'
              : 'Request a Quote'}
          </button>

          {status === 'success' && (
            <p className="quote-form__success" role="status">
              Thank you! We've received your request and will be in touch soon.
            </p>
          )}

          {status === 'error' && (
            <p className="quote-form__error" role="alert">
              We couldn't send your request. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact