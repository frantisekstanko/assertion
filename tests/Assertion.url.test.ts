import { Assertion } from '../src/Assertion'

describe('Assertion.url', () => {
  it('should pass for valid URLs', () => {
    expect(() => Assertion.url('https://example.com')).not.toThrow()
    expect(() => Assertion.url('http://example.com')).not.toThrow()
    expect(() => Assertion.url('https://example.com/path')).not.toThrow()
    expect(() =>
      Assertion.url('https://example.com/path?query=1'),
    ).not.toThrow()
    expect(() => Assertion.url('https://example.com:8080')).not.toThrow()
    expect(() => Assertion.url('ftp://example.com')).not.toThrow()
    expect(() => Assertion.url('https://subdomain.example.com')).not.toThrow()
  })

  it('should throw for invalid URLs', () => {
    expect(() => Assertion.url('notaurl')).toThrow('Expected a valid URL')
    expect(() => Assertion.url('example.com')).toThrow('Expected a valid URL')
    expect(() => Assertion.url('//example.com')).toThrow('Expected a valid URL')
    expect(() => Assertion.url('')).toThrow('Expected a valid URL')
    expect(() => Assertion.url('http://')).toThrow('Expected a valid URL')
  })

  it('should throw for non-strings', () => {
    expect(() => Assertion.url(123)).toThrow(
      'Expected a URL string, got number',
    )
    expect(() => Assertion.url(null)).toThrow('Expected a URL string, got null')
    expect(() => Assertion.url(undefined)).toThrow(
      'Expected a URL string, got undefined',
    )
    expect(() => Assertion.url({})).toThrow('Expected a URL string, got object')
  })

  it('should throw custom message', () => {
    expect(() => Assertion.url('invalid', 'Custom error')).toThrow(
      'Custom error',
    )
  })
})
