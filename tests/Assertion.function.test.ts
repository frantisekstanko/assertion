import { Assertion } from '../src/Assertion'

describe('Assertion.function', () => {
  it('should pass for valid functions', () => {
    expect(() => {
      Assertion.function(() => {})
    }).not.toThrow()
    expect(() => {
      Assertion.function(function () {})
    }).not.toThrow()
    expect(() => {
      Assertion.function(async () => {})
    }).not.toThrow()
    expect(() => {
      Assertion.function(class {})
    }).not.toThrow()
    expect(() => {
      Assertion.function(Math.sqrt)
    }).not.toThrow()
  })

  it('should throw for non-functions', () => {
    expect(() => {
      Assertion.function('function')
    }).toThrow('Expected a function, got string')
    expect(() => {
      Assertion.function(123)
    }).toThrow('Expected a function, got number')
    expect(() => {
      Assertion.function(null)
    }).toThrow('Expected a function, got null')
    expect(() => {
      Assertion.function(undefined)
    }).toThrow('Expected a function, got undefined')
    expect(() => {
      Assertion.function({})
    }).toThrow('Expected a function, got object')
    expect(() => {
      Assertion.function([])
    }).toThrow('Expected a function, got object')
    expect(() => {
      Assertion.function(true)
    }).toThrow('Expected a function, got boolean')
  })

  it('should throw custom message', () => {
    expect(() => {
      Assertion.function(123, 'Custom error')
    }).toThrow('Custom error')
  })
})
