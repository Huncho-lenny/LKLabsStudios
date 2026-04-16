import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import App from '@/App'

describe('App', () => {
  it('renders the studio brand', () => {
    render(<App />)

    expect(screen.getAllByRole('link', { name: /start a project/i }).length).toBeGreaterThan(0)
  })
})
