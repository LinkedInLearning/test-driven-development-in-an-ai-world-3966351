import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('App', () => {
  

  it('Displays the default initial page', () => {
    renderWithRouter(<App />)
    expect(screen.getByText('Welcome to')).toBeInTheDocument()
  })
})