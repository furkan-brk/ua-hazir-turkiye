---
title: "Türkçe IDN ve EAI doğrulama kütüphanesi"
---

# Türkçe IDN ve EAI doğrulama kütüphanesi

<div class="concept-meta"><span class="badge cat">Geliştirici Araçları</span></div>

<div class="concept-lead" markdown>
Alan adı ve e-posta doğrulamasını doğru yapan, Türkçe karakter ve harf dönüşümü testleriyle gelen küçük bir açık kaynak kütüphane.
</div>

**Kimin işine yarar?** Form ve API geliştiren herkes; diğer projelerin bağımlılığı olabilir.

=== "UA dokunma noktaları"

    - Unicode yerel kısım ve alan adı doğrulaması
    - Punycode ↔ Unicode dönüşümü
    - Yeni ve uzun alan adı uzantıları
    - `İ/i` ve `I/ı` karşılaştırması

=== "Türkçe test senaryoları"

    - [ ] `şükrü@örnek.com` ve `çiçek.com.tr` geçerli
    - [ ] `ş ü@örnek.com` geçersiz
    - [ ] `xn--` biçimini Unicode'a ve geri çevir

=== "Başarı ölçütü"

    - [ ] Test seti kriter listesinin Kabul ve Doğrulama maddelerini kapsar
    - [ ] Paket yayımlanır ve belgelenir

**Önerilen teknoloji:** JavaScript/TypeScript, Python veya Go; paket yayını (npm/PyPI)

!!! note ""
    Bu sayfa bir **örnek konsepttir**; başvuru için zorunlu değildir. Kendi projenle de başvurabilirsin.

[← Örnek projeler](index.md)
