import { Assertion } from '../src/Assertion'

describe('Assertion.minLength', () => {
  it('should pass for strings with sufficient length', () => {
    expect(() => {
      Assertion.minLength('hello', 5)
    }).not.toThrow()
    expect(() => {
      Assertion.minLength('hello', 3)
    }).not.toThrow()
    expect(() => {
      Assertion.minLength('', 0)
    }).not.toThrow()
  })

  it('should pass for arrays with sufficient length', () => {
    expect(() => {
      Assertion.minLength([1, 2, 3], 3)
    }).not.toThrow()
    expect(() => {
      Assertion.minLength([1, 2, 3], 2)
    }).not.toThrow()
    expect(() => {
      Assertion.minLength([], 0)
    }).not.toThrow()
  })

  it('should throw for strings with insufficient length', () => {
    expect(() => {
      Assertion.minLength('hi', 5)
    }).toThrow('Expected a string or array with minimum length 5, got length 2')
    expect(() => {
      Assertion.minLength('', 1)
    }).toThrow('Expected a string or array with minimum length 1, got length 0')
  })

  it('should throw for arrays with insufficient length', () => {
    expect(() => {
      Assertion.minLength([1, 2], 5)
    }).toThrow('Expected a string or array with minimum length 5, got length 2')
    expect(() => {
      Assertion.minLength([], 1)
    }).toThrow('Expected a string or array with minimum length 1, got length 0')
  })

  it('should throw for non-string and non-array values', () => {
    expect(() => {
      Assertion.minLength(123, 5)
    }).toThrow(
      'Expected a string or array with minimum length 5, got length N/A',
    )
    expect(() => {
      Assertion.minLength(null, 5)
    }).toThrow(
      'Expected a string or array with minimum length 5, got length N/A',
    )
    expect(() => {
      Assertion.minLength(undefined, 5)
    }).toThrow(
      'Expected a string or array with minimum length 5, got length N/A',
    )
  })

  it('should throw custom message', () => {
    expect(() => {
      Assertion.minLength('hi', 5, 'Custom error')
    }).toThrow('Custom error')
  })
})
