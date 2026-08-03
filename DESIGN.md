# Daily Quote App Design System

> Version: 2.0.0\
> Status: Production Design Reference

Daily Quote App adalah aplikasi open-source untuk mengambil random
quote, menyimpan history, menghapus data, dan melakukan export koleksi
quote.

Dokumen ini digunakan sebagai acuan desain dan pengembangan agar UI,
komponen, struktur project, dan style tetap konsisten.

------------------------------------------------------------------------

## Design Philosophy

Daily Quote App menggunakan pendekatan:

-   Developer focused interface
-   Documentation inspired UI
-   Editorial reading experience (serif display + mono metadata)
-   Minimal distraction
-   Component driven architecture

Identitas utama:

-   Electric green sebagai warna aksi utama
-   Cool-tinted neutral surfaces (hijau kehitaman, bukan abu netral)
-   Fraunces (serif) untuk kutipan & headline
-   Space Grotesk untuk UI, JetBrains Mono untuk metadata
-   Ambient glow + film grain pada latar
-   Light & Dark theme support

------------------------------------------------------------------------

## Theme Tokens

``` yaml
brand:
  primary: "#2fd6a1"        # dark: aksi / aksen
  primary-soft: "#6fe4c0"   # hover
  primary-deep: "#17b184"   # active / pressed
  on-primary: "#06130e"

semantic:
  danger: "#ef6b6b"
  danger-soft: "#ff8a8a"

radii:
  card: 14px
  control: 8px

motion:
  ease: cubic-bezier(0.22, 1, 0.36, 1)
  duration: 220ms

themes:

  dark:
    background: "#0a0f0d"
    surface: "#101614"
    surface-hover: "#16201c"
    text-primary: "#dbe6e2"
    text-strong: "#f2f7f5"
    text-secondary: "#9aa9a4"
    text-muted: "#66756f"
    border: "#202b27"
    border-strong: "#2d3b36"

  light:
    background: "#f2f4f1"
    surface: "#ffffff"
    surface-hover: "#f4f7f4"
    text-primary: "#24322c"
    text-strong: "#0f1714"
    text-secondary: "#4a5a53"
    text-muted: "#6b7a74"
    border: "#dde4df"
    border-strong: "#c4cec8"
    primary: "#0a7f5e"      # aksen lebih gelap untuk kontras di light
    primary-soft: "#0fa171"
    primary-deep: "#076148"
    on-primary: "#f2fbf8"
    danger: "#d64545"
```

Semua gray diberi tint hijau dingin yang konsisten; dilarang mencampur
gray hangat.

------------------------------------------------------------------------

## Typography

Display (serif):

-   Fraunces — italic 500 untuk kutipan, 500 untuk headline
-   Iowan Old Style / Georgia fallback

UI (sans):

-   Space Grotesk
-   Segoe UI / system-ui fallback

Mono:

-   JetBrains Mono
-   SF Mono / Consolas fallback

  Token        Size               Weight   Usage
  ------------ ------------------ -------- ------------
  display-xl   34–52px (clamp)    500      Hero title, serif
  display-lg   24–30px (clamp)    500      Section title, serif
  quote-text   28–40px (clamp)    500      Quote, serif italic
  body-md      16px               400      Content
  body-sm      14px               400      History / hints
  code         11–13px            400      Timestamp / eyebrow

Aturan:

-   `text-wrap: balance` pada headline, `text-wrap: pretty` pada kutipan
-   `font-variant-numeric: tabular-nums` pada angka & timestamp
-   Uppercase mono hanya untuk eyebrow/meta kecil (identity), letter-spacing
    0.08–0.12em

------------------------------------------------------------------------

## Components

### Quote Hero Card

Main card untuk quote aktif.

Rules:

-   Serif italic, ukuran besar, giroskop besar (" ") sebagai dekorasi
-   Author: mono uppercase dengan bullet glow hijau
-   Hairline border + radial glow di sudut atas kanan
-   Skeleton shimmer saat loading (bukan spinner)
-   `aria-busy` + `aria-live="polite"`, error memakai `role="alert"`

------------------------------------------------------------------------

### Button Primary

Untuk:

-   Generate quote
-   Download quote

Menggunakan brand primary green, shadow tinted hijau, hover translateY(-1px),
pressed scale(0.98).

------------------------------------------------------------------------

### Danger Action

Untuk:

-   Delete item
-   Clear history

Gunakan outline/ghost style agar tidak mengambil fokus.

------------------------------------------------------------------------

### History Log

Berisi:

-   Quote (serif italic, sejajar dengan hero)
-   Author
-   Timestamp (tabular-nums)
-   Delete action
-   Badge count di header

Mengikuti gaya developer log/table dengan hover surface tint.

------------------------------------------------------------------------

### Toggle Pill

Segmented control untuk format export (TXT / PDF). Item aktif memakai
primary + shadow glow.

------------------------------------------------------------------------

## Surfaces & Effects

-   Ambien: radial gradient glow hijau di pojok layar (`.app-shell::before`)
-   Grain: noise overlay fixed opacity 5% (`.app-shell::after`)
-   Nav: sticky + `backdrop-filter: blur(14px)`, glass dengan hairline border
-   Shadow selalu ditintai hue hijau, bukan hitam murni

------------------------------------------------------------------------

## Core Features

### Random Quote

Generate\
↓\
Fetch API\
↓\
Render Quote\
↓\
Save History

------------------------------------------------------------------------

### Export

Support:

-   TXT
-   PDF

Export harus menjaga readability dan struktur quote.

------------------------------------------------------------------------

## React Project Structure

``` txt
src/

├── components/
│   ├── ui/
│   ├── layout/
│   │   ├── NavBar.jsx
│   │   ├── MainLayout.jsx
│   │   └── Footer.jsx
│   └── features/
│       ├── quote/
│       └── history/

├── hooks/
│   ├── useFetchQuote.js
│   └── useQuoteHistory.js

├── context/
│   └── ThemeContext.jsx

├── services/
│   └── api.js

├── utils/
│   ├── exportPdf.js
│   ├── exportTxt.js
│   └── formatDate.js

└── App.jsx
```

------------------------------------------------------------------------

## Responsive

Mobile:

-   Single column
-   Full width card
-   Action bar & history item stacked vertikal

Tablet:

-   Optimized spacing

Desktop:

-   Center container (max 1080px)
-   Documentation style layout

------------------------------------------------------------------------

## Accessibility

-   Maintain contrast
-   Keyboard support, visible focus ring
-   Skip to content link (`.skip-link`)
-   Semantic HTML
-   `prefers-reduced-motion` menonaktifkan animasi
-   Status live region untuk loading, alert untuk error

------------------------------------------------------------------------

## Do

-   Keep spacing consistent
-   Maintain clean developer aesthetic
-   Use green only for primary actions
-   Tint semua surface & border ke arah hijau dingin

## Don't

-   Avoid heavy shadow (tinted shadow saja)
-   Avoid random colors
-   Avoid inconsistent typography
-   Avoid purple/blue gradients
