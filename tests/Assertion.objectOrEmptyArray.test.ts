import { Assertion } from '../src/Assertion'

describe('Assertion.objectOrEmptyArray', () => {
  it('should pass for plain objects', () => {
    expect(() => {
      Assertion.objectOrEmptyArray({})
    }).not.toThrow()
    expect(() => {
      Assertion.objectOrEmptyArray({ key: 'value' })
    }).not.toThrow()
    expect(() => {
      Assertion.objectOrEmptyArray({ a: 1, b: 2 })
    }).not.toThrow()
  })

  it('should pass for empty arrays', () => {
    expect(() => {
      Assertion.objectOrEmptyArray([])
    }).not.toThrow()
  })

  it('should throw for non-empty arrays', () => {
    expect(() => {
      Assertion.objectOrEmptyArray([1, 2, 3])
    }).toThrow('Expected an object or empty array, got a non-empty array')
    expect(() => {
      Assertion.objectOrEmptyArray(['a'])
    }).toThrow('Expected an object or empty array, got a non-empty array')
  })

  it('should throw for null', () => {
    expect(() => {
      Assertion.objectOrEmptyArray(null)
    }).toThrow('Expected an object or empty array, got null')
  })

  it('should throw for primitives', () => {
    expect(() => {
      Assertion.objectOrEmptyArray('string')
    }).toThrow('Expected an object or empty array, got string')
    expect(() => {
      Assertion.objectOrEmptyArray(123)
    }).toThrow('Expected an object or empty array, got number')
    expect(() => {
      Assertion.objectOrEmptyArray(true)
    }).toThrow('Expected an object or empty array, got boolean')
    expect(() => {
      Assertion.objectOrEmptyArray(undefined)
    }).toThrow('Expected an object or empty array, got undefined')
  })

  it('should throw custom message', () => {
    expect(() => {
      Assertion.objectOrEmptyArray(null, 'Must be object or empty array')
    }).toThrow('Must be object or empty array')
    expect(() => {
      Assertion.objectOrEmptyArray([1], 'Must be object or empty array')
    }).toThrow('Must be object or empty array')
    expect(() => {
      Assertion.objectOrEmptyArray('test', 'Must be object or empty array')
    }).toThrow('Must be object or empty array')
  })
})
