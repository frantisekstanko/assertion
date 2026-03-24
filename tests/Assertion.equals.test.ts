import { Assertion } from '../src/Assertion'

describe('Assertion.equals', () => {
  it('should pass when values are equal', () => {
    expect(() => {
      Assertion.equals(5, 5)
    }).not.toThrow()

    expect(() => {
      Assertion.equals('test', 'test')
    }).not.toThrow()

    expect(() => {
      Assertion.equals(true, true)
    }).not.toThrow()
  })

  it('should throw an error when values are not equal', () => {
    expect(() => {
      Assertion.equals(5, 10)
    }).toThrow('Expected value to equal 10, got 5')

    expect(() => {
      Assertion.equals('test', 'TEST')
    }).toThrow('Expected value to equal TEST, got test')

    expect(() => {
      Assertion.equals(true, false)
    }).toThrow('Expected value to equal false, got true')
  })

  it('should handle complex objects', () => {
    const object1 = { a: 1, b: { c: 2 } }
    const object2 = { a: 1, b: { c: 2 } }
    const object3 = { a: 1, b: { c: 3 } }

    expect(() => {
      Assertion.equals(object1, object2)
    }).not.toThrow()

    expect(() => {
      Assertion.equals(object1, object3)
    }).toThrow('Expected objects to be equal, but they differ')
  })

  it('should throw for objects with different number of keys', () => {
    expect(() => {
      Assertion.equals({ a: 1 }, { a: 1, b: 2 })
    }).toThrow(
      'Expected objects to be equal, but they have different number of keys',
    )
  })

  it('should throw for objects with same key count but different key names', () => {
    expect(() => {
      Assertion.equals({ a: 1 }, { b: 1 })
    }).toThrow('Expected objects to be equal, but they differ')
  })

  it('should handle arrays', () => {
    expect(() => {
      Assertion.equals([1, 2, 3], [1, 2, 3])
    }).not.toThrow()

    expect(() => {
      Assertion.equals([], [])
    }).not.toThrow()

    expect(() => {
      Assertion.equals([1, 2], [1, 3])
    }).toThrow('Expected arrays to be equal, but they differ')

    expect(() => {
      Assertion.equals([1], [1, 2])
    }).toThrow(
      'Expected arrays to be equal, but they have different number of elements',
    )
  })

  it('should throw when comparing an array to a plain object', () => {
    expect(() => {
      Assertion.equals([1], { 0: 1 })
    }).toThrow(
      'Expected values to be equal, but one is an array and the other is not',
    )
    expect(() => {
      Assertion.equals({ 0: 1 }, [1])
    }).toThrow(
      'Expected values to be equal, but one is an array and the other is not',
    )
  })
})
