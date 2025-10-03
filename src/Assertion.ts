import { AssertionException } from './AssertionException'

export class Assertion {
  protected static createException(message: string): Error {
    return new AssertionException(message)
  }

  /**
   * Asserts that a value is a string.
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is not a string
   */
  public static string(
    value: unknown,
    message?: string,
  ): asserts value is string {
    if (typeof value === 'string') {
      return
    }

    throw this.createException(
      message ??
        'Expected a string, got ' + (value === null ? 'null' : typeof value),
    )
  }

  /**
   * Asserts that a value is a finite number (not NaN or Infinity).
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is not a finite number
   */
  public static number(
    value: unknown,
    message?: string,
  ): asserts value is number {
    if (typeof value === 'number' && isNaN(value)) {
      throw this.createException(message ?? 'Expected a valid number, got NaN')
    }

    if (typeof value === 'number' && !isFinite(value)) {
      throw this.createException(
        message ?? 'Expected a finite number, got ' + String(value),
      )
    }

    if (typeof value === 'number') {
      return
    }

    throw this.createException(
      message ??
        'Expected a number, got ' + (value === null ? 'null' : typeof value),
    )
  }

  /**
   * Asserts that a value is a number greater than a threshold.
   * @param value - The value to check
   * @param threshold - The minimum value (exclusive)
   * @param message - Optional custom error message
   * @throws {Error} If the value is not a number greater than the threshold
   */
  public static greaterThan(
    value: unknown,
    threshold: number,
    message?: string,
  ): asserts value is number {
    if (typeof value === 'number' && value > threshold) {
      return
    }

    throw this.createException(
      message ??
        `Expected a number greater than ${String(threshold)}, got ` +
          (typeof value === 'number'
            ? String(value)
            : value === null
              ? 'null'
              : typeof value),
    )
  }

  /**
   * Asserts that a value is either null or a string.
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is neither null nor a string
   */
  public static nullOrString(
    value: unknown,
    message?: string,
  ): asserts value is string | null {
    if (value === null) {
      return
    }

    if (typeof value === 'string') {
      return
    }

    throw this.createException(
      message ?? 'Expected a null or string, got ' + typeof value,
    )
  }

  /**
   * Asserts that a value is either null or a finite number (not NaN or Infinity).
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is neither null nor a finite number
   */
  public static nullOrNumber(
    value: unknown,
    message?: string,
  ): asserts value is number | null {
    if (value === null) {
      return
    }

    if (typeof value === 'number' && isNaN(value)) {
      throw this.createException(message ?? 'Expected a valid number, got NaN')
    }

    if (typeof value === 'number' && !isFinite(value)) {
      throw this.createException(
        message ?? 'Expected a finite number, got ' + String(value),
      )
    }

    if (typeof value === 'number') {
      return
    }

    throw this.createException(
      message ?? 'Expected a null or number, got ' + typeof value,
    )
  }

  /**
   * Asserts that a value is not null or undefined.
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is null or undefined
   */
  public static notNull(
    value: unknown,
    message?: string,
  ): asserts value is NonNullable<unknown> {
    if (value === null) {
      throw this.createException(
        message ?? 'Expected a non-null and non-undefined value, got null',
      )
    }

    if (value === undefined) {
      throw this.createException(
        message ?? 'Expected a non-null and non-undefined value, got undefined',
      )
    }
  }

  /**
   * Asserts that a value is an array.
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is not an array
   */
  public static array(
    value: unknown,
    message?: string,
  ): asserts value is unknown[] {
    if (Array.isArray(value)) {
      return
    }

    throw this.createException(
      message ??
        'Expected an array, got ' + (value === null ? 'null' : typeof value),
    )
  }

  /**
   * Asserts that a value is a plain object (not an array or null).
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is not an object
   */
  public static object(
    value: unknown,
    message?: string,
  ): asserts value is Record<string, unknown> {
    if (Array.isArray(value)) {
      throw this.createException(message ?? 'Expected an object, got an array')
    }

    if (typeof value === 'object' && value !== null) {
      return
    }

    throw this.createException(
      message ??
        'Expected an object, got ' + (value === null ? 'null' : typeof value),
    )
  }

  /**
   * Asserts that a value is a boolean.
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is not a boolean
   */
  public static boolean(
    value: unknown,
    message?: string,
  ): asserts value is boolean {
    if (typeof value === 'boolean') {
      return
    }

    throw this.createException(
      message ??
        'Expected a boolean, got ' + (value === null ? 'null' : typeof value),
    )
  }

  /**
   * Asserts that a value is either null or a boolean.
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is neither null nor a boolean
   */
  public static nullOrBoolean(
    value: unknown,
    message?: string,
  ): asserts value is boolean | null {
    if (value === null) {
      return
    }

    if (typeof value === 'boolean') {
      return
    }

    throw this.createException(
      message ?? 'Expected a null or boolean, got ' + typeof value,
    )
  }

