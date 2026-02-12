# Urban Vista | Currency

A premium, offline-capable Progressive Web App (PWA) currency converter using real-time data from the National Bank of Romania (BNR).

## Features
- **Modern UI**: A clean, card-based interface with glassmorphism aesthetics.
- **Automated Updates**: Hourly synchronization with BNR exchange rates via GitHub Actions.
- **Dynamic Currency Management**: Add/remove currencies from the list and reorder them via drag-and-drop.
- **Custom Keypad**: A simplified, numeric-focused keypad for fast input.
- **Offline Support**: Core assets and exchange rates are cached via Service Worker.
- **Persistence**: User preferences (active currency, input, and list order) are saved in localStorage.

## Tech Stack
- **Frontend**: HTML5, Vanilla CSS, JavaScript.
- **Icons**: flag-icons library for national flags.
- **Utilities**: SortableJS for reorderable lists.
- **CI/CD**: GitHub Actions for automated XML rate updates.

## Local Development
To run the project locally, start a simple HTTP server in the root directory:

```bash
python3 -m http.server 8808
```

Then open http://localhost:8808 in your browser.

## Deployment
This project is continuously deployed (e.g., via Cloudflare Pages) directly from the main branch.