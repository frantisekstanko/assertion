# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-09

Stable release

### Changed

- Nothing

## [0.5.2] - 2025-10-08

### Changed

- Restored proper support for CommonJS consumers

## [0.5.1] - 2025-10-07

### Changed

- Removed `"type": "module"` from `package.json` to improve compatibility with
  CommonJS consumers

## [0.5.0] - 2025-10-05

### Changed

- Migrated configuration files to TypeScript (`eslint.config.ts`, `jest.config.ts`)
- Separated build configuration into `tsconfig.build.json`
- Updated ESLint to check all files instead of only `src/**/*.ts`
- Improved test code style with explicit arrow function braces for consistency
- TypeScript array type preference set to `[]` notation

### Added

- `.nvmrc` file specifying Node.js 20 as the recommended version
- Explicit ESLint ignores for `node_modules/`, `dist/`, and `tests/coverage/`
- ESLint rule to allow empty functions in test files
- `jiti` and `ts-node` dev dependencies for TypeScript execution support

## [0.4.1] - 2025-10-05

### Fixed

- Excluded test files from npm package distribution to reduce package size

## [0.4.0] - 2025-10-05

### Changed

- **BREAKING**: Dropped Node.js 18 support - now requires Node.js >=20.0.0
- **BREAKING**: Migrated from CommonJS to ES modules (ESM)
- Updated TypeScript target to ES2022
- Improved documentation for custom exception classes with Hexagonal/Clean Architecture examples

### Added

- GitHub Actions CI workflow for automated testing on Node.js 20.x and 22.x
- GitHub Actions publish workflow for automated NPM releases
- CI status badge, npm version badge, and codecov badge to README
- Coverage reporting to Codecov

## [0.3.0] - 2025-10-03

### Added

- Initial release
- Type-safe assertion methods with TypeScript type narrowing
- `Assertion.string()` - Assert value is a string
- `Assertion.number()` - Assert value is a finite number
- `Assertion.greaterThan()` - Assert value is greater than threshold
- `Assertion.lessThan()` - Assert value is less than threshold
- `Assertion.nullOrString()` - Assert value is string or null
- `Assertion.nullOrNumber()` - Assert value is number or null
- `Assertion.nullOrBoolean()` - Assert value is boolean or null
- `Assertion.notNull()` - Assert value is not null or undefined
- `Assertion.array()` - Assert value is an array
- `Assertion.object()` - Assert value is a plain object
- `Assertion.boolean()` - Assert value is a boolean
- `Assertion.function()` - Assert value is a function
- `Assertion.minLength()` - Assert string/array has minimum length
- `Assertion.maxLength()` - Assert string/array has maximum length
- `Assertion.regex()` - Assert string matches pattern
- `Assertion.email()` - Assert value is valid email
- `Assertion.url()` - Assert value is valid URL
- `Assertion.uuid()` - Assert value is valid UUID
- `Assertion.instanceOf()` - Assert value is instance of constructor
- Custom error messages support for all assertions
- Custom assertion exception class support
- Full test coverage with Jest
- TypeScript declaration files

[1.0.0]: https://github.com/frantisekstanko/assertion/compare/v0.5.2...v1.0.0
[0.5.2]: https://github.com/frantisekstanko/assertion/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/frantisekstanko/assertion/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/frantisekstanko/assertion/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/frantisekstanko/assertion/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/frantisekstanko/assertion/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/frantisekstanko/assertion/releases/tag/v0.3.0
