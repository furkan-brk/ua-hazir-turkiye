---
title: "Okul-veli bilgilendirme sistemi"
---

# Okul-veli bilgilendirme sistemi

<div class="concept-meta"><span class="badge cat">Kamu ve Eğitim</span></div>

<div class="concept-lead" markdown>
Okulların velilere duyuru ve not bildirimi gönderdiği sistemi UA uyumlu yapmak.
</div>

**Kimin işine yarar?** Okullar, e-okul benzeri sistemler geliştiren firmalar.

=== "UA dokunma noktaları"

    - Veli iletişim e-postası kaydı
    - Toplu duyuru gönderimi
    - Not ve devamsızlık bildirimleri
    - Öğrenci ve veli adı büyük/küçük harf dönüşümü

=== "Türkçe test senaryoları"

    - [ ] `şükrü@veli.com` adresini veliye kaydet
    - [ ] `İSMAİL` adının doğru küçük harfe dönüştüğünü doğrula
    - [ ] Toplu duyuruyu 100 adrese gönder

=== "Başarı ölçütü"

    - [ ] Toplu gönderimde EAI adresleri kaybolmaz
    - [ ] `İ/i` ve `I/ı` dönüşümü doğrudur

**Önerilen teknoloji:** PHP/Laravel, MySQL, kuyruk (queue)

!!! note ""
    Bu sayfa bir **örnek konsepttir**; başvuru için zorunlu değildir. Kendi projenle de başvurabilirsin.

[← Örnek projeler](index.md)
