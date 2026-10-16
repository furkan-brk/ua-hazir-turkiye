---
title: "Destek bileti ve CRM sistemi"
---

# Destek bileti ve CRM sistemi

<div class="concept-meta"><span class="badge cat">E-posta Altyapısı</span></div>

<div class="concept-lead" markdown>
E-postadan bilet açan destek sisteminin gelen ve giden e-posta akışlarını UA uyumlu yapmak.
</div>

**Kimin işine yarar?** Destek ekipleri ve osTicket benzeri sistemleri kullanan kurumlar.

=== "UA dokunma noktaları"

    - Gelen e-postadan bilet oluşturma
    - Müşteri eşleştirme ve arama
    - Yanıt e-postası ve konu satırı
    - Raporlar ve dışa aktarma

=== "Türkçe test senaryoları"

    - [ ] `şükrü@örnek.com` adresinden destek e-postası gönder
    - [ ] Aynı müşterinin ikinci talebini aynı kayda bağla
    - [ ] Yanıtın doğru adrese gittiğini doğrula

=== "Başarı ölçütü"

    - [ ] Gelen e-postadan bilet açılır ve yanıt EAI adresine ulaşır
    - [ ] Müşteri eşleştirme Türkçe karakterlerle doğru çalışır

**Önerilen teknoloji:** PHP (osTicket) veya Python, IMAP polling, MySQL

!!! note ""
    Bu sayfa bir **örnek konsepttir**; başvuru için zorunlu değildir. Kendi projenle de başvurabilirsin.

[← Örnek projeler](index.md)
