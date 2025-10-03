import { Assertion } from '../src/Assertion'

describe('Assertion.string', () => {
  it('should pass for valid strings', () => {
    expect(() => Assertion.string('')).not.toThrow()
    expect(() => Assertion.string('hello')).not.toThrow()
  })

  it('should throw for non-strings', () => {
    expect(() => Assertion.string(123)).toThrow('Expected a string, got number')
    expect(() => Assertion.string(null)).toThrow('Expected a string, got null')
    expect(() => Assertion.string(undefined)).toThrow(
      'Expected a string, got undefined',
    )
    expect(() => Assertion.string({})).toThrow('Expected a string, got object')
    expect(() => Assertion.string([])).toThrow('Expected a string, got object')
    expect(() => Assertion.string(Symbol('test'))).toThrow(
      'Expected a string, got symbol',
    )
    expect(() => Assertion.string(BigInt(123))).toThrow(
      'Expected a string, got bigint',
    )
    expect(() => Assertion.string(() => {})).toThrow(
      'Expected a string, got function',
    )
  })

  it('should throw custom message', () => {
    expect(() => Assertion.string(123, 'Custom error')).toThrow('Custom error')
  })
})
