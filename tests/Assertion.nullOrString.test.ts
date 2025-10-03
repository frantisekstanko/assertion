import { Assertion } from '../src/Assertion'

describe('Assertion.nullOrString', () => {
  it('should pass for null', () => {
    expect(() => Assertion.nullOrString(null)).not.toThrow()
  })

  it('should pass for strings', () => {
    expect(() => Assertion.nullOrString('')).not.toThrow()
    expect(() => Assertion.nullOrString('hello')).not.toThrow()
  })

  it('should throw for other types', () => {
    expect(() => Assertion.nullOrString(123)).toThrow(
      'Expected a null or string, got number',
    )
    expect(() => Assertion.nullOrString(undefined)).toThrow(
      'Expected a null or string, got undefined',
    )
    expect(() => Assertion.nullOrString({})).toThrow(
      'Expected a null or string, got object',
    )
    expect(() => Assertion.nullOrString([])).toThrow(
      'Expected a null or string, got object',
    )
    expect(() => Assertion.nullOrString(true)).toThrow(
      'Expected a null or string, got boolean',
    )
  })

  it('should throw custom message', () => {
    expect(() => Assertion.nullOrString(123, 'Must be string or null')).toThrow(
      'Must be string or null',
    )
  })
})
