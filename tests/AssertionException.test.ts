import { AssertionException } from '../src/AssertionException'

describe('AssertionException', () => {
  it('should be an instance of Error', () => {
    const error = new AssertionException('test message')
    expect(error).toBeInstanceOf(Error)
  })

  it('should have the correct name', () => {
    const error = new AssertionException('test message')
    expect(error.name).toBe('AssertionException')
  })

  it('should preserve the message', () => {
    const error = new AssertionException('test message')
    expect(error.message).toBe('test message')
  })

  it('should be throwable', () => {
    expect(() => {
      throw new AssertionException('test error')
    }).toThrow(AssertionException)
  })

  it('should be catchable as Error', () => {
    try {
      throw new AssertionException('test error')
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e).toBeInstanceOf(AssertionException)
    }
  })
})
