export type QuoteRequest = {
  name: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  location: string
  guestCount: string
  message: string
}

export async function submitQuoteRequest(
  quote: QuoteRequest,
): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error('Web3Forms access key is not configured.')
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },

    body: JSON.stringify({
      access_key: accessKey,

      subject: `New ${quote.eventType || 'Event'} Quote Request — Just Peachy Events`,

      from_name: 'Just Peachy Events Website',

      name: quote.name,
      email: quote.email,
      phone: quote.phone,

      event_type: quote.eventType,
      event_date: quote.eventDate || 'Not provided',
      event_location: quote.location || 'Not provided',
      guest_count: quote.guestCount || 'Not provided',

      message: quote.message,
    }),
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Unable to submit quote request.')
  }
}