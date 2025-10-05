import { Assertion } from '../src/Assertion'

describe('Assertion.number', () => {
  it('should pass for valid numbers', () => {
    expect(() => {
      Assertion.number(0)
    }).not.toThrow()
    expect(() => {
      Assertion.number(42)
    }).not.toThrow()
    expect(() => {
      Assertion.number(-10)
    }).not.toThrow()
    expect(() => {
      Assertion.number(3.14)
    }).not.toThrow()
  })

  it('should throw for non-numbers', () => {
    expect(() => {
      Assertion.number('123')
    }).toThrow('Expected a number, got string')
    expect(() => {
      Assertion.number(null)
    }).toThrow('Expected a number, got null')
    expect(() => {
      Assertion.number(undefined)
    }).toThrow('Expected a number, got undefined')
    expect(() => {
      Assertion.number('')
    }).toThrow('Expected a number, got string')
    expect(() => {
      Assertion.number({})
    }).toThrow('Expected a number, got object')
    expect(() => {
      Assertion.number([])
    }).toThrow('Expected a number, got object')
    expect(() => {
      Assertion.number(true)
    }).toThrow('Expected a number, got boolean')
    expect(() => {
      Assertion.number(NaN)
    }).toThrow('Expected a valid number, got NaN')
    expect(() => {
      Assertion.number(Symbol('test'))
    }).toThrow('Expected a number, got symbol')
    expect(() => {
      Assertion.number(BigInt(123))
    }).toThrow('Expected a number, got bigint')
    expect(() => {
      Assertion.number(() => {})
    }).toThrow('Expected a number, got function')
  })

  it('should throw for Infinity', () => {
    expect(() => {
      Assertion.number(Infinity)
    }).toThrow('Expected a finite number, got Infinity')
    expect(() => {
      Assertion.number(-Infinity)
    }).toThrow('Expected a finite number, got -Infinity')
  })

  it('should throw custom message', () => {
    expect(() => {
      Assertion.number('test', 'Value must be a number')
    }).toThrow('Value must be a number')
  })
})
