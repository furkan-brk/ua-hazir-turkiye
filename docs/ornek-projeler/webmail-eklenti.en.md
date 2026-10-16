---
title: "Webmail plugin (Roundcube or similar)"
---

# Webmail plugin (Roundcube or similar)

<div class="concept-meta"><span class="badge cat">Email Infrastructure</span></div>

<div class="concept-lead" markdown>
Add EAI send/receive support and fixes to an open-source webmail application.
</div>

**Who is it for?** Open-source contributors, email providers and corporate IT teams.

=== "UA touchpoints"

    - SMTPUTF8 sending path
    - Display of headers with Unicode addresses
    - Address book and autocomplete
    - Reply and forward flows

=== "Turkish test scenarios"

    - [ ] Reply to `şükrü@örnek.com`
    - [ ] Add `gülşen@sağlık.com` to the address book
    - [ ] Check the sender name displays correctly in the inbox

=== "Success criteria"

    - [ ] The plugin sends and receives on the EAI server
    - [ ] The change is submitted upstream as a pull request

**Suggested technology:** PHP (Roundcube), IMAP/SMTP, Dovecot/Postfix test server

!!! note ""
    This page is an **example concept**; it is not required for applying. You can apply with your own project too.

[← Example projects](index.md)
