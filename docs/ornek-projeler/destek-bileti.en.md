---
title: "Support ticket and CRM system"
---

# Support ticket and CRM system

<div class="concept-meta"><span class="badge cat">Email Infrastructure</span></div>

<div class="concept-lead" markdown>
Make the inbound and outbound email flows of a support system that opens tickets from email UA-ready.
</div>

**Who is it for?** Support teams and organizations using osTicket-style systems.

=== "UA touchpoints"

    - Creating tickets from incoming email
    - Customer matching and search
    - Reply email and subject line
    - Reports and exports

=== "Turkish test scenarios"

    - [ ] Send a support email from `şükrü@örnek.com`
    - [ ] Link the same customer's second request to one record
    - [ ] Check the reply goes to the right address

=== "Success criteria"

    - [ ] A ticket opens from incoming email and the reply reaches the EAI address
    - [ ] Customer matching works correctly with Turkish characters

**Suggested technology:** PHP (osTicket) or Python, IMAP polling, MySQL

!!! note ""
    This page is an **example concept**; it is not required for applying. You can apply with your own project too.

[← Example projects](index.md)
