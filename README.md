🎯 Veler2313 Chrome New‑Tab Extension

A lightweight Chrome extension that replaces the default new tab page with a custom look. Hosted on GitHub so users can preview it before cloning and loading locally.

---

## 📦 Live Demo

Explore the design and behavior live on GitHub Pages before installing:

➡️ [Demo Site on GitHub Pages](https://Veler2313.github.io)

---

## 🧩 Features & Commands

- **Auto‑updating Clock** – Displays current time, updates every second.
- **CMD - write `cmd` to open up the terminal.**
  - `site <main-domain> <TLD(optional)(.com is default)>` – open a website
  - `color <color-hex-code>` – change the primary color
  - `sec-color <color-hex-code>` – change the secondary color
  - `back-color <color-hex-code>` – change the background color (include an alpha in hex)
- **Colors - write `name of a color` to change the theme to that color `green, lime, yellow, gold, orange, brown, red, megenta, pink, purple, blue, cyan, teal`.**

---

## 🛠️ Installation (Local / Unpacked)

1. Clone the repo:
    ```bash
    git clone https://github.com/Veler2313/Veler2313.github.io.git
    cd Veler2313.github.io
    ```
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (top-right)
4. Click **Load unpacked**, select this folder
5. Open a new tab to see your custom newtab

---

## 📜 License

Distributed under the **MIT License**.

---

## 🧠 How It Works

- `manifest.json` uses `chrome_url_overrides.newtab` to override Chrome’s new tab.
- `index.html` sets up the input, clock display, and UI structure.
- `main.js` handles command parsing, input events, and theme updates.

---

**(Letting you know that most of this Project and this README file are written with the help of ChatGPT)**
