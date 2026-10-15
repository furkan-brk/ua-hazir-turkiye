---
title: "UA Inspector: a form-checking browser extension"
---

# UA Inspector: a form-checking browser extension

**Category:** Developer Tools · **Difficulty:** Advanced

!!! tip "Summary"
    A browser extension that tries the email and domain fields of a web page with Turkish-character test addresses and produces a result report.

## Who is it for?

Developers, test engineers and communities doing UA awareness work.

## UA touchpoints

- Entering test addresses into forms and watching the response
- Detecting validation errors and rejection
- Report output (JSON and a readable summary)
- Warnings for known problematic patterns

## Turkish test scenarios

- [ ] Enter the test address in a sign-up form and report if it is rejected
- [ ] Try the same page with a `çiçek.com.tr` domain
- [ ] Export the report as JSON

## Suggested technology

Browser extension (Manifest V3), TypeScript

## Success criteria

- [ ] The extension catches rejection behavior on at least three common form types
- [ ] The report links to the Accept items of the criteria list

---

This page is an **example concept**; it is not required for applying. You can apply with your own project too.

[← Example projects](index.md)
