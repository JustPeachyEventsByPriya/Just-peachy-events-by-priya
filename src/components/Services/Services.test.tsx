import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Services from './Services'

describe('Services', () => {
  it('renders the services section heading', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /decor for every celebration/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders all service categories', () => {
    render(<Services />)

    const expectedServices = [
      'Weddings',
      'Receptions & Engagements',
      'Birthdays',
      'Traditional Celebrations',
      'Baby Showers',
      'Corporate & Special Events',
    ]

    expectedServices.forEach((service) => {
      expect(
        screen.getByRole('heading', { level: 3, name: service }),
      ).toBeInTheDocument()
    })
  })
})