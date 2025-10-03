# assertion

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Type-safe assertion library for TypeScript with runtime validation and type narrowing.

## Features

- 🎯 **Type-safe** - Full TypeScript support with type narrowing
- 🚀 **Zero dependencies** - Lightweight and fast
- 🔒 **Runtime validation** - Validate unknown data at runtime
- 📦 **Tree-shakeable** - Only bundle what you use
- 🌐 **Universal** - Works in Node.js and browsers

## Installation

```bash
npm install @frantisekstanko/assertion
```

## Usage

### Basic Example

```typescript
import { Assertion } from '@frantisekstanko/assertion'

function processData(value: unknown) {
  Assertion.string(value)
  // value is now typed as string
}
```

## API

### Type Assertions

#### `Assertion.string(value, message?)`

Assert value is a string.

```typescript
Assertion.string('hello') // ✓ passes
Assertion.string(123) // ✗ throws
```

#### `Assertion.number(value, message?)`

Assert value is a finite number (not NaN or Infinity).

```typescript
Assertion.number(42) // ✓ passes
Assertion.number(3.14) // ✓ passes
Assertion.number(NaN) // ✗ throws
Assertion.number(Infinity) // ✗ throws
```

#### `Assertion.greaterThan(value, threshold, message?)`

Assert value is a number greater than a threshold.

```typescript
Assertion.greaterThan(10, 5) // ✓ passes
Assertion.greaterThan(5, 5) // ✗ throws
Assertion.greaterThan(3, 5) // ✗ throws
```

#### `Assertion.lessThan(value, threshold, message?)`

Assert value is a number less than a threshold.

```typescript
Assertion.lessThan(3, 5) // ✓ passes
Assertion.lessThan(5, 5) // ✗ throws
Assertion.lessThan(10, 5) // ✗ throws
```

#### `Assertion.nullOrString(value, message?)`

Assert value is a string or null.

```typescript
Assertion.nullOrString('hello') // ✓ passes
Assertion.nullOrString(null) // ✓ passes
Assertion.nullOrString(undefined) // ✗ throws
```

#### `Assertion.nullOrNumber(value, message?)`

Assert value is a finite number or null.

```typescript
Assertion.nullOrNumber(42) // ✓ passes
Assertion.nullOrNumber(null) // ✓ passes
Assertion.nullOrNumber(NaN) // ✗ throws
Assertion.nullOrNumber(Infinity) // ✗ throws
```

#### `Assertion.notNull(value, message?)`

Assert value is not null or undefined.

```typescript
Assertion.notNull('hello') // ✓ passes
Assertion.notNull(0) // ✓ passes
Assertion.notNull(null) // ✗ throws
Assertion.notNull(undefined) // ✗ throws
```

#### `Assertion.array(value, message?)`

Assert value is an array.

```typescript
Assertion.array([1, 2, 3]) // ✓ passes
Assertion.array([]) // ✓ passes
Assertion.array('not array') // ✗ throws
```

#### `Assertion.object(value, message?)`

Assert value is a plain object (not an array or null).

```typescript
Assertion.object({}) // ✓ passes
Assertion.object({ a: 1 }) // ✓ passes
Assertion.object([]) // ✗ throws
Assertion.object(null) // ✗ throws
```

#### `Assertion.boolean(value, message?)`

Assert value is a boolean.

```typescript
Assertion.boolean(true) // ✓ passes
Assertion.boolean(false) // ✓ passes
Assertion.boolean(1) // ✗ throws
```

#### `Assertion.nullOrBoolean(value, message?)`

Assert value is a boolean or null.

```typescript
Assertion.nullOrBoolean(true) // ✓ passes
Assertion.nullOrBoolean(null) // ✓ passes
Assertion.nullOrBoolean(undefined) // ✗ throws
```

#### `Assertion.function(value, message?)`

Assert value is a function.

```typescript
Assertion.function(() => {}) // ✓ passes
Assertion.function(Math.max) // ✓ passes
Assertion.function({}) // ✗ throws
```

#### `Assertion.minLength(value, min, message?)`

Assert value is a string or array with minimum length.

```typescript
Assertion.minLength('hello', 3) // ✓ passes
Assertion.minLength([1, 2, 3], 2) // ✓ passes
Assertion.minLength('hi', 5) // ✗ throws
```

#### `Assertion.maxLength(value, max, message?)`

Assert value is a string or array with maximum length.

```typescript
Assertion.maxLength('hello', 10) // ✓ passes
Assertion.maxLength([1, 2], 5) // ✓ passes
Assertion.maxLength('toolong', 3) // ✗ throws
```

#### `Assertion.regex(value, pattern, message?)`

Assert value is a string matching a regular expression.

```typescript
Assertion.regex('abc123', /^[a-z]+[0-9]+$/) // ✓ passes
Assertion.regex('123abc', /^[a-z]+[0-9]+$/) // ✗ throws
```

#### `Assertion.email(value, message?)`

Assert value is a valid email address.

```typescript
Assertion.email('user@example.com') // ✓ passes
Assertion.email('invalid-email') // ✗ throws
```

#### `Assertion.url(value, message?)`

Assert value is a valid URL.

```typescript
Assertion.url('https://example.com') // ✓ passes
Assertion.url('not-a-url') // ✗ throws
```

#### `Assertion.uuid(value, message?)`

Assert value is a valid UUID.

```typescript
Assertion.uuid('550e8400-e29b-41d4-a716-446655440000') // ✓ passes
Assertion.uuid('invalid-uuid') // ✗ throws
```

#### `Assertion.instanceOf(value, constructor, message?)`

Assert value is an instance of a constructor.

```typescript
class MyClass {}
const instance = new MyClass()
Assertion.instanceOf(instance, MyClass) // ✓ passes
Assertion.instanceOf({}, MyClass) // ✗ throws
```

### Error Handling

All assertion methods throw `AssertionException` when validation fails.
You can catch and handle these exceptions:

```typescript
import { Assertion, AssertionException } from '@frantisekstanko/assertion'

try {
  Assertion.string(123)
} catch (error) {
  if (error instanceof AssertionException) {
    console.error('Validation failed:', error.message)
  }
}
```

### Custom Exception Classes

You can extend the `Assertion` class to use your own custom exception class:

```typescript
import { Assertion } from '@frantisekstanko/assertion'

class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

class MyAssertion extends Assertion {
  protected static createException(message: string): Error {
    return new ValidationError(message)
  }
}
```

Now all assertions will throw `ValidationError` instead of `AssertionException`

```typescript
try {
  MyAssertion.string(123)
} catch (error) {
  console.log(error instanceof ValidationError) // true
}
```

## License

MIT © Frantisek Stanko
