---
title: Checklist
---

# Checklist

**To reach the final, you must pass all 7 items below.** Test addresses use Turkish-character examples such as `şükrü@örnek.com` and `çiçek.com.tr`.

## Required items

- [ ] The sign-up and login form accepts `şükrü@örnek.com`
- [ ] The domain field accepts a Turkish-character name such as `çiçek.com.tr`
- [ ] The validation rule doesn't call a valid address "wrong"
- [ ] The address is saved intact in the database and logs
- [ ] The letters `İ/i` and `I/ı` are upper- and lowercased correctly
- [ ] The verification email reaches a Turkish-character test address
- [ ] The address looks readable on screen and in email

??? note "Optional items (no evidence needed)"
    - [ ] Long addresses and new domain endings are accepted
    - [ ] Field length limits don't cut Turkish letters in half
    - [ ] The same address can't be registered twice (uniqueness check works)
    - [ ] Addresses aren't corrupted in links and redirects
    - [ ] Addresses aren't corrupted in PDF output
    - [ ] The password reset email works
    - [ ] Notification emails can be sent and received

## Evidence

- **When?** Collect it while fixing, submit it on 24 April.
- **For what?** Only for the required items.
- **How?** One screenshot, test output or automated test per item is enough.

The exact list is finalized with the technical committee. See [How It Works](program.md) for the process.
