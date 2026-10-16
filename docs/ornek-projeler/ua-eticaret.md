---
title: "UA-uyumlu e-ticaret mağazası"
---

# UA-uyumlu e-ticaret mağazası

<div class="concept-meta"><span class="badge cat">Web ve E-ticaret</span></div>

<div class="concept-lead" markdown>
WooCommerce veya benzeri bir mağazanın üyelik, sipariş ve fatura akışlarını Türkçe karakterli e-posta ve alan adlarıyla çalışır hale getirmek.
</div>

**Kimin işine yarar?** Küçük işletmeler ve mağaza sahipleri; müşterisi `şükrü@örnek.com` gibi adres kullanan herkes.

=== "UA dokunma noktaları"

    - Kayıt ve ödeme formlarındaki e-posta doğrulaması
    - Sipariş onayı ve kargo bildirimi e-postaları
    - Müşteri listesi dışa aktarma (CSV) ve fatura PDF'i
    - Kupon ve bülten abonelikleri

=== "Türkçe test senaryoları"

    - [ ] `şükrü@örnek.com` ile kayıt ol ve sipariş ver
    - [ ] `çiçek.com.tr` alan adlı kurumsal müşteri ekle
    - [ ] Şifre sıfırlama e-postasının ulaştığını doğrula

=== "Başarı ölçütü"

    - [ ] Kayıt, sipariş ve şifre sıfırlama akışları EAI adresiyle uçtan uca çalışır
    - [ ] CSV ve PDF çıktılarında adres bozulmaz

**Önerilen teknoloji:** WordPress + WooCommerce, PHP, MySQL (utf8mb4)

!!! note ""
    Bu sayfa bir **örnek konsepttir**; başvuru için zorunlu değildir. Kendi projenle de başvurabilirsin.

[← Örnek projeler](index.md)
