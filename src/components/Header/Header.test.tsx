import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Header from './Header'

describe('Header', () => {
  it('renders the Just Peachy Events brand', () => {
    render(<Header />)

    expect(
      screen.getByText(/Just Peachy Events/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/by Priya/i)
    ).toBeInTheDocument()
  })

  it('renders the main navigation', () => {
    render(<Header />)

    expect(
      screen.getByRole('navigation', { name: /main navigation/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'Home' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'Services' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'Gallery' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'About' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'Contact' })
    ).toBeInTheDocument()
  })
})