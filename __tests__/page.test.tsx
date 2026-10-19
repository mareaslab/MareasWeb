import { render, screen } from '@testing-library/react'
import { expect, test, describe, vi, beforeEach } from 'vitest'
import { HomePage } from '@/components/HomePage'
import { LocaleProvider } from '@/i18n/LocaleProvider'
import { getMessages } from '@/i18n/messages'
import type { Locale } from '@/i18n/config'

// Mocking next/dynamic since it runs on the server/client differently
vi.mock('next/dynamic', () => ({
  default: () => {
    return function MockedDynamicComponent() {
      return <div>Dynamic Component</div>;
    };
  },
}));

const nav = vi.hoisted(() => ({ pathname: '/' }))
vi.mock('next/navigation', () => ({ usePathname: () => nav.pathname }))

function renderHome(locale: Locale) {
  return render(
    <LocaleProvider locale={locale} messages={getMessages(locale)}>
      <HomePage />
    </LocaleProvider>
  )
}

describe('MareasWeb Home Page', () => {
  beforeEach(() => {
    nav.pathname = '/'
  })

  test('renders the main element', () => {
    renderHome('es')
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  test('shows Spanish copy and unprefixed links by default', () => {
    renderHome('es')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Mareas, Lab de innovación social y digital')
    expect(screen.getAllByRole('link', { name: /Únete a Mareas/ })[0]).toHaveAttribute('href', '/contacto')
  })

  test('shows Catalan copy and /ca links in the Catalan version', () => {
    nav.pathname = '/ca'
    renderHome('ca')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Mareas, Lab d'innovació social i digital")
    expect(screen.getAllByRole('link', { name: /Uneix-te a Mareas/ })[0]).toHaveAttribute('href', '/ca/contacto')
  })

  test('language switcher points to the same page in the other language', () => {
    nav.pathname = '/ca/contacto'
    renderHome('ca')
    const toSpanish = screen.getAllByRole('link', { name: 'Canviar a castellà' })[0]
    expect(toSpanish).toHaveAttribute('href', '/contacto')
  })
})
