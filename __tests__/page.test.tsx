import { render, screen } from '@testing-library/react'
import { expect, test, describe, vi } from 'vitest'
import MareasWeb from '@/app/page'

// Mocking next/dynamic since it runs on the server/client differently
vi.mock('next/dynamic', () => ({
  default: () => {
    return function MockedDynamicComponent() {
      return <div>Dynamic Component</div>;
    };
  },
}));

describe('MareasWeb Home Page', () => {
  test('renders the main element', () => {
    render(<MareasWeb />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
