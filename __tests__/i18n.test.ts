import { describe, expect, test } from 'vitest'
import { es } from '@/i18n/messages/es'
import { ca } from '@/i18n/messages/ca'
import { localePath, stripLocale } from '@/i18n/config'

type Json = string | number | boolean | null | Json[] | { [key: string]: Json }

// Recorre el diccionario y devuelve cada texto con su ruta (p. ej. "mareas.items.0.name")
function collectStrings(value: Json, path = ''): Record<string, string> {
  if (typeof value === 'string') return { [path]: value }
  if (Array.isArray(value)) {
    return value.reduce<Record<string, string>>((acc, item, i) => ({ ...acc, ...collectStrings(item, `${path}.${i}`) }), {})
  }
  if (value && typeof value === 'object') {
    return Object.entries(value).reduce<Record<string, string>>(
      (acc, [key, item]) => ({ ...acc, ...collectStrings(item, path ? `${path}.${key}` : key) }),
      {}
    )
  }
  return {}
}

const esStrings = collectStrings(es as unknown as Json)
const caStrings = collectStrings(ca as unknown as Json)

describe('diccionarios es / ca', () => {
  test('el catalán tiene exactamente las mismas claves que el castellano (también en listas)', () => {
    expect(Object.keys(caStrings).sort()).toEqual(Object.keys(esStrings).sort())
  })

  test('no hay textos vacíos', () => {
    const empty = Object.entries(caStrings).filter(([, text]) => text.trim() === '')
    expect(empty).toEqual([])
  })

  test('los marcadores se conservan: **negrita** y {purpose}', () => {
    for (const [path, text] of Object.entries(esStrings)) {
      expect(caStrings[path].split('**').length, `negritas en ${path}`).toBe(text.split('**').length)
      expect(caStrings[path].includes('{purpose}'), `{purpose} en ${path}`).toBe(text.includes('{purpose}'))
    }
  })

})

describe('rutas con idioma', () => {
  test('localePath añade /ca solo al catalán', () => {
    expect(localePath('es', '/contacto')).toBe('/contacto')
    expect(localePath('ca', '/contacto')).toBe('/ca/contacto')
    expect(localePath('es', '/')).toBe('/')
    expect(localePath('ca', '/')).toBe('/ca')
    expect(localePath('ca', '/#mareas')).toBe('/ca/#mareas')
  })

  test('stripLocale quita el prefijo de idioma', () => {
    expect(stripLocale('/ca')).toBe('/')
    expect(stripLocale('/ca/contacto')).toBe('/contacto')
    expect(stripLocale('/contacto')).toBe('/contacto')
    expect(stripLocale('/')).toBe('/')
    expect(stripLocale('/carta')).toBe('/carta')
  })
})
