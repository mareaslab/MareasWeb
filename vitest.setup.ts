import '@testing-library/jest-dom'

// jsdom no implementa IntersectionObserver, que framer-motion usa en whileInView
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return [] }
}
globalThis.IntersectionObserver ??= MockIntersectionObserver as unknown as typeof IntersectionObserver
