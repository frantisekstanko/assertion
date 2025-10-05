import { Assertion } from '../src/Assertion'

describe('Assertion.uuid', () => {
  it('should pass for valid UUIDs', () => {
    expect(() => {
      Assertion.uuid('123e4567-e89b-12d3-a456-426614174000')
    }).not.toThrow()
    expect(() => {
      Assertion.uuid('550e8400-e29b-41d4-a716-446655440000')
    }).not.toThrow()
    expect(() => {
      Assertion.uuid('f47ac10b-58cc-4372-a567-0e02b2c3d479')
    }).not.toThrow()
    expect(() => {
      Assertion.uuid('A0EEBC99-9C0B-4EF8-BB6D-6BB9BD380A11')
    }).not.toThrow() // uppercase
  })

  it('should throw for invalid UUIDs', () => {
    expect(() => {
      Assertion.uuid('not-a-uuid')
    }).toThrow('Expected a valid UUID')
    expect(() => {
      Assertion.uuid('123e4567-e89b-12d3-a456')
    }).toThrow('Expected a valid UUID') // too short
    expect(() => {
      Assertion.uuid('123e4567-e89b-12d3-a456-426614174000-extra')
    }).toThrow('Expected a valid UUID') // too long
    expect(() => {
      Assertion.uuid('123e4567e89b12d3a456426614174000')
    }).toThrow('Expected a valid UUID') // no dashes
    expect(() => {
      Assertion.uuid('123e4567-e89b-12d3-a456-42661417400g')
    }).toThrow('Expected a valid UUID') // invalid character
    expect(() => {
      Assertion.uuid('')
    }).toThrow('Expected a valid UUID')
  })

  it('should throw for non-strings', () => {
    expect(() => {
      Assertion.uuid(123)
    }).toThrow('Expected a UUID string, got number')
    expect(() => {
      Assertion.uuid(null)
    }).toThrow('Expected a UUID string, got null')
    expect(() => {
      Assertion.uuid(undefined)
    }).toThrow('Expected a UUID string, got undefined')
    expect(() => {
      Assertion.uuid({})
    }).toThrow('Expected a UUID string, got object')
  })

  it('should throw custom message', () => {
    expect(() => {
      Assertion.uuid('invalid', 'Custom error')
    }).toThrow('Custom error')
  })
})
