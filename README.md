# assertion

[![CI](https://github.com/frantisekstanko/assertion/actions/workflows/ci.yml/badge.svg)](https://github.com/frantisekstanko/assertion/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@frantisekstanko/assertion.svg)](https://www.npmjs.com/package/@frantisekstanko/assertion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/frantisekstanko/assertion/branch/main/graph/badge.svg)](https://codecov.io/gh/frantisekstanko/assertion)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@frantisekstanko/assertion)](https://bundlephobia.com/package/@frantisekstanko/assertion)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)

Type-safe assertion library for TypeScript with runtime validation and type narrowing.

## Features

- 🎯 **Type-safe** - Full TypeScript support with type narrowing
- 🏗️ **[Custom exceptions](#custom-exception-classes)** - Use your own domain exceptions for Hexagonal/Clean Architecture
- 🚀 **Zero dependencies** - Lightweight and fast
- 🔒 **Runtime validation** - Validate unknown data at runtime
- 📦 **Tree-shakeable** - Only bundle what you use
- 🌐 **Universal** - Works in Node.js and browsers
  (see [Browser Support](#browser-support))

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

#### `Assertion.objectOrEmptyArray(value, message?)`

Assert value is a plain object or an empty array.

```typescript
Assertion.objectOrEmptyArray({}) // ✓ passes
Assertion.objectOrEmptyArray({ a: 1 }) // ✓ passes
Assertion.objectOrEmptyArray([]) // ✓ passes
Assertion.objectOrEmptyArray([1, 2]) // ✗ throws
Assertion.objectOrEmptyArray(null) // ✗ throws
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

**Keep your domain layer clean and vendor-agnostic** by using your own
exception classes. This is especially valuable in Hexagonal/Clean Architecture
where you want to avoid coupling your domain to third-party libraries.

Extend the `Assertion` class to throw your own domain exceptions:

```typescript
import { Assertion } from '@frantisekstanko/assertion'

// Your domain exception in the core layer
class DomainValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'DomainValidationError'
  }
}

// Create your domain-specific assertion class
class DomainAssertion extends Assertion {
  protected static createException(message: string): Error {
    return new DomainValidationError(message)
  }
}
```

Now your domain layer only knows about `DomainValidationError`, not the
assertion library:

```typescript
// In your domain layer - no vendor coupling!
try {
  DomainAssertion.string(userInput)
  DomainAssertion.email(email)
} catch (error) {
  if (error instanceof DomainValidationError) {
    // Handle with your domain error handling strategy
  }
}
```

This approach maintains the **dependency inversion principle** - your core
domain doesn't depend on external libraries.

## Browser Support

This library is **fully compatible with modern browsers**. It uses only standard
JavaScript features available across all modern browser environments:

- **No Node.js-specific APIs** - Zero dependencies on Node.js runtime features
  like `fs`, `process`, or `path`
- **Universal JavaScript** - Only uses standard APIs: `typeof`,
  `Array.isArray()`, `isNaN()`, `isFinite()`, and the `URL` constructor
- **Modern JavaScript** - Compiled to ES2022, supported by all current browsers

You can use it directly in browser applications, web workers, or any JavaScript
runtime without modification.

## License

MIT © Frantisek Stanko
