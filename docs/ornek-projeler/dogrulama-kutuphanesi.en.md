---
title: "Turkish IDN and EAI validation library"
---

# Turkish IDN and EAI validation library

**Category:** Developer Tools · **Difficulty:** Intermediate

!!! tip "Summary"
    A small open-source library that validates domain names and email addresses correctly and ships with tests for Turkish characters and case conversion.

## Who is it for?

Anyone building forms and APIs; it can become a dependency of other projects.

## UA touchpoints

- Unicode local part and domain validation
- Punycode ↔ Unicode conversion
- New and long TLDs
- `İ/i` and `I/ı` comparison

## Turkish test scenarios

- [ ] `şükrü@örnek.com` and `çiçek.com.tr` are valid
- [ ] `ş ü@örnek.com` is invalid
- [ ] Convert the `xn--` form to Unicode and back

## Suggested technology

JavaScript/TypeScript, Python or Go; package release (npm/PyPI)

## Success criteria

- [ ] The test suite covers the Accept and Validate items of the criteria list
- [ ] The package is published and documented

---

This page is an **example concept**; it is not required for applying. You can apply with your own project too.

[← Example projects](index.md)
