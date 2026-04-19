# sorryDeva

A minimal static web project containing a basic HTML page, stylesheet, and JavaScript. Useful as a small starter/demo or a simple site scaffold.

## Project Structure

- `index.html` — The main HTML page. Loads `style.css` and `script.js`.
- `style.css` — Project styles.
- `script.js` — JavaScript behavior for the page.

## Overview

This repository is intentionally minimal. It demonstrates a single-page static site with separate CSS and JS files. You can open `index.html` directly in your browser for a quick preview or serve the folder with a simple HTTP server for a more accurate environment.

## Getting Started

Open `index.html` directly in your browser (recommended):

1. Double-click `index.html` or use your browser's File → Open menu to load the file.
2. The page will automatically load `style.css` and `script.js` so you can see the output immediately.

Optional: use a local static server if you need features like CORS-free local APIs or auto-reload. Not required to preview the site.

Examples (optional):

With Python 3:

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

With Node (http-server):

```bash
npm install -g http-server
http-server -c-1
# open the printed URL in your browser
```

## Development

- Edit `index.html` to change markup.
- Edit `style.css` to change styles.
- Edit `script.js` to change behavior.

If you use a local server with auto-reload (e.g., Live Server in VS Code), edits will show immediately.

## Contributing

This is a tiny project — open an issue or submit a pull request with improvements or fixes.

## License

This project is provided under the MIT License. See LICENSE (if you add one) or include your preferred license.

---

If you'd like, I can also:
- add a simple `LICENSE` file (MIT)
- add a `package.json` and dev scripts for local serving
- scaffold a tiny build or watch workflow

Tell me which of the above you'd like next.
