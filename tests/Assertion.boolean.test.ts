import { Assertion } from '../src/Assertion'

describe('Assertion.boolean', () => {
  it('should pass for valid booleans', () => {
    expect(() => Assertion.boolean(true)).not.toThrow()
    expect(() => Assertion.boolean(false)).not.toThrow()
  })

  it('should throw for non-booleans', () => {
    expect(() => Assertion.boolean('true')).toThrow(
      'Expected a boolean, got string',
    )
    expect(() => Assertion.boolean(1)).toThrow('Expected a boolean, got number')
    expect(() => Assertion.boolean(0)).toThrow('Expected a boolean, got number')
    expect(() => Assertion.boolean(null)).toThrow(
      'Expected a boolean, got null',
    )
    expect(() => Assertion.boolean(undefined)).toThrow(
      'Expected a boolean, got undefined',
    )
    expect(() => Assertion.boolean({})).toThrow(
      'Expected a boolean, got object',
    )
    expect(() => Assertion.boolean([])).toThrow(
      'Expected a boolean, got object',
    )
  })

  it('should throw custom message', () => {
    expect(() => Assertion.boolean(123, 'Custom error')).toThrow('Custom error')
  })
})
