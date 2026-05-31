# Daily Quote App

A modern and minimal quote generator application built with React.
Generate random quotes, save your favorite quote history, and export your collection with a clean developer-inspired interface.

![Daily Quote App Preview](./docs/preview.png)

## Overview

Daily Quote App is a lightweight web application focused on providing a clean reading experience for inspirational quotes.

The interface follows a developer-style design system with:

* Minimal layout
* Light & dark theme support
* Clean typography
* Component-based architecture
* Responsive design

## Live Demo

🚀 https://daily-quote-app-alpha.vercel.app/

## Features

### Random Quote Generator

Generate random quotes instantly from an external quote API.

### Quote History

Save generated quotes locally and revisit them anytime.

Features:

* Store generated quotes
* Delete individual quote
* Clear all history

### Export Collection

Download your saved quote collection.

Supported formats:

* TXT
* PDF

### Theme Mode

Supports:

* Light Mode
* Dark Mode

User preference is stored locally.

## Tech Stack

* React
* Vite
* JavaScript
* CSS
* LocalStorage API
* jsPDF
* Vercel

## Project Structure

```txt
src/

├── assets/

├── components/

│   ├── ui/
│   ├── layout/
│   └── features/

│       ├── quote/
│       └── history/

├── hooks/

├── services/

├── utils/

└── App.jsx
```

## Getting Started

Clone repository:

```bash
git clone https://github.com/masyuraC7/daily-quote-app.git
```

Move into project:

```bash
cd daily-quote-app
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Design System

This project follows a custom design system documented in:

```txt
DESIGN.md
```

Main design principles:

* Consistent spacing system
* Reusable components
* Semantic colors
* Developer-inspired interface
* Accessibility focused UI

## Future Improvements

Planned updates:

* Favorite quote feature
* Quote category filtering
* Search quote history
* Cloud sync support
* User authentication

## Deployment

This project is deployed using Vercel.

Every push to the main branch automatically triggers production deployment.

## Contributing

Contributions, issues, and feature requests are welcome.

Steps:

1. Fork this repository
2. Create your feature branch
3. Commit your changes
4. Open a pull request

## License

This project is licensed under the MIT License.

---

Built with ❤️ using React + Vite
