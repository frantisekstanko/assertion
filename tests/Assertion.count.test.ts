import { Assertion } from '../src/Assertion'

describe('Assertion.count', () => {
  it('should pass for valid counts', () => {
    expect(() => {
      Assertion.count({}, 0)
    }).not.toThrow()

    expect(() => {
      Assertion.count(
        {
          items: [1, 2, 3, 4, 5],
        },
        1,
      )
    }).not.toThrow()

    expect(() => {
      Assertion.count(
        {
          items: [1, 2, 3, 4, 5],
          items2: ['a', 'b', 'c'],
          description: 'foo',
          value: 42,
        },
        4,
      )
    }).not.toThrow()
  })

  it('should throw for non-object values', () => {
    expect(() => {
      Assertion.count('string', 1)
    }).toThrow('Expected an object to count keys')
    expect(() => {
      Assertion.count(null, 0)
    }).toThrow('Expected an object to count keys')
    expect(() => {
      Assertion.count(42, 0)
    }).toThrow('Expected an object to count keys')
    expect(() => {
      Assertion.count([1, 2, 3], 3)
    }).toThrow('Expected an object to count keys')
  })

  it('should throw for invalid counts', () => {
    expect(() => {
      Assertion.count(
        {
          items: [1, 2, 3],
        },
        2,
      )
    }).toThrow('Expected object to have 2 keys, got 1')

    expect(() => {
      Assertion.count({}, 1)
    }).toThrow('Expected object to have 1 key, got 0')

    expect(() => {
      Assertion.count(
        {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
        },
        5,
      )
    }).toThrow('Expected object to have 5 keys, got 4')
  })
})
