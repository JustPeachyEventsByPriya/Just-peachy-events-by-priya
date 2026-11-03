import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import Header from './Header'

describe('Header', () => {
  it('renders the business branding and navigation', () => {
    render(<Header />)

    expect(
      screen.getByText(/just peachy events/i),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/by priya/i),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /services/i }),
    ).toHaveAttribute('href', '#services')
  })

  it('opens and closes the navigation menu', async () => {
    const user = userEvent.setup()

    render(<Header />)

    const menuButton = screen.getByRole('button', {
      name: /open navigation menu/i,
    })

    expect(menuButton).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    await user.click(menuButton)

    expect(
      screen.getByRole('button', {
        name: /close navigation menu/i,
      }),
    ).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes the menu after selecting a navigation item', async () => {
    const user = userEvent.setup()

    render(<Header />)

    await user.click(
      screen.getByRole('button', {
        name: /open navigation menu/i,
      }),
    )

    await user.click(
      screen.getByRole('link', { name: /services/i }),
    )

    expect(
      screen.getByRole('button', {
        name: /open navigation menu/i,
      }),
    ).toHaveAttribute('aria-expanded', 'false')
  })
})