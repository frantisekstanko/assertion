import { Assertion } from '../src/Assertion'

describe('Assertion.lessThan', () => {
  it('should pass for numbers less than threshold', () => {
    expect(() => Assertion.lessThan(5, 10)).not.toThrow()
    expect(() => Assertion.lessThan(-1, 0)).not.toThrow()
    expect(() => Assertion.lessThan(0, 1)).not.toThrow()
    expect(() => Assertion.lessThan(-100, -50)).not.toThrow()
  })

  it('should throw for numbers equal to threshold', () => {
    expect(() => Assertion.lessThan(10, 10)).toThrow(
      'Expected a number less than 10, got 10',
    )
    expect(() => Assertion.lessThan(0, 0)).toThrow(
      'Expected a number less than 0, got 0',
    )
  })

  it('should throw for numbers greater than threshold', () => {
    expect(() => Assertion.lessThan(15, 10)).toThrow(
      'Expected a number less than 10, got 15',
    )
    expect(() => Assertion.lessThan(1, 0)).toThrow(
      'Expected a number less than 0, got 1',
    )
  })

  it('should throw for non-numbers', () => {
    expect(() => Assertion.lessThan('5', 10)).toThrow(
      'Expected a number less than 10, got string',
    )
    expect(() => Assertion.lessThan(null, 10)).toThrow(
      'Expected a number less than 10, got null',
    )
    expect(() => Assertion.lessThan(undefined, 10)).toThrow(
      'Expected a number less than 10, got undefined',
    )
  })

  it('should throw custom message', () => {
    expect(() => Assertion.lessThan(15, 10, 'Custom error')).toThrow(
      'Custom error',
    )
  })
})
