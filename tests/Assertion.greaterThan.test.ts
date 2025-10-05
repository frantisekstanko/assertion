import { Assertion } from '../src/Assertion'

describe('Assertion.greaterThan', () => {
  it('should pass for valid cases', () => {
    expect(() => {
      Assertion.greaterThan(0.000000000001, 0)
    }).not.toThrow()
    expect(() => {
      Assertion.greaterThan(1, 0)
    }).not.toThrow()
    expect(() => {
      Assertion.greaterThan(100, 0)
    }).not.toThrow()
    expect(() => {
      Assertion.greaterThan(3.14, 0)
    }).not.toThrow()
    expect(() => {
      Assertion.greaterThan(0.002, 0.001)
    }).not.toThrow()
    expect(() => {
      Assertion.greaterThan(100, 99)
    }).not.toThrow()
  })

  it('should throw for invalid cases', () => {
    expect(() => {
      Assertion.greaterThan(-0.000000000001, 0)
    }).toThrow('Expected a number greater than 0, got -1e-12')
    expect(() => {
      Assertion.greaterThan(-1, 0)
    }).toThrow('Expected a number greater than 0, got -1')
    expect(() => {
      Assertion.greaterThan(-100, 0)
    }).toThrow('Expected a number greater than 0, got -100')
  })

  it('should throw for non-numbers', () => {
    expect(() => {
      Assertion.greaterThan('123', 0)
    }).toThrow('Expected a number greater than 0, got string')
    expect(() => {
      Assertion.greaterThan(null, 0)
    }).toThrow('Expected a number greater than 0, got null')
  })

  it('should throw for NaN', () => {
    expect(() => {
      Assertion.greaterThan(NaN, 0)
    }).toThrow('Expected a number greater than 0, got NaN')
  })

  it('should throw for Infinity', () => {
    expect(() => {
      Assertion.greaterThan(Infinity, 0)
    }).not.toThrow()
    expect(() => {
      Assertion.greaterThan(-Infinity, 0)
    }).toThrow('Expected a number greater than 0, got -Infinity')
  })

  it('should work with custom threshold', () => {
    expect(() => {
      Assertion.greaterThan(10, 5)
    }).not.toThrow()
    expect(() => {
      Assertion.greaterThan(5, 5)
    }).toThrow('Expected a number greater than 5, got 5')
    expect(() => {
      Assertion.greaterThan(3, 5)
    }).toThrow('Expected a number greater than 5, got 3')
  })

  it('should throw custom message', () => {
    expect(() => {
      Assertion.greaterThan(0, 0, 'Must be positive')
    }).toThrow('Must be positive')
  })
})
