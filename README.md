# ⚡ Interactive 3D Portfolio

![Project Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Three.js%20%7C%20Tailwind-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)

> **Live Demo:** [jczerniak.dev](https://jczerniak.dev)

## 📖 O projekcie

To nie jest kolejna statyczna wizytówka. To **doświadczenie SPA (Single Page Application)**, które łączy wydajność Reacta z immersyjnością **WebGL**.

Celem projektu było stworzenie portfolio, które samo w sobie jest dowodem umiejętności – od zaawansowanej manipulacji DOM, przez shadery GLSL, aż po architekturę "Bento Grid".

### 🎯 Kluczowe Funkcjonalności

- **🎨 WebGL Core:** Autorski shader "Color Bends" napisany w GLSL, renderowany przez Three.js.
- **✨ Glassmorphism UI:** Nowoczesny interfejs z efektem rozmycia tła (backdrop-blur) i dynamicznymi gradientami.
- **🖱️ Spotlight Interaction:** Karty reagujące na pozycję kursora (dynamiczne oświetlenie krawędzi).
- **📱 Mobile First:** Responsywny design, który skaluje doświadczenie 3D na urządzenia mobilne.
- **🚀 Performance:** Zoptymalizowany build Vite, lazy loading i lekkie animacje Framer Motion.

## 🛠️ Tech Stack

Projekt zbudowany na najnowszych, stabilnych (i eksperymentalnych) technologiach.

| Kategoria | Technologie | Wersja |
|-----------|-------------|--------|
| **Core** | React, TypeScript, Vite | `v19` / `v5` |
| **Styling** | Tailwind CSS, clsx | `v3.4` |
| **3D Engine** | Three.js (Native WebGL integration) | `r160+` |
| **Motion** | Framer Motion | `v12` |
| **Quality** | ESLint, Prettier | - |

## 🧩 Struktura Projektu

```bash
src/
├── components/
│   ├── Background/    # Logika WebGL i Shadery (frag/vert)
│   ├── UI/            # Reużywalne komponenty SpotlightCard
│   └── ...
├── shaders.ts         # Kod źródłowy shaderów GLSL
└── App.tsx            # Główny widok i logika Bento Grid
```