---
title: Evrensel Kabul
---

# Evrensel Kabul (Universal Acceptance)

**Evrensel Kabul, geçerli her alan adının ve e-posta adresinin dilden, yazı sisteminden ve uzunluktan bağımsız olarak her uygulamada eşit çalışması gerekliliğidir.**

## Türkçe için neden kritik?

Türkçe karakterler (`ç ğ ı İ ö ş ü`) üç ayrı yerde sorun çıkarır:

| Sorun | Örnek | Beklenen |
| --- | --- | --- |
| Form reddediyor | `şükrü@örnek.com` "geçersiz" denir | Kabul edilmeli |
| Büyük/küçük harf dönüşümü | `İSPARTA` ile `ısparta` karışır | Yerel kurallara göre doğru işlenmeli |
| Teslim edilmiyor | Bildirim e-postası kaybolur | EAI destekli sunucu ve istemci |

## Beş adım

Bir yazılım alan adı veya e-posta adresiyle karşılaşınca beş şeyi doğru yapmalıdır:

1. **Kabul:** Giriş alanları adresi reddetmez.
2. **Doğrulama:** Doğrulama kuralları (regex, kütüphane) Unicode, uzun ve yeni alan adı uzantılarını bilir.
3. **Saklama:** Veritabanı ve loglar UTF-8 ile kayıpsız tutar.
4. **İşleme:** A-label ve U-label dönüşümü (Punycode) ve harf dönüşümü doğru yapılır.
5. **Gösterim:** Arayüz, e-posta ve belgelerde adres okunur halde görünür.

## Kısa sözlük

| Terim | Anlamı |
| --- | --- |
| IDN | Uluslararasılaştırılmış alan adı (`çiçek.com.tr`) |
| EAI | E-posta adresi uluslararasılaştırması; yerel kısım ve alan adı Unicode olabilir |
| U-label / A-label | Alan adının Unicode ve Punycode (`xn--`) biçimi |
| SMTPUTF8 | Unicode e-posta adreslerini taşıyan SMTP uzantısı |

Daha fazlası için [Kaynaklar](kaynaklar.md) sayfasına bak.
