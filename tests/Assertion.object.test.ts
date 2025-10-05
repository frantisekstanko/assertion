import { Assertion } from '../src/Assertion'

describe('Assertion.object', () => {
  it('should pass for objects', () => {
    expect(() => {
      Assertion.object({})
    }).not.toThrow()
    expect(() => {
      Assertion.object({ key: 'value' })
    }).not.toThrow()
  })

  it('should throw for null', () => {
    expect(() => {
      Assertion.object(null)
    }).toThrow('Expected an object, got null')
  })

  it('should throw for arrays', () => {
    expect(() => {
      Assertion.object([])
    }).toThrow('Expected an object, got an array')
  })

  it('should throw for primitives', () => {
    expect(() => {
      Assertion.object('string')
    }).toThrow('Expected an object, got string')
    expect(() => {
      Assertion.object(123)
    }).toThrow('Expected an object, got number')
    expect(() => {
      Assertion.object(true)
    }).toThrow('Expected an object, got boolean')
    expect(() => {
      Assertion.object(undefined)
    }).toThrow('Expected an object, got undefined')
  })

  it('should throw custom message', () => {
    expect(() => {
      Assertion.object(null, 'Must be object')
    }).toThrow('Must be object')
    expect(() => {
      Assertion.object('test', 'Must be object')
    }).toThrow('Must be object')
  })
})
