---
title: Kriterler
---

# UA Uyum Kriterleri

**Proje, alan adı ve e-posta adresiyle ilgili beş adımın hepsinde doğru davranmalıdır.** Aşağıdaki liste standart test setinin özetidir; kesin liste teknik komiteyle netleşir.

## Zorunlu maddeler

### 1. Kabul

- [ ] Kayıt ve giriş formları `şükrü@örnek.com` adresini kabul ediyor
- [ ] Alan adı alanları `çiçek.com.tr` gibi IDN'leri kabul ediyor
- [ ] Alan uzunluğu sınırları Unicode karakterleri bayt olarak keserek bozmuyor

### 2. Doğrulama

- [ ] Doğrulama kuralları (regex veya kütüphane) uzun ve yeni alan adı uzantılarını kabul ediyor
- [ ] Doğrulama Unicode yerel kısmı ve Unicode alan adını kabul ediyor
- [ ] Hata mesajı, geçerli bir adresi "yanlış" diye suçlamıyor

### 3. Saklama

- [ ] Veritabanı, önbellek ve loglar UTF-8 ile kayıpsız saklıyor
- [ ] Adres karşılaştırması ve benzersizlik kontrolü doğru çalışıyor

### 4. İşleme

- [ ] A-label ↔ U-label dönüşümü (Punycode) doğru yapılıyor
- [ ] Büyük/küçük harf dönüşümü `İ/i` ve `I/ı` için doğru
- [ ] Bağlantı ve yönlendirme üretiminde adres bozulmuyor

### 5. Gösterim

- [ ] Arayüzde adres okunur halde görünüyor
- [ ] Bildirim e-postası ve PDF çıktılarında adres bozulmuyor

## E-posta (EAI) akışları

Proje, organizasyonun sunucusundaki Türkçe karakterli test adresleriyle şu akışları geçmelidir:

- [ ] Kayıt ve adres doğrulama e-postası
- [ ] Şifre sıfırlama e-postası
- [ ] Bildirim gönderme ve alma

## Kanıt

Her madde için ekran görüntüsü, test çıktısı veya otomatik test eklenir. Ayrıntı: [Doğrulama](dogrulama.md).
