---
title: "Newsletter and bulk email service"
---

# Newsletter and bulk email service

<div class="concept-meta"><span class="badge cat">Email Infrastructure</span> <span class="badge lv-o">Intermediate</span></div>

<div class="concept-lead" markdown>
Make the subscriber management and sending pipeline of a Listmonk-style newsletter service EAI-ready.
</div>

**Who is it for?** Organizations, associations and media that send newsletters.

=== "UA touchpoints"

    - Subscription form and double opt-in email
    - Unsubscribe link
    - Bulk sending and bounce handling
    - Subscriber import/export

=== "Turkish test scenarios"

    - [ ] Subscribe and confirm with `şükrü@örnek.com`
    - [ ] Open the unsubscribe link
    - [ ] Match a bounced email to the right subscriber

=== "Success criteria"

    - [ ] Subscribe, send and unsubscribe flows work with an EAI address
    - [ ] Bounce handling matches Unicode addresses

**Suggested technology:** Go (Listmonk) or Node.js, PostgreSQL, SMTP

!!! note ""
    This page is an **example concept**; it is not required for applying. You can apply with your own project too.

[← Example projects](index.md)