  /**
   * Asserts that a value is a function.
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is not a function
   */
  public static function(
    value: unknown,
    message?: string,
  ): asserts value is (...args: unknown[]) => unknown {
    if (typeof value === 'function') {
      return
    }

    throw this.createException(
      message ??
        'Expected a function, got ' + (value === null ? 'null' : typeof value),
    )
  }

  /**
   * Asserts that a value is a number less than a threshold.
   * @param value - The value to check
   * @param threshold - The maximum value (exclusive)
   * @param message - Optional custom error message
   * @throws {Error} If the value is not a number less than the threshold
   */
  public static lessThan(
    value: unknown,
    threshold: number,
    message?: string,
  ): asserts value is number {
    if (typeof value === 'number' && value < threshold) {
      return
    }

    throw this.createException(
      message ??
        `Expected a number less than ${String(threshold)}, got ` +
          (typeof value === 'number'
            ? String(value)
            : value === null
              ? 'null'
              : typeof value),
    )
  }

  /**
   * Asserts that a value is a string or array with a minimum length.
   * @param value - The value to check
   * @param min - The minimum length (inclusive)
   * @param message - Optional custom error message
   * @throws {Error} If the value is not a string or array with sufficient length
   */
  public static minLength(
    value: unknown,
    min: number,
    message?: string,
  ): asserts value is string | unknown[] {
    if (typeof value === 'string' && value.length >= min) {
      return
    }

    if (Array.isArray(value) && value.length >= min) {
      return
    }

    const actualLength =
      typeof value === 'string' || Array.isArray(value)
        ? String(value.length)
        : 'N/A'

    throw this.createException(
      message ??
        `Expected a string or array with minimum length ${String(min)}, got length ${actualLength}`,
    )
  }

  /**
   * Asserts that a value is a string or array with a maximum length.
   * @param value - The value to check
   * @param max - The maximum length (inclusive)
   * @param message - Optional custom error message
   * @throws {Error} If the value is not a string or array within the length limit
   */
  public static maxLength(
    value: unknown,
    max: number,
    message?: string,
  ): asserts value is string | unknown[] {
    if (typeof value === 'string' && value.length <= max) {
      return
    }

    if (Array.isArray(value) && value.length <= max) {
      return
    }

    const actualLength =
      typeof value === 'string' || Array.isArray(value)
        ? String(value.length)
        : 'N/A'

    throw this.createException(
      message ??
        `Expected a string or array with maximum length ${String(max)}, got length ${actualLength}`,
    )
  }

  /**
   * Asserts that a value is a valid email address string.
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is not a valid email address
   */
  public static email(
    value: unknown,
    message?: string,
  ): asserts value is string {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (typeof value !== 'string') {
      throw this.createException(
        message ??
          'Expected an email string, got ' +
            (value === null ? 'null' : typeof value),
      )
    }

    if (emailPattern.test(value)) {
      return
    }

    throw this.createException(message ?? 'Expected a valid email address')
  }

  /**
   * Asserts that a value is a valid URL string.
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is not a valid URL
   */
  public static url(value: unknown, message?: string): asserts value is string {
    if (typeof value !== 'string') {
      throw this.createException(
        message ??
          'Expected a URL string, got ' +
            (value === null ? 'null' : typeof value),
      )
    }

    try {
      new URL(value)
      return
    } catch {
      throw this.createException(message ?? 'Expected a valid URL')
    }
  }

  /**
   * Asserts that a value is a valid UUID string (version 4 format).
   * @param value - The value to check
   * @param message - Optional custom error message
   * @throws {Error} If the value is not a valid UUID
   */
  public static uuid(
    value: unknown,
    message?: string,
  ): asserts value is string {
    const uuidPattern =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

    if (typeof value !== 'string') {
      throw this.createException(
        message ??
          'Expected a UUID string, got ' +
            (value === null ? 'null' : typeof value),
      )
    }

    if (uuidPattern.test(value)) {
      return
    }

    throw this.createException(message ?? 'Expected a valid UUID')
  }

  /**
   * Asserts that a value is an instance of a specific constructor.
   * @param value - The value to check
   * @param constructor - The constructor function to check against
   * @param message - Optional custom error message
   * @throws {Error} If the value is not an instance of the constructor
   */
  public static instanceOf<T>(
    value: unknown,
    constructor: new (...args: never[]) => T,
    message?: string,
  ): asserts value is T {
    if (value instanceof constructor) {
      return
    }

    const actualType =
      value === null
        ? 'null'
        : typeof value === 'object' && value.constructor.name
          ? value.constructor.name
          : typeof value

    throw this.createException(
      message ??
        `Expected an instance of ${constructor.name}, got ${actualType}`,
    )
  }
}
