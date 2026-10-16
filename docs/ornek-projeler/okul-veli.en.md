---
title: "School-parent communication system"
---

# School-parent communication system

<div class="concept-meta"><span class="badge cat">Public Sector and Education</span></div>

<div class="concept-lead" markdown>
Make the system where schools send announcements and grade notifications to parents UA-ready.
</div>

**Who is it for?** Schools and companies building e-school style systems.

=== "UA touchpoints"

    - Parent contact email registration
    - Bulk announcement sending
    - Grade and absence notifications
    - Case conversion of student and parent names

=== "Turkish test scenarios"

    - [ ] Register `şükrü@veli.com` for a parent
    - [ ] Check that `İSMAİL` lowercases correctly
    - [ ] Send a bulk announcement to 100 addresses

=== "Success criteria"

    - [ ] EAI addresses are not lost in bulk sending
    - [ ] `İ/i` and `I/ı` conversion is correct

**Suggested technology:** PHP/Laravel, MySQL, queue

!!! note ""
    This page is an **example concept**; it is not required for applying. You can apply with your own project too.

[← Example projects](index.md)
