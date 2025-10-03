import { Assertion } from '../src/Assertion'

class CustomException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CustomAssertionException'
  }
}

class CustomAssertion extends Assertion {
  protected static createException(message: string): Error {
    return new CustomException(message)
  }
}

describe('Assertion with custom exception', () => {
  it('should throw CustomAssertionException', () => {
    expect(() => CustomAssertion.string(123)).toThrow(CustomException)
    expect(() => CustomAssertion.string(123)).toThrow(Error)
  })

  it('should preserve custom exception properties', () => {
    try {
      CustomAssertion.string(123)
    } catch (e) {
      expect(e).toBeInstanceOf(CustomException)
      expect((e as CustomException).message).toBe(
        'Expected a string, got number',
      )
    }
  })

  it('should work with multiple assertion methods', () => {
    expect(() => CustomAssertion.number('not a number')).toThrow(
      CustomException,
    )
    expect(() => CustomAssertion.boolean(123)).toThrow(CustomException)
    expect(() => CustomAssertion.array({})).toThrow(CustomException)
    expect(() => CustomAssertion.object([])).toThrow(CustomException)
  })

  it('should preserve custom message with custom exception', () => {
    try {
      CustomAssertion.string(123, 'My custom message')
    } catch (e) {
      expect(e).toBeInstanceOf(CustomException)
      expect((e as CustomException).message).toBe('My custom message')
    }
  })
})
