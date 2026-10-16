---
title: Criteria
---

# UA Compliance Criteria

**A project must behave correctly in five steps involving domain names and email addresses.** Only the **required** items are needed to enter the final; "bonus" items are optional. The list summarizes the standard test set; the exact list is finalized with the technical committee.

## Required items (threshold)

### Accept

- [ ] Sign-up and login forms accept `şükrü@örnek.com`
- [ ] Domain fields accept IDNs such as `çiçek.com.tr`

### Validate

- [ ] Validation rules (regex or library) accept a Unicode local part and a Unicode domain
- [ ] Error messages do not accuse a valid address of being wrong

### Store

- [ ] Database and logs store it intact in UTF-8

### Process

- [ ] Case conversion is correct for `İ/i` and `I/ı`

### Email (EAI) flow

With Turkish-character test addresses on the organizers' server:

- [ ] The sign-up and address verification email arrives

## Bonus items (optional)

- [ ] Field length limits do not break Unicode by cutting bytes
- [ ] Validation rules accept long and new TLDs
- [ ] Intact storage in the cache; address comparison and uniqueness checks work correctly
- [ ] A-label ↔ U-label conversion (Punycode) is correct
- [ ] Links and redirects do not corrupt the address
- [ ] The address is readable in the interface
- [ ] The address is intact in notification emails and PDF output
- [ ] Password reset email works
- [ ] Sending and receiving notifications works

## Evidence

- **When?** Collect it throughout adaptation and submit it at the start of verification week (24 April).
- **For what?** Evidence is mandatory only for the **required items**. It is optional for bonus items.
- **How?** One screenshot, test output or automated test per item is enough.

Details: [Verification](dogrulama.md).
