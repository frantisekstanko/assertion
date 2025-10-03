import { Assertion } from '../src/Assertion'

describe('Assertion.email', () => {
  it('should pass for valid email addresses', () => {
    expect(() => Assertion.email('test@example.com')).not.toThrow()
    expect(() => Assertion.email('user.name@example.com')).not.toThrow()
    expect(() => Assertion.email('user+tag@example.co.uk')).not.toThrow()
    expect(() => Assertion.email('user123@test-domain.org')).not.toThrow()
  })

  it('should throw for invalid email addresses', () => {
    expect(() => Assertion.email('notanemail')).toThrow(
      'Expected a valid email address',
    )
    expect(() => Assertion.email('missing@domain')).toThrow(
      'Expected a valid email address',
    )
    expect(() => Assertion.email('@example.com')).toThrow(
      'Expected a valid email address',
    )
    expect(() => Assertion.email('user@')).toThrow(
      'Expected a valid email address',
    )
    expect(() => Assertion.email('user @example.com')).toThrow(
      'Expected a valid email address',
    )
    expect(() => Assertion.email('user@example .com')).toThrow(
      'Expected a valid email address',
    )
  })

  it('should throw for non-strings', () => {
    expect(() => Assertion.email(123)).toThrow(
      'Expected an email string, got number',
    )
    expect(() => Assertion.email(null)).toThrow(
      'Expected an email string, got null',
    )
    expect(() => Assertion.email(undefined)).toThrow(
      'Expected an email string, got undefined',
    )
    expect(() => Assertion.email({})).toThrow(
      'Expected an email string, got object',
    )
  })

  it('should throw custom message', () => {
    expect(() => Assertion.email('invalid', 'Custom error')).toThrow(
      'Custom error',
    )
  })
})
