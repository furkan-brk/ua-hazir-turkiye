---
title: "Randevu ve rezervasyon sistemi"
---

# Randevu ve rezervasyon sistemi

<div class="concept-meta"><span class="badge cat">Web ve E-ticaret</span></div>

<div class="concept-lead" markdown>
Klinik, kuaför veya restoran için randevu sisteminin hatırlatma e-postalarını ve iptal bağlantılarını UA uyumlu yapmak.
</div>

**Kimin işine yarar?** Randevu sistemi kullanan küçük işletmeler ve hizmet sağlayıcılar.

=== "UA dokunma noktaları"

    - Randevu formundaki e-posta alanı
    - Hatırlatma ve iptal e-postaları
    - Takvim daveti (.ics) içindeki katılımcı adresi
    - Yönetici paneli arama ve filtreleri

=== "Türkçe test senaryoları"

    - [ ] `gülşen@sağlık.com` adresiyle randevu al
    - [ ] İptal bağlantısını e-postadan aç
    - [ ] Takvim davetini içe aktar ve katılımcıyı doğrula

=== "Başarı ölçütü"

    - [ ] Randevu, hatırlatma ve iptal akışı EAI adresiyle çalışır
    - [ ] Takvim davetinde adres doğru görünür

**Önerilen teknoloji:** Next.js veya Laravel, PostgreSQL, SMTP

!!! note ""
    Bu sayfa bir **örnek konsepttir**; başvuru için zorunlu değildir. Kendi projenle de başvurabilirsin.

[← Örnek projeler](index.md)
