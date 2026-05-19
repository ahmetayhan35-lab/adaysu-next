# CLAUDE.md — ADAY Su Arıtma Kurumsal Site

## Proje Hakkında
ADAY Su Arıtma Sistemleri'nin kurumsal showcase web sitesi. İzmir/Bornova merkezli, residential ve industrial water treatment sistemleri (RO, water softening, filtration) için satış, kurulum ve teknik servis sunan firma.

**Hedef:** Apple-tarzı premium estetik, sade ve teknik güven veren bir kurumsal sunum. Mineralleri, su kimyasını, hizmet uzmanlığını öne çıkaran modern bir tasarım.

**Dil:** Türkçe (tüm UI metinleri, alt yazılar, meta etiketler dahil)

**Yapı:** Çok sayfalı statik site
- `index.html` — Anasayfa
- `hizmetler.html` — Hizmetler (satış, kurulum, teknik servis)
- `urunler.html` — Ürünler (RO, su yumuşatma, filtrasyon)
- `hakkimizda.html` — Hakkımızda
- `iletisim.html` — İletişim
- Sayfalar arası ortak header/footer — partial yapısı yoksa her dosyada birebir aynı, değişiklik tüm dosyalara aynı anda yansıtılır.

---

## First Step (Always)
- **Run the `frontend-design` skill** before writing any frontend code, every session, without exception.
- Read `brand_assets/` folder first to load logo, color palette ve referans görselleri.

## Reference Images
- If a reference image is provided: replicate layout, spacing, typography, ve color precisely. Use placeholder content (images via `https://placehold.co/`, generic Turkish text). Do not enhance or extend the design.
- If no reference image: design from scratch following the brand guardrails below.
- Screenshot your output, compare against the reference, fix mismatches, re-screenshot. Minimum 2 comparison rounds. Stop only when no visible differences remain or the user confirms.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` is located in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not launch a second instance.
- Multi-page site olduğu için her sayfa test edilirken URL belirtilir: `http://localhost:3000/hizmetler.html` gibi.

## Screenshot Workflow (Windows)
- Puppeteer is installed under the project's `node_modules/`. Chrome cache is at `%LOCALAPPDATA%\puppeteer\` (resolves to `C:\Users\<KullanıcıAdı>\AppData\Local\puppeteer\`).
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000/<sayfa>.html`
- Screenshots are saved automatically to `./temporary-screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000/urunler.html urunler-grid` → saves as `screenshot-N-urunler-grid.png`
- `screenshot.mjs` is located in the project root.
- After screenshotting, read the PNG from `temporary-screenshots/` with the Read tool — Claude can see ve analyze the image directly.
- Use forward slashes in paths even on Windows (Node.js handles both, but forward slashes are safer in JS strings).
- When comparing, be precise: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Verify: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing
- Test viewports: 375px (mobile), 768px (tablet), 1440px (desktop), 1920px (large desktop)
- Her sayfa için en az 3 viewport screenshot (mobile, tablet, desktop) alınır.

## Output Defaults
- 5 ayrı HTML dosyası (yukarıdaki yapı)
- Ortak stiller `styles/main.css` içinde tek bir dosyada — her HTML aynı CSS'i link'ler
- Sayfa-spesifik küçük override'lar HTML içinde `<style>` bloğunda olabilir
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Tailwind config inline tanımlanır (CDN config bloğu) — ADAY renk tokenleri Tailwind'a tanıtılır
- Placeholder images SADECE referans için — gerçek brand_assets her zaman önceliklidir
- Mobile-first responsive design
- All copy in Turkish, professional but warm tone (not corporate-cold)

## Brand Assets — HAZIR
**`brand_assets/` klasörü dolu, içeriği önceliklidir. Placeholder'a düşme.**

Beklenen yapı:
```
brand_assets/
├── logo/
│   ├── aday-logo-dark.svg      (krem/açık arka plan için)
│   ├── aday-logo-light.svg     (deep teal/koyu arka plan için)
│   ├── aday-icon.svg           (favicon, küçük kullanım)
│   └── aday-logo-original.<ext>
├── colors/
│   └── palette.md veya palette.png
├── photos/
│   ├── kurulum/                (saha kurulum fotoğrafları)
│   ├── urunler/                (cihaz fotoğrafları)
│   └── ofis/                   (kurumsal sahneler)
└── README.md                   (varsa marka kullanım notları)
```

**Kurallar:**
- Logo seçimi arka plan rengine göre yapılır: krem/paper üzerine `aday-logo-dark`, deep teal üzerine `aday-logo-light`.
- Logo'yu CSS filter (hue-rotate, invert vs.) ile renklendirme. Her varyant ayrı dosyadır.
- Ürün fotoğrafları kullanılırken brand treatment uygulanır: hafif `mix-blend-multiply` veya alt-renk overlay ile palete bağla.
- Stok damla görseli, generic mavi gradient, "temiz su = mutlu aile" cliché'lerinden kaçın.

---

## ADAY Brand Tokens

### Color System — Deep Teal + Krem (Apple-vari premium)

```css
--aday-deep:     #0F2A2E   /* deep teal — ana CTA, heading, koyu yüzeyler */
--aday-mineral:  #2C5F65   /* secondary teal — link, vurgu, ikon */
--aday-mist:     #7A9DA1   /* açık teal — hover state, secondary border */
--aday-accent:   #C8A464   /* warm copper — kontrast, "premium" işareti, badge */
--aday-cream:    #F5F1EA   /* sıcak nötr arka plan (ana zemin) */
--aday-paper:    #FAFAF8   /* en açık katman, kart yüzeyi */
--aday-ink:      #1A1F1F   /* metin */
--aday-mute:     #6B7676   /* secondary text, caption */
--aday-line:     #E8E2D6   /* divider, subtle border */
```

**Tailwind config (CDN inline):**
```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          aday: {
            deep:    '#0F2A2E',
            mineral: '#2C5F65',
            mist:    '#7A9DA1',
            accent:  '#C8A464',
            cream:   '#F5F1EA',
            paper:   '#FAFAF8',
            ink:     '#1A1F1F',
            mute:    '#6B7676',
            line:    '#E8E2D6',
          }
        },
        fontFamily: {
          display: ['Fraunces', 'serif'],
          sans:    ['Inter', 'system-ui', 'sans-serif'],
        }
      }
    }
  }
