---
title: Criteria
---

# UA Compliance Criteria

**A project must behave correctly in all five steps involving domain names and email addresses.** The list below summarizes the standard test set; the exact list is finalized with the technical committee.

## Required items

### 1. Accept

- [ ] Sign-up and login forms accept `şükrü@örnek.com`
- [ ] Domain fields accept IDNs such as `çiçek.com.tr`
- [ ] Field length limits do not break Unicode by cutting bytes

### 2. Validate

- [ ] Validation rules (regex or library) accept long and new TLDs
- [ ] Validation accepts a Unicode local part and a Unicode domain
- [ ] Error messages do not accuse a valid address of being wrong

### 3. Store

- [ ] Database, cache and logs store it intact in UTF-8
- [ ] Address comparison and uniqueness checks work correctly

### 4. Process

- [ ] A-label ↔ U-label conversion (Punycode) is correct
- [ ] Case conversion is correct for `İ/i` and `I/ı`
- [ ] Links and redirects do not corrupt the address

### 5. Display

- [ ] The address is readable in the interface
- [ ] The address is intact in notification emails and PDF output

## Email (EAI) flows

The project must pass these flows with Turkish-character test addresses on the organizers' server:

- [ ] Sign-up and address verification email
- [ ] Password reset email
- [ ] Sending and receiving notifications

## Evidence

Each item gets a screenshot, test output or automated test. Details: [Verification](dogrulama.md).
