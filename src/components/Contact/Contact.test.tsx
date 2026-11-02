import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import Contact from './Contact'

describe('Contact', () => {
  it('renders the quote form', () => {
    render(<Contact />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /tell us about your celebration/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /request a quote/i }),
    ).toBeInTheDocument()
  })

  it('allows a customer to enter inquiry details', async () => {
    const user = userEvent.setup()

    render(<Contact />)

    const name = screen.getByLabelText(/name/i)
    const email = screen.getByLabelText(/email/i)

    await user.type(name, 'Priya')
    await user.type(email, 'priya@example.com')

    expect(name).toHaveValue('Priya')
    expect(email).toHaveValue('priya@example.com')
  })

  it('submits the quote request when the form is submitted', async () => {
    const user = userEvent.setup()

    render(<Contact />)

    const name = screen.getByLabelText(/name/i)
    const email = screen.getByLabelText(/email/i)
    const phone = screen.getByLabelText(/phone/i)
    const eventType = screen.getByLabelText(/event type/i)
    const eventDate = screen.getByLabelText(/event date/i)
    const location = screen.getByLabelText(/location/i)
    const guestCount = screen.getByLabelText(/guest count/i)
    const message = screen.getByLabelText(/message/i)
    const submitButton = screen.getByRole('button', { name: /request a quote/i })

    await user.type(name, 'Priya')
    await user.type(email, 'priya@example.com')
    await user.type(phone, '555-1234')
    await user.selectOptions(eventType, 'wedding')
    await user.type(eventDate, '2023-12-01')
    await user.type(location, 'Whitby, ON')
    await user.type(guestCount, '100')
    await user.type(message, 'We would like a beautiful wedding setup.')

    await user.click(submitButton)

    expect(submitButton).toBeDisabled()
  })
})