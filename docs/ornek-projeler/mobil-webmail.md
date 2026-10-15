---
title: "Mobil e-posta ve kişi rehberi uygulaması"
---

# Mobil e-posta ve kişi rehberi uygulaması

**Kategori:** Mobil · **Zorluk:** İleri

!!! tip "Özet"
    Unicode e-posta adreslerini gönderen, alan ve kişi rehberinde saklayan bir mobil e-posta uygulaması.

## Kimin işine yarar?

E-posta istemcisi geliştiren ekipler ve açık kaynak topluluğu.

## UA dokunma noktaları

- SMTPUTF8 ile gönderim
- Başlıklar ve gövdede Unicode adres ayrıştırma
- Kişi rehberi senkronizasyonu
- Adres arama ve otomatik tamamlama

## Türkçe test senaryoları

- [ ] `şükrü@örnek.com` adresine e-posta gönder
- [ ] `çiçek.com.tr` alan adlı kişiyi rehbere ekle
- [ ] Otomatik tamamlamada `şü` yazınca kişiyi bul

## Önerilen teknoloji

Kotlin/Swift veya Flutter, IMAP/SMTP kütüphaneleri

## Başarı ölçütü

- [ ] Gönderme ve alma EAI sunucusuyla çalışır
- [ ] Rehber ve arama Türkçe karakterleri doğru işler

---

Bu sayfa bir **örnek konsepttir**; başvuru için zorunlu değildir. Kendi projenle de başvurabilirsin.

[← Örnek projeler](index.md)
