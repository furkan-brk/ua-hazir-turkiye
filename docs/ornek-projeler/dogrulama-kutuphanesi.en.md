---
title: "Turkish IDN and EAI validation library"
---

# Turkish IDN and EAI validation library

<div class="concept-meta"><span class="badge cat">Developer Tools</span></div>

<div class="concept-lead" markdown>
A small open-source library that validates domain names and email addresses correctly and ships with tests for Turkish characters and case conversion.
</div>

**Who is it for?** Anyone building forms and APIs; it can become a dependency of other projects.

=== "UA touchpoints"

    - Unicode local part and domain validation
    - Punycode ↔ Unicode conversion
    - New and long TLDs
    - `İ/i` and `I/ı` comparison

=== "Turkish test scenarios"

    - [ ] `şükrü@örnek.com` and `çiçek.com.tr` are valid
    - [ ] `ş ü@örnek.com` is invalid
    - [ ] Convert the `xn--` form to Unicode and back

=== "Success criteria"

    - [ ] The test suite covers the Accept and Validate items of the criteria list
    - [ ] The package is published and documented

**Suggested technology:** JavaScript/TypeScript, Python or Go; package release (npm/PyPI)

!!! note ""
    This page is an **example concept**; it is not required for applying. You can apply with your own project too.

[← Example projects](index.md)