</script>
```

**Asla varsayılan Tailwind blue/cyan/teal kullanma.** Sadece `aday-*` tokenları kullanılır.

### Typography
- **Display/Heading:** `Fraunces` (variable, opsz açık) — Apple-tarzı modern serif
- **Body/UI:** `Inter` veya `Geist Sans`
- Heading'lerde `letter-spacing: -0.03em`, büyük punto'larda (60px+) `-0.04em`
- Body'de `line-height: 1.7`, paragraf max-width ~65ch
- Google Fonts'tan yükle:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  ```

### Layered Shadows (renk tonlu, düz değil)
```css
/* base elevation — kart, panel */
box-shadow:
  0 1px 2px rgba(15, 42, 46, 0.04),
  0 4px 12px rgba(15, 42, 46, 0.06);

/* elevated — hover, öne çıkan kart */
box-shadow:
  0 2px 4px rgba(15, 42, 46, 0.05),
  0 8px 24px rgba(15, 42, 46, 0.08);

/* floating — CTA, modal, dropdown */
box-shadow:
  0 2px 4px rgba(15, 42, 46, 0.06),
  0 12px 32px rgba(15, 42, 46, 0.10),
  0 24px 64px rgba(200, 164, 100, 0.04);
```

### Spacing Tokens
Sadece şu adımları kullan: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160` (px).
Tailwind eşdeğeri: `1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 40`.
Section padding: desktop `py-32` veya `py-40`, mobile `py-16`.

### Border Radius
- Küçük (button, input, badge): `6px` (`rounded-md`)
- Orta (kart, image): `12px` (`rounded-xl`)
- Büyük (hero blok, feature card): `20px` (`rounded-[20px]`)
- Tam yuvarlak (avatar, icon button): `9999px` (`rounded-full`)

---

## Common Components (sayfalar arası tutarlı)

### Header (her sayfada birebir aynı)
- Sticky top, başlangıçta transparan, scroll'da `aday-paper/80` + backdrop-blur
- Logo (sol), menü (orta veya sağ), iletişim CTA (sağ)
- Menü: Anasayfa · Hizmetler · Ürünler · Hakkımızda · İletişim
- Aktif sayfa link'i `text-aday-deep` + alt çizgi (accent renk)
- Mobile: hamburger, açılınca tam ekran teal overlay

### Footer (her sayfada birebir aynı)
- Deep teal arka plan, krem metin
- 4 kolon: Logo + kısa açıklama · Hızlı bağlantılar · İletişim · Sosyal
- Alt çizgi: telif + KVKK linki

### Buttons
- **Primary:** `bg-aday-deep text-aday-cream` + accent hover (subtle copper glow)
- **Secondary:** `border border-aday-deep text-aday-deep bg-transparent` → hover'da `bg-aday-deep text-aday-cream`
- **Ghost:** sadece metin, hover'da underline + accent

### Cards (ürün/hizmet kartı)
- `bg-aday-paper`, `rounded-xl`, base shadow
- Hover'da elevated shadow + 2px yukarı translate
- İçinde: görsel (üst, treatment overlay'li) + başlık (Fraunces) + açıklama (Inter) + "Detay" link

---

## Anti-Generic Guardrails
- **Colors:** Asla varsayılan Tailwind palette değeri (blue-500, cyan-600, teal-500 vs.) kullanma. Sadece `aday-*` paletten.
- **Shadows:** Asla flat `shadow-md`. Yukarıdaki layered, renk-tonlu shadow tokenlarını kullan.
- **Typography:** Heading ve body aynı font olamaz. Fraunces (display) + Inter (sans) pairing. Büyük başlıklarda `tracking-tight` (`-0.03em`), body'de `leading-relaxed` (`1.7`).
- **Gradients:** Tek renk linear gradient banal. Birden fazla radial gradient katmanla (teal + cream + faint copper). SVG noise filter ile dokunarak derinlik kat.
- **Animations:** Sadece `transform` ve `opacity` animasyonu. Asla `transition-all`. Spring easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` hover için, `cubic-bezier(0.16, 1, 0.3, 1)` entrance için.
- **Interactive states:** Her tıklanabilir elementte hover, focus-visible, active state olmak zorunda. İstisna yok.
- **Images:** Görsellere gradient overlay (`bg-gradient-to-t from-aday-deep/60`) + `mix-blend-multiply` renk treatment uygula. Stok görsel hissi vermesin.
- **Spacing:** Tutarlı spacing tokenları kullan. Random Tailwind step (örn `p-7`) yok.
- **Depth:** Yüzeyler katmanlı (base → elevated → floating). Hepsi aynı z-plane'de durmamalı.

