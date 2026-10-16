---
title: "UA Denetçi: form denetleyen tarayıcı eklentisi"
---

# UA Denetçi: form denetleyen tarayıcı eklentisi

<div class="concept-meta"><span class="badge cat">Geliştirici Araçları</span></div>

<div class="concept-lead" markdown>
Bir web sayfasındaki e-posta ve alan adı alanlarını Türkçe karakterli test adresleriyle deneyip sonuç raporu veren tarayıcı eklentisi.
</div>

**Kimin işine yarar?** Geliştiriciler, test mühendisleri ve UA farkındalığı çalışmaları yapan topluluklar.

=== "UA dokunma noktaları"

    - Formlara test adresi girip yanıtı gözlemleme
    - Doğrulama hatası ve reddetme tespiti
    - Rapor çıktısı (JSON ve okunur özet)
    - Bilinen sorunlu kalıpların uyarısı

=== "Türkçe test senaryoları"

    - [ ] Test adresini kayıt formuna gir ve reddedilirse raporla
    - [ ] Aynı sayfayı `çiçek.com.tr` alanıyla dene
    - [ ] Raporu JSON olarak dışa aktar

=== "Başarı ölçütü"

    - [ ] Eklenti en az üç yaygın form türünde ret davranışını yakalar
    - [ ] Rapor, kriter listesindeki Kabul maddelerine bağlanır

**Önerilen teknoloji:** Tarayıcı eklentisi (Manifest V3), TypeScript

!!! note ""
    Bu sayfa bir **örnek konsepttir**; başvuru için zorunlu değildir. Kendi projenle de başvurabilirsin.

[← Örnek projeler](index.md)
