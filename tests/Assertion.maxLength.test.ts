import { Assertion } from '../src/Assertion'

describe('Assertion.maxLength', () => {
  it('should pass for strings within length limit', () => {
    expect(() => Assertion.maxLength('hello', 5)).not.toThrow()
    expect(() => Assertion.maxLength('hi', 5)).not.toThrow()
    expect(() => Assertion.maxLength('', 0)).not.toThrow()
  })

  it('should pass for arrays within length limit', () => {
    expect(() => Assertion.maxLength([1, 2, 3], 3)).not.toThrow()
    expect(() => Assertion.maxLength([1, 2], 5)).not.toThrow()
    expect(() => Assertion.maxLength([], 0)).not.toThrow()
  })

  it('should throw for strings exceeding length limit', () => {
    expect(() => Assertion.maxLength('hello', 3)).toThrow(
      'Expected a string or array with maximum length 3, got length 5',
    )
    expect(() => Assertion.maxLength('test', 2)).toThrow(
      'Expected a string or array with maximum length 2, got length 4',
    )
  })

  it('should throw for arrays exceeding length limit', () => {
    expect(() => Assertion.maxLength([1, 2, 3, 4, 5], 3)).toThrow(
      'Expected a string or array with maximum length 3, got length 5',
    )
    expect(() => Assertion.maxLength([1, 2], 1)).toThrow(
      'Expected a string or array with maximum length 1, got length 2',
    )
  })

  it('should throw for non-string and non-array values', () => {
    expect(() => Assertion.maxLength(123, 5)).toThrow(
      'Expected a string or array with maximum length 5, got length N/A',
    )
    expect(() => Assertion.maxLength(null, 5)).toThrow(
      'Expected a string or array with maximum length 5, got length N/A',
    )
    expect(() => Assertion.maxLength(undefined, 5)).toThrow(
      'Expected a string or array with maximum length 5, got length N/A',
    )
  })

  it('should throw custom message', () => {
    expect(() => Assertion.maxLength('toolong', 3, 'Custom error')).toThrow(
      'Custom error',
    )
  })
})
