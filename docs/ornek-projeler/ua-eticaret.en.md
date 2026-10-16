---
title: "UA-ready online store"
---

# UA-ready online store

<div class="concept-meta"><span class="badge cat">Web and E-commerce</span></div>

<div class="concept-lead" markdown>
Make the membership, order and invoice flows of a WooCommerce-style store work with email addresses and domains that use Turkish characters.
</div>

**Who is it for?** Small businesses and store owners; anyone whose customers use addresses like `şükrü@örnek.com`.

=== "UA touchpoints"

    - Email validation on sign-up and checkout forms
    - Order confirmation and shipping notification emails
    - Customer list export (CSV) and invoice PDFs
    - Coupons and newsletter subscriptions

=== "Turkish test scenarios"

    - [ ] Register and place an order with `şükrü@örnek.com`
    - [ ] Add a corporate customer on `çiçek.com.tr`
    - [ ] Verify the password reset email arrives

=== "Success criteria"

    - [ ] Sign-up, order and password reset flows work end to end with an EAI address
    - [ ] Addresses stay intact in CSV and PDF output

**Suggested technology:** WordPress + WooCommerce, PHP, MySQL (utf8mb4)

!!! note ""
    This page is an **example concept**; it is not required for applying. You can apply with your own project too.

[← Example projects](index.md)
