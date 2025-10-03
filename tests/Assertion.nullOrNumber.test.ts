import { Assertion } from '../src/Assertion'

describe('Assertion.nullOrNumber', () => {
  it('should pass for null', () => {
    expect(() => Assertion.nullOrNumber(null)).not.toThrow()
  })

  it('should pass for numbers', () => {
    expect(() => Assertion.nullOrNumber(0)).not.toThrow()
    expect(() => Assertion.nullOrNumber(42)).not.toThrow()
    expect(() => Assertion.nullOrNumber(-10)).not.toThrow()
    expect(() => Assertion.nullOrNumber(3.14)).not.toThrow()
  })

  it('should throw for non-numbers', () => {
    expect(() => Assertion.nullOrNumber('123')).toThrow(
      'Expected a null or number, got string',
    )
    expect(() => Assertion.nullOrNumber(undefined)).toThrow(
      'Expected a null or number, got undefined',
    )
  })

  it('should throw for NaN', () => {
    expect(() => Assertion.nullOrNumber(NaN)).toThrow(
      'Expected a valid number, got NaN',
    )
  })

  it('should throw for Infinity', () => {
    expect(() => Assertion.nullOrNumber(Infinity)).toThrow(
      'Expected a finite number, got Infinity',
    )
    expect(() => Assertion.nullOrNumber(-Infinity)).toThrow(
      'Expected a finite number, got -Infinity',
    )
  })

  it('should throw custom message', () => {
    expect(() =>
      Assertion.nullOrNumber('test', 'Must be number or null'),
    ).toThrow('Must be number or null')
  })
})
