# Daily Quote App Design System

> Version: 1.0.0\
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
-   Minimal distraction reading experience
-   Component driven architecture

Identitas utama:

-   Electric green sebagai warna aksi utama
-   Clean card based layout
-   Inter + SF Mono typography
-   Light & Dark theme support

------------------------------------------------------------------------

## Theme Tokens

``` yaml
brand:
  primary: "#00d992"
  primary-soft: "#2fd6a1"
  primary-deep: "#10b981"

semantic:
  danger: "#ff5c5c"

themes:

  dark:
    background: "#101010"
    surface: "#1a1a1a"
    text-primary: "#f2f2f2"
    text-secondary: "#bdbdbd"
    border: "#3d3a39"

  light:
    background: "#f8fafc"
    surface: "#ffffff"
    text-primary: "#111827"
    text-secondary: "#475569"
    border: "#d1d5db"
```

------------------------------------------------------------------------

## Typography

Primary:

-   Inter
-   system-ui fallback

Mono:

-   SF Mono
-   JetBrains Mono
-   Consolas

  Token        Size   Weight   Usage
  ------------ ------ -------- ------------
  display-xl   48px   400      Hero title
  display-lg   32px   400      Section
  quote-text   24px   500      Quote
  body-md      16px   400      Content
  body-sm      14px   400      History
  code         13px   400      Timestamp

------------------------------------------------------------------------

## Components

### Quote Hero Card

Main card untuk quote aktif.

Rules:

-   Large readable text
-   Author highlight
-   Hairline border
-   Theme adaptive surface

------------------------------------------------------------------------

### Button Primary

Untuk:

-   Generate quote
-   Download quote

Menggunakan brand primary green.

------------------------------------------------------------------------

### Danger Action

Untuk:

-   Delete item
-   Clear history

Gunakan outline/ghost style agar tidak mengambil fokus.

------------------------------------------------------------------------

### History Log

Berisi:

-   Quote
-   Author
-   Timestamp
-   Delete action

Mengikuti gaya developer log/table.

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

Tablet:

-   Optimized spacing

Desktop:

-   Center container
-   Documentation style layout

------------------------------------------------------------------------

## Accessibility

-   Maintain contrast
-   Keyboard support
-   Focus state
-   Semantic HTML

------------------------------------------------------------------------

## Do

-   Keep spacing consistent
-   Maintain clean developer aesthetic
-   Use green only for primary actions

## Don't

-   Avoid heavy shadow
-   Avoid random colors
-   Avoid inconsistent typography
