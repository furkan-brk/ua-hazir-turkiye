---
title: "Webmail eklentisi (Roundcube veya benzeri)"
---

# Webmail eklentisi (Roundcube veya benzeri)

<div class="concept-meta"><span class="badge cat">E-posta Altyapısı</span></div>

<div class="concept-lead" markdown>
Açık kaynak bir webmail yazılımına EAI gönderme/alma desteği ve düzeltmeleri eklemek.
</div>

**Kimin işine yarar?** Açık kaynak katkıcıları, e-posta sağlayıcıları ve kurumsal BT ekipleri.

=== "UA dokunma noktaları"

    - SMTPUTF8 gönderim yolu
    - Unicode adresli başlıkların gösterimi
    - Adres defteri ve otomatik tamamlama
    - Yanıtla ve ilet akışları

=== "Türkçe test senaryoları"

    - [ ] `şükrü@örnek.com` adresine yanıt ver
    - [ ] Adres defterine `gülşen@sağlık.com` ekle
    - [ ] Gelen kutusunda gönderen adının doğru göründüğünü doğrula

=== "Başarı ölçütü"

    - [ ] Eklenti EAI sunucusunda gönderme ve alma yapar
    - [ ] Değişiklik, açık kaynak projeye katkı (PR) olarak sunulur

**Önerilen teknoloji:** PHP (Roundcube), IMAP/SMTP, Dovecot/Postfix test sunucusu

!!! note ""
    Bu sayfa bir **örnek konsepttir**; başvuru için zorunlu değildir. Kendi projenle de başvurabilirsin.

[← Örnek projeler](index.md)
