---
title: Kriterler
---

# UA Uyum Kriterleri

**Proje, alan adı ve e-posta adresiyle ilgili beş adımda doğru davranmalıdır.** Finale girmek için yalnızca **zorunlu** maddeler gerekir; "artı" maddeler isteğe bağlıdır. Liste standart test setinin özetidir; kesin liste teknik komiteyle netleşir.

## Zorunlu maddeler (eşik)

### Kabul

- [ ] Kayıt ve giriş formları `şükrü@örnek.com` adresini kabul ediyor
- [ ] Alan adı alanları `çiçek.com.tr` gibi IDN'leri kabul ediyor

### Doğrulama

- [ ] Doğrulama kuralları (regex veya kütüphane) Unicode yerel kısmı ve Unicode alan adını kabul ediyor
- [ ] Hata mesajı, geçerli bir adresi "yanlış" diye suçlamıyor

### Saklama

- [ ] Veritabanı ve loglar UTF-8 ile kayıpsız saklıyor

### İşleme

- [ ] Büyük/küçük harf dönüşümü `İ/i` ve `I/ı` için doğru

### E-posta (EAI) akışı

Organizasyonun sunucusundaki Türkçe karakterli test adresleriyle:

- [ ] Kayıt ve adres doğrulama e-postası ulaşıyor

## Artı maddeler (isteğe bağlı)

- [ ] Alan uzunluğu sınırları Unicode karakterleri bayt olarak keserek bozmuyor
- [ ] Doğrulama kuralları uzun ve yeni alan adı uzantılarını kabul ediyor
- [ ] Önbellekte kayıpsız saklama; adres karşılaştırması ve benzersizlik kontrolü doğru çalışıyor
- [ ] A-label ↔ U-label dönüşümü (Punycode) doğru yapılıyor
- [ ] Bağlantı ve yönlendirme üretiminde adres bozulmuyor
- [ ] Arayüzde adres okunur halde görünüyor
- [ ] Bildirim e-postası ve PDF çıktılarında adres bozulmuyor
- [ ] Şifre sıfırlama e-postası çalışıyor
- [ ] Bildirim gönderme ve alma çalışıyor

## Kanıt

- **Ne zaman?** Uyumlaştırma boyunca topla, doğrulama haftasının başında (24 Nisan) teslim et.
- **Ne için?** Yalnızca **zorunlu maddeler** için kanıt şarttır. Artı maddeler için kanıt isteğe bağlıdır.
- **Nasıl?** Her madde için bir ekran görüntüsü, test çıktısı veya otomatik test yeterlidir.

Ayrıntı: [Doğrulama](dogrulama.md).
