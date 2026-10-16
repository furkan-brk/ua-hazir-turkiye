---
title: Kontrol Listesi
---

# Kontrol Listesi

**Finale kalmak için aşağıdaki 7 maddenin hepsini geçmen gerekir.** Test adresi olarak `şükrü@örnek.com` ve `çiçek.com.tr` gibi Türkçe karakterli örnekler kullanılır.

## Zorunlu maddeler

- [ ] Kayıt ve giriş formu `şükrü@örnek.com` adresini kabul ediyor
- [ ] Alan adı alanı `çiçek.com.tr` gibi Türkçe karakterli adresi kabul ediyor
- [ ] Doğrulama kuralı geçerli bir adrese "yanlış adres" demiyor
- [ ] Adres veritabanına ve loglara bozulmadan kaydediliyor
- [ ] `İ/i` ve `I/ı` harfleri doğru büyütülüp küçültülüyor
- [ ] Doğrulama e-postası Türkçe karakterli test adresine ulaşıyor
- [ ] Ekranda ve e-postada adres okunur görünüyor

??? note "İsteğe bağlı maddeler (kanıt şart değil)"
    - [ ] Uzun adresler ve yeni alan adı uzantıları kabul ediliyor
    - [ ] Alan uzunluğu sınırı Türkçe harfleri ortadan kesmiyor
    - [ ] Aynı adres iki kez kaydedilemiyor (benzersizlik kontrolü doğru)
    - [ ] Bağlantı ve yönlendirmelerde adres bozulmuyor
    - [ ] PDF çıktılarında adres bozulmuyor
    - [ ] Şifre sıfırlama e-postası çalışıyor
    - [ ] Bildirim e-postaları gönderilip alınabiliyor

## Kanıt

- **Ne zaman?** Düzeltme sürecinde topla, 24 Nisan'da teslim et.
- **Ne için?** Yalnızca zorunlu maddeler için.
- **Nasıl?** Her madde için bir ekran görüntüsü, test çıktısı veya otomatik test yeter.

Kesin liste teknik komiteyle netleşir. Süreç için [Nasıl İşler](program.md) sayfasına bak.
