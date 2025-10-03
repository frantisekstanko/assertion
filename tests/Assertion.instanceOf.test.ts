import { Assertion } from '../src/Assertion'

class TestClass {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class AnotherClass {
  id: number
  constructor(id: number) {
    this.id = id
  }
}

describe('Assertion.instanceOf', () => {
  it('should pass for valid instances', () => {
    const testInstance = new TestClass('test')
    expect(() => Assertion.instanceOf(testInstance, TestClass)).not.toThrow()

    const date = new Date()
    expect(() => Assertion.instanceOf(date, Date)).not.toThrow()

    const error = new Error('test')
    expect(() => Assertion.instanceOf(error, Error)).not.toThrow()

    const arr = new Array(1, 2, 3)
    expect(() => Assertion.instanceOf(arr, Array)).not.toThrow()
  })

  it('should throw for instances of different classes', () => {
    const testInstance = new TestClass('test')
    expect(() => Assertion.instanceOf(testInstance, AnotherClass)).toThrow(
      'Expected an instance of AnotherClass, got TestClass',
    )

    const date = new Date()
    expect(() => Assertion.instanceOf(date, Error)).toThrow(
      'Expected an instance of Error, got Date',
    )
  })

  it('should throw for non-object values', () => {
    expect(() => Assertion.instanceOf('string', TestClass)).toThrow(
      'Expected an instance of TestClass, got string',
    )
    expect(() => Assertion.instanceOf(123, TestClass)).toThrow(
      'Expected an instance of TestClass, got number',
    )
    expect(() => Assertion.instanceOf(null, TestClass)).toThrow(
      'Expected an instance of TestClass, got null',
    )
    expect(() => Assertion.instanceOf(undefined, TestClass)).toThrow(
      'Expected an instance of TestClass, got undefined',
    )
    expect(() => Assertion.instanceOf(true, TestClass)).toThrow(
      'Expected an instance of TestClass, got boolean',
    )
  })

  it('should throw for plain objects', () => {
    const plainObject = { name: 'test' }
    expect(() => Assertion.instanceOf(plainObject, TestClass)).toThrow(
      'Expected an instance of TestClass, got Object',
    )
  })

  it('should throw custom message', () => {
    const testInstance = new TestClass('test')
    expect(() =>
      Assertion.instanceOf(testInstance, AnotherClass, 'Custom error'),
    ).toThrow('Custom error')
  })
})
