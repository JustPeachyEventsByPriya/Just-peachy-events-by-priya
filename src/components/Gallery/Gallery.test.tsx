import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Gallery from './Gallery'
import { galleryItems } from '../../data/gallery'

describe('Gallery', () => {
  it('renders the gallery heading', () => {
    render(<Gallery />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /moments we've brought to life/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders every gallery item', () => {
    render(<Gallery />)

    galleryItems.forEach((item) => {
      expect(
        screen.getByRole('img', { name: item.alt }),
      ).toBeInTheDocument()
    })
  })

  it('lazy loads gallery images', () => {
    render(<Gallery />)

    galleryItems.forEach((item) => {
      expect(
        screen.getByRole('img', { name: item.alt }),
      ).toHaveAttribute('loading', 'lazy')
    })
  })
})