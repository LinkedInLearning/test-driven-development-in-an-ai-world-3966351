import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '../pages/Home'

describe('Home', () => {
  it('shows the welcome message', () => {
    render(<Home />)
    expect(screen.getByText('Welcome to')).toBeInTheDocument()
    expect(screen.getByText('Discover amazing destinations and plan your perfect trip with us!')).toBeInTheDocument()
  })

  it('shows the destination cards', () => {
    render(<Home />)
    expect(screen.getByText('Beach Destinations')).toBeInTheDocument()
    expect(screen.getByText('Mountain Adventures')).toBeInTheDocument()
    expect(screen.getByText('City Tours')).toBeInTheDocument()
  })
})