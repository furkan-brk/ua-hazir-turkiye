---
title: Ana Sayfa
description: Var olan yazılımını Türkçe karakterli e-posta adreslerine hazırla, finalde test jürisinden yatırım topla.
hide:
  - navigation
  - toc
---

<div class="ua-hero" markdown>

<span class="ua-eyebrow">Evrensel Kabul Uyum Çağrısı · 2027</span>

# Projen her adresi *tanısın*.

Var olan yazılımın `şükrü@çiçek.com.tr` gibi Türkçe karakterli e-posta adreslerini desteklesin. Düzelt, finale kal, test jürisinden yatırım topla.

**Tek şart:** başvuruda çalışan bir sürümün olsun.

[Başvur](#basvuru){ .md-button .md-button--primary }
[Nasıl işler?](program.md){ .md-button }

</div>

## Bir bakışta

| | |
| --- | --- |
| **Kimler** | Alan adı veya e-posta kullanan her yazılım. Takım en fazla 4 kişi. |
| **Tarihler** | Başvuru 22 Mart – 1 Nisan · Final 1 Mayıs |
| **Süre** | Yaklaşık 3 hafta düzeltme, sonra tek günlük final |
| **Kazanan** | 20 kişilik test jürisinden en çok yatırım alan takım |
| **Ödül** | İlk 3 takıma ödül, katılan herkese sertifika |

## 4 adım

<div class="step-cards" markdown>
<div class="step-card" markdown>
### Başvur
Aşağıdaki formu doldur.
</div>
<div class="step-card" markdown>
### Düzelt
Eğitim ve mentor desteğiyle projeni düzelt.
</div>
<div class="step-card" markdown>
### Testi geç
[Kontrol listesini](kriterler.md) geçersen finale kalırsın.
</div>
<div class="step-card" markdown>
### Yatırım topla
Canlı demo yap, jüri beğendiğine yatırım yapsın.
</div>
</div>

<div class="invest-box" markdown>

### Kazanan nasıl belirlenir?

- Test jürisindeki 20 kişinin her birine eşit sanal bakiye verilir.
- Herkes bakiyesini beğendiği projelere istediği gibi dağıtır.
- **En çok yatırım alan takım kazanır.**

</div>

<h2 id="basvuru">Başvuru formu</h2>

Takım başına tek başvuru yeterli. Kısa yaz, ayrıntıyı sonra konuşuruz.

<form class="apply-form" action="https://formspree.io/f/FORM_ID" method="POST">
  <div class="field">
    <label for="team">Takım adı</label>
    <input id="team" name="takim_adi" type="text" required>
  </div>
  <div class="field">
    <label for="contact">İletişim e-postası</label>
    <input id="contact" name="eposta" type="text" inputmode="email" autocomplete="email" required>
    <span class="hint">Türkçe karakterli adresler de olur.</span>
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
    <label for="link">Proje bağlantısı (isteğe bağlı)</label>
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
    <label for="scope">Projenin neresi e-posta veya alan adı alıyor? (kayıt formu, bildirimler vb.)</label>
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

??? question "Sıfırdan proje yazmam gerekiyor mu?"
    Hayır. Çalışan bir projen olması yeterli. Projeyi tamamlamış olman da gerekmiyor.

??? question "Evrensel Kabul (UA) nedir?"
    Her yazılımın Türkçe karakterli e-posta ve alan adlarını sorunsuz kabul etmesi. Ayrıntı [SSS](sss.md#ua-nedir) sayfasında.

??? question "Sertifika var mı?"
    Evet. Katılan herkese katılım sertifikası verilir.

??? question "Bu işi bilmiyorum, başvurabilir miyim?"
    Evet. Eğitim ve mentor desteği bunun için var.

Diğer sorular için [SSS](sss.md) sayfasına bak.
