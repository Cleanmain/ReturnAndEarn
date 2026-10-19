# Return & Earn — App Demo

A clickable prototype of **Return & Earn**, a student concept for a new feature in the IKEA app
(Chalmers University of Technology, IKEA innovation challenge 3). Concept site:
https://cleanmain.github.io/ReturnAndEarn/

> Student concept · Not an official IKEA service. All figures are illustrative. No IKEA systems are connected.

## Run it

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build and host

```bash
npm run build    # outputs static files to ../public/app-demo/
```

The demo lives inside the concept site repo. Its build is written to the site's `public/app-demo/` folder and
embedded with an `<iframe>` on the site's Demo page. The site's `npm run build` (and the GitHub Pages workflow)
runs this build automatically. The output is fully static and uses relative paths (`base: './'` plus hash routing).

## Presentation script (Emma's BILLY)

On a desktop screen the app shows in a phone frame with a side panel that highlights the six concept steps as you go.
On a phone it fills the screen.

1. **Home**: tap the blue *"Does your furniture need replacing?"* banner.
2. **Return & Earn intro**: explain the six steps, then tap **Start a return**.
3. **Find your product**: tap **Scan product label** (fake camera scan that lands on BILLY) or pick BILLY under *From your purchases*.
4. **Check condition**: answer *No* / *No* / *Yes*. Answer *Yes* on the first two to show how the app redirects to spare parts or Buy Back.
5. **Estimate**: material breakdown and **12 SEK net material value + 20 SEK circularity bonus = 32 SEK**. Tap **Return and earn 32 SEK**.
6. **Ready to return**: return code and store choice. **Tap the QR code** (hidden trigger) to simulate IKEA scanning and accepting it.
7. **Wallet**: push notification and the new 32 SEK voucher. Tap **See your impact**.
8. **Impact**: materials returned, the BILLY's material journey, and the link to IKEA's recycled-wood goals.

### Presenter shortcuts

| Key | Action |
| --- | --- |
| `N` | Simulate IKEA accepting the open return (backup for the QR tap) |
| `R` | Reset the demo and go back to Home |

Progress is saved in the browser's localStorage, so a refresh mid-demo keeps your place. Press `R` before presenting.

## Where things live

- `src/data/products.ts`: catalogue (BILLY, MALM, KALLAX, PAX, LACK, POÄNG), material weights and illustrative values, stores
- `src/lib/estimate.ts`: voucher formula (material value − recovery cost + return bonus)
- `src/state/DemoContext.tsx`: demo state (returns, vouchers, notifications, reset)
- `src/screens/`: one file per screen
- `src/components/PhoneFrame.tsx`: phone frame, presenter side panel, bottom navigation, keyboard shortcuts
- `src/styles.css`: all styling
