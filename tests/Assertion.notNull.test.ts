import { Assertion } from '../src/Assertion'

describe('Assertion.notNull', () => {
  it('should pass for non-null and non-undefined values', () => {
    expect(() => Assertion.notNull('hello')).not.toThrow()
    expect(() => Assertion.notNull(0)).not.toThrow()
    expect(() => Assertion.notNull(false)).not.toThrow()
    expect(() => Assertion.notNull({})).not.toThrow()
    expect(() => Assertion.notNull([])).not.toThrow()
  })

  it('should throw for null', () => {
    expect(() => Assertion.notNull(null)).toThrow(
      'Expected a non-null and non-undefined value, got null',
    )
  })

  it('should throw for undefined', () => {
    expect(() => Assertion.notNull(undefined)).toThrow(
      'Expected a non-null and non-undefined value, got undefined',
    )
  })

  it('should throw custom message', () => {
    expect(() => Assertion.notNull(null, 'Value required')).toThrow(
      'Value required',
    )
    expect(() => Assertion.notNull(undefined, 'Value required')).toThrow(
      'Value required',
    )
  })
})
