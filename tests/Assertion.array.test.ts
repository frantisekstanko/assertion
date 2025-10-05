import { Assertion } from '../src/Assertion'

describe('Assertion.array', () => {
  it('should pass for arrays', () => {
    expect(() => {
      Assertion.array([])
    }).not.toThrow()
    expect(() => {
      Assertion.array([1, 2, 3])
    }).not.toThrow()
    expect(() => {
      Assertion.array(['a', 'b'])
    }).not.toThrow()
  })

  it('should throw for non-arrays', () => {
    expect(() => {
      Assertion.array('hello')
    }).toThrow('Expected an array, got string')
    expect(() => {
      Assertion.array(123)
    }).toThrow('Expected an array, got number')
    expect(() => {
      Assertion.array(null)
    }).toThrow('Expected an array, got null')
    expect(() => {
      Assertion.array(undefined)
    }).toThrow('Expected an array, got undefined')
    expect(() => {
      Assertion.array({})
    }).toThrow('Expected an array, got object')
    expect(() => {
      Assertion.array(Symbol('test'))
    }).toThrow('Expected an array, got symbol')
    expect(() => {
      Assertion.array(BigInt(123))
    }).toThrow('Expected an array, got bigint')
    expect(() => {
      Assertion.array(() => {})
    }).toThrow('Expected an array, got function')
  })

  it('should throw custom message', () => {
    expect(() => {
      Assertion.array('test', 'Must be array')
    }).toThrow('Must be array')
  })
})
