import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Footer from './Footer'

describe('Footer', () => {
  it('renders the business information', () => {
    render(<Footer />)

    expect(
      screen.getByText(/just peachy events/i),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/serving durham region/i),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /justpeachyeventsbypriya@gmail.com/i,
      }),
    ).toHaveAttribute(
      'href',
      'mailto:justpeachyeventsbypriya@gmail.com',
    )
  })

  it('provides navigation to the main sections', () => {
    render(<Footer />)

    expect(
      screen.getByRole('link', { name: /services/i }),
    ).toHaveAttribute('href', '#services')

    expect(
      screen.getByRole('link', { name: /gallery/i }),
    ).toHaveAttribute('href', '#gallery')

    expect(
      screen.getByRole('link', { name: /request a quote/i }),
    ).toHaveAttribute('href', '#contact')
  })
})