## Hard Rules
- Reference veya spec'te olmayan section, feature, content **ekleme**
- Reference design'ı "iyileştirme" — replikat et
- Tek screenshot pass'ta durma — minimum 2 round compare
- `transition-all` kullanma
- Default Tailwind blue/cyan/teal kullanma — sadece `aday-*` tokenlar
- Brand asset varsa placeholder kullanma — her zaman gerçek asset öncelikli
- Tüm metin Türkçe — İngilizce copy yazma
- 5 sayfada header/footer **birebir** aynı olmalı — değişiklik 5 dosyaya aynı anda yansıtılır
- Logo'yu CSS filter ile renklendirme — varyant dosyası kullan

---

## Content Sections — Sayfa Bazında

### `index.html` — Anasayfa
- **Hero:** Fraunces büyük başlık + tek cümle değer önerisi + iki CTA (Hizmetler + İletişim)
- **Hizmetler özeti:** 3 kart (Satış · Kurulum · Teknik Servis) — her biri `hizmetler.html`'ye link
- **Öne çıkan ürünler:** 3-4 ürün kartı — `urunler.html`'ye link
- **Uzmanlık şeridi:** "25+ yıl saha tecrübesi" gibi sayısal kanıt blokları
- **İletişim CTA:** Footer öncesi, sıcak teal şerit + WhatsApp/telefon

### `hizmetler.html`
- Page header (sayfa başlığı + kısa açıklama)
- 3 detay blok: Satış · Kurulum · Teknik Servis (her biri için ne yapıyoruz, kim için)
- Süreç anlatımı (4-5 adım: keşif → analiz → kurulum → eğitim → servis)
- CTA: "Keşif randevusu al"

### `urunler.html`
- Page header
- Kategori grid: RO Sistemleri · Su Yumuşatma · Filtrasyon · Endüstriyel Sistemler
- Her kategori için 3-6 ürün kartı
- Filtreleme opsiyonel (kategoriye göre)

### `hakkimizda.html`
- Page header
- Hikaye blok (firma kuruluşu, vizyon)
- Uzmanlık alanları (membran, TDS/EC, kalibrasyon, reçine — teknik güven sinyali)
- Ekip/kurucu portresi (varsa)
- Sertifika/referans logoları

### `iletisim.html`
- Page header
- 2 kolon: form (sol) + iletişim bilgileri (sağ, harita gömülü)
- Adres (İzmir/Bornova), telefon, WhatsApp, e-mail, mesai saatleri
- Google Maps embed

---

## SEO ve Meta
- Her sayfada unique `<title>` ve `<meta name="description">`
- Open Graph etiketleri (paylaşım için)
- Türkçe `lang="tr"` attribute
- Anahtar kelimeler: "izmir su arıtma", "bornova su arıtma servisi", "ters ozmos kurulum izmir" vb. doğal şekilde içeriğe gömülü
- Favicon `brand_assets/logo/aday-icon.svg`'den
- Tüm görsellere anlamlı `alt` (Türkçe)

---

## Notes for Future Sessions
- Bu CLAUDE.md sürekli güncellenir — yeni karar ve standartlar buraya eklenir.
- Brand asset eklendikçe `brand_assets/README.md`'a not düş.
- Screenshot referansları `references/` klasöründe tutulur, dosya adı tarihli (`2026-05-16-hero-v1.png`).
- Her sayfa değişikliği sonrası 5 sayfa da hâlâ tutarlı mı kontrol — header/footer/CSS consistency.
