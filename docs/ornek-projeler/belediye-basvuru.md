---
title: "Belediye e-başvuru formu"
---

# Belediye e-başvuru formu

<div class="concept-meta"><span class="badge cat">Kamu ve Eğitim</span> <span class="badge lv-o">Orta</span></div>

<div class="concept-lead" markdown>
Vatandaşların başvuru yaptığı bir belediye veya kurum portalını Türkçe karakterli e-posta ve alan adlarıyla sorunsuz çalıştırmak.
</div>

**Kimin işine yarar?** Belediyeler, kamu kurumları ve onlara yazılım sağlayan firmalar.

=== "UA dokunma noktaları"

    - Başvuru sahibi e-posta ve kurumsal alan adı alanları
    - Başvuru takip numarası e-postaları
    - Dilekçe PDF çıktısı
    - Yönetici raporları ve dışa aktarma

=== "Türkçe test senaryoları"

    - [ ] `müdürlük@büyükşehir.bel.tr` benzeri kurumsal adres tanımla
    - [ ] `çağlar@örnek.com` ile başvur ve takip e-postasını al
    - [ ] PDF dilekçede adresin okunduğunu doğrula

=== "Başarı ölçütü"

    - [ ] Başvuru ve takip akışı EAI adresiyle çalışır
    - [ ] PDF ve rapor çıktılarında adres bozulmaz

**Önerilen teknoloji:** Java Spring veya .NET, Oracle/PostgreSQL

!!! note ""
    Bu sayfa bir **örnek konsepttir**; başvuru için zorunlu değildir. Kendi projenle de başvurabilirsin.

[← Örnek projeler](index.md)
