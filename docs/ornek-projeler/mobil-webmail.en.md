---
title: "Mobile email and contacts app"
---

# Mobile email and contacts app

<div class="concept-meta"><span class="badge cat">Mobile</span></div>

<div class="concept-lead" markdown>
A mobile email app that sends and receives Unicode email addresses and stores them in the contact book.
</div>

**Who is it for?** Teams building email clients and the open-source community.

=== "UA touchpoints"

    - Sending with SMTPUTF8
    - Parsing Unicode addresses in headers and body
    - Contact book sync
    - Address search and autocomplete

=== "Turkish test scenarios"

    - [ ] Send an email to `şükrü@örnek.com`
    - [ ] Add a contact on `çiçek.com.tr`
    - [ ] Find the contact by typing `şü` in autocomplete

=== "Success criteria"

    - [ ] Sending and receiving work with the EAI server
    - [ ] Contacts and search handle Turkish characters correctly

**Suggested technology:** Kotlin/Swift or Flutter, IMAP/SMTP libraries

!!! note ""
    This page is an **example concept**; it is not required for applying. You can apply with your own project too.

[← Example projects](index.md)
