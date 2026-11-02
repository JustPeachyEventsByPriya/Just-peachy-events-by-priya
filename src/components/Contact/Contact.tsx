import { useState, type FormEvent } from 'react'
import {
  submitQuoteRequest,
  type QuoteRequest,
} from '../../services/quoteService'
import './Contact.css'

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