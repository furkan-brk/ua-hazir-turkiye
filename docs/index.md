---
title: Ana Sayfa
description: Var olan projeni Evrensel Kabul (UA) uyumlu hale getir, doğrulamayı geç, finalde test jürisinden yatırım topla.
hide:
  - navigation
  - toc
---

<div class="ua-hero" markdown>

<span class="ua-eyebrow">Evrensel Kabul Uyum Çağrısı · 2027</span>

# Projen her adresi *tanısın*.

`şükrü@çiçek.com.tr` gibi Türkçe karakterli e-posta ve alan adları her yazılımda çalışmalı. Sıfırdan ürün yazmıyorsun: **var olan projeni** uyumlu hale getiriyorsun, finalde test jürisinden yatırım topluyorsun.

**Kim başvurabilir?** Alan adı veya e-posta adresi kabul eden, işleyen ya da gösteren her yazılım. **Tek şart:** başvuru tarihinde çalışan bir sürümünün olması.

[Başvur](#basvuru){ .md-button .md-button--primary }
[Örnek projelere bak](ornek-projeler/index.md){ .md-button }

</div>

## Yarışma bir bakışta

| Başlık | Bilgi |
| --- | --- |
| **Süre** | Yaklaşık 4 hafta uyumlaştırma, ardından tek günlük final |
| **Takım** | En fazla 4 kişi |
| **Proje** | Var olan, çalışan bir yazılım (web, mobil, masaüstü, e-posta, kütüphane, API) |
| **Test jürisi** | 20 kişi |
| **Kazanan** | Test jürisinden en çok yatırım alan takım |
| **Ödül** | İlk 3 takıma ödül, katılan herkese sertifika |

## Nasıl işler?

<div class="step-cards" markdown>
<div class="step-card" markdown>
### Başvur
Çalışan projenle aşağıdaki formdan başvur.
</div>
<div class="step-card" markdown>
### Uyumlaştır
Yaklaşık 3 hafta: ICANN eğitimi, mentor saatleri ve Türkçe karakterli test e-posta sistemiyle projeni düzelt.
</div>
<div class="step-card" markdown>
### Doğrulamayı geç
Standart UA testini geçersen **UA-Hazır** rozeti alırsın ve finale kalırsın.
</div>
<div class="step-card" markdown>
### Yatırım topla
Finalde canlı demo yaparsın; 20 kişilik test jürisi sanal bakiyesini beğendiği projelere yatırır.
</div>
</div>

<div class="invest-box" markdown>

### Yatırım sistemi

- Test jürisindeki her kişiye sistemde eşit bir sanal bakiye tanımlanır.
- Jüri üyeleri bakiyelerini istedikleri finalistlere, istedikleri miktarda yatırır.
- **En çok yatırım alan takım yarışmayı kazanır.**

Ayrıntı için [Değerlendirme](degerlendirme.md) sayfasına bak.

</div>

## Takvim

<div class="tl" markdown>
<div class="tl-item" markdown>
<time>22 Mart – 1 Nisan 2027</time>
<b>Çağrı ve başvuru</b>
<p>Projeler başvurur; ön eleme 2–4 Nisan'da yapılır.</p>
</div>
<div class="tl-item" markdown>
<time>5 – 23 Nisan</time>
<b>Uyumlaştırma</b>
<p>ICANN eğitimi, mentor saatleri ve test e-posta sistemi.</p>
</div>
<div class="tl-item" markdown>
<time>24 – 28 Nisan</time>
<b>UA doğrulaması</b>
<p>Kanıtlar teslim edilir, teknik komite testi yapılır; bir düzeltme hakkı vardır.</p>
</div>
<div class="tl-item is-final" markdown>
<time>1 Mayıs</time>
<b>Final günü</b>
<p>Farkındalık oturumu, canlı demolar, yatırım turu ve ödül töreni.</p>
</div>
</div>

Tarihler örnektir ve ICANN onayına bağlıdır. Ayrıntı: [Takvim](takvim.md).

<h2 id="basvuru">Başvuru formu</h2>

Takım başına tek başvuru yapılır. Alanları kısa tutabilirsin; ayrıntıları sonra konuşuruz.

<form class="apply-form" action="https://formspree.io/f/FORM_ID" method="POST">
  <div class="field">
    <label for="team">Takım adı</label>
    <input id="team" name="takim_adi" type="text" required>
  </div>
  <div class="field">
    <label for="contact">İletişim e-postası</label>
    <input id="contact" name="eposta" type="text" inputmode="email" autocomplete="email" required>
    <span class="hint">Türkçe karakterli adresler de kabul edilir.</span>
  </div>
  <div class="field wide">
    <label for="members">Takım üyeleri (en fazla 4 kişi)</label>
    <textarea id="members" name="uyeler" rows="2" required></textarea>
  </div>
  <div class="field">
    <label for="project">Proje adı</label>
    <input id="project" name="proje_adi" type="text" required>
  </div>
  <div class="field">
    <label for="link">Proje bağlantısı (depo veya canlı adres)</label>
    <input id="link" name="proje_baglantisi" type="url">
  </div>
  <div class="field wide">
    <label for="type">Proje türü</label>
    <select id="type" name="proje_turu" required>
      <option value="">Seçiniz</option>
      <option>Web sitesi / web uygulaması</option>
      <option>Mobil uygulama</option>
      <option>Masaüstü yazılımı / e-posta istemcisi</option>
      <option>Kütüphane / eklenti</option>
      <option>API / arka uç servisi</option>
    </select>
  </div>
  <div class="field wide">
    <label for="scope">UA kapsamı: projende hangi e-posta ve alan adı noktaları etkilenecek?</label>
    <textarea id="scope" name="ua_kapsami" rows="3" required></textarea>
  </div>
  <label class="check">
    <input type="checkbox" name="calisan_surum" required>
    Projemin bugün çalışan bir sürümü var.
  </label>
  <div class="actions">
    <button type="submit" class="md-button md-button--primary">Başvuruyu gönder</button>
  </div>
</form>

## Sık sorulan sorular

??? question "Sıfırdan proje geliştirmem gerekiyor mu?"
    Hayır. Çalışan bir projen olması yeterlidir. Amaç, o projeyi UA uyumlu hale getirmektir.

??? question "Projemin başvuruda tamamlanmış olması gerekiyor mu?"
    Tamamlanmış olması gerekmez; **çalışan bir sürümü** olması yeterlidir. Eksiklerini uyumlaştırma sürecinde giderirsin.

??? question "Kazananı kim belirliyor?"
    20 kişilik test jürisi. Her üye sanal bakiyesini beğendiği projelere yatırır; en çok yatırım alan kazanır.

??? question "Sertifika verilecek mi?"
    Evet. Katılan herkes katılım sertifikası alır. Doğrulamayı geçenlere ayrıca UA-Hazır rozeti verilir.

??? question "UA'yı bilmiyorum, başvurabilir miyim?"
    Evet. ICANN eğitimi, e-posta sistemi tanıtımı ve mentor saatleri bunun için var.

??? question "Takım kaç kişi olabilir?"
    En fazla 4 kişi. Tek kişi de başvurabilir.

Tüm sorular için [SSS](sss.md) sayfasına bak.
