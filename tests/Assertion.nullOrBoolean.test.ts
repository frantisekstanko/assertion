import { Assertion } from '../src/Assertion'

describe('Assertion.nullOrBoolean', () => {
  it('should pass for null', () => {
    expect(() => Assertion.nullOrBoolean(null)).not.toThrow()
  })

  it('should pass for valid booleans', () => {
    expect(() => Assertion.nullOrBoolean(true)).not.toThrow()
    expect(() => Assertion.nullOrBoolean(false)).not.toThrow()
  })

  it('should throw for non-null and non-boolean values', () => {
    expect(() => Assertion.nullOrBoolean('true')).toThrow(
      'Expected a null or boolean, got string',
    )
    expect(() => Assertion.nullOrBoolean(1)).toThrow(
      'Expected a null or boolean, got number',
    )
    expect(() => Assertion.nullOrBoolean(undefined)).toThrow(
      'Expected a null or boolean, got undefined',
    )
    expect(() => Assertion.nullOrBoolean({})).toThrow(
      'Expected a null or boolean, got object',
    )
    expect(() => Assertion.nullOrBoolean([])).toThrow(
      'Expected a null or boolean, got object',
    )
  })

  it('should throw custom message', () => {
    expect(() => Assertion.nullOrBoolean(123, 'Custom error')).toThrow(
      'Custom error',
    )
  })
})
