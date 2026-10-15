---
title: "Bülten ve toplu e-posta servisi"
---

# Bülten ve toplu e-posta servisi

**Kategori:** E-posta Altyapısı · **Zorluk:** Orta

!!! tip "Özet"
    Listmonk benzeri bir bülten servisinin abone yönetimini ve gönderim hattını EAI uyumlu yapmak.

## Kimin işine yarar?

Bülten gönderen kurumlar, dernekler ve medya.

## UA dokunma noktaları

- Abone formu ve çift onay e-postası
- Abonelikten çıkma bağlantısı
- Toplu gönderim ve geri dönüş (bounce) işleme
- Abone içe/dışa aktarma

## Türkçe test senaryoları

- [ ] `şükrü@örnek.com` ile abone ol ve onayla
- [ ] Abonelikten çık bağlantısını aç
- [ ] Geri dönen e-postayı doğru aboneyle eşleştir

## Önerilen teknoloji

Go (Listmonk) veya Node.js, PostgreSQL, SMTP

## Başarı ölçütü

- [ ] Abone, gönderim ve çıkış akışları EAI adresiyle çalışır
- [ ] Geri dönüş işleme Unicode adreslerle eşleşir

---

Bu sayfa bir **örnek konsepttir**; başvuru için zorunlu değildir. Kendi projenle de başvurabilirsin.

[← Örnek projeler](index.md)
