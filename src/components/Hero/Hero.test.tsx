import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Hero from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /beautifully designed.*uniquely yours/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the primary actions', () => {
    render(<Hero />)

    expect(
      screen.getByRole('link', { name: /explore our work/i }),
    ).toHaveAttribute('href', '#gallery')

    expect(
      screen.getByRole('link', { name: /get a quote/i }),
    ).toHaveAttribute('href', '#contact')
  })

  it('renders the event decor image', () => {
    render(<Hero />)

    expect(
      screen.getByRole('img', {
        name: /elegant event decor by just peachy events/i,
      }),
    ).toBeInTheDocument()
  })
})