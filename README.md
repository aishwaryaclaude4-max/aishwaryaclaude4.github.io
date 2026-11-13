# AURA Drawing Class – Website

Static website (HTML, CSS, JavaScript). No backend, no build step.

```
index.html            page structure + SEO
css/styles.css        design (colours are variables at the top)
js/content.js         ✏️ YOUR TEXT, CONTACT DETAILS AND IMAGE LISTS
js/main.js            behaviour (filters, lightbox, form)
assets/images/        all photos and artwork
  profile/  hero/  pencil-drawings/  acrylic/  watercolor/  oil-pastel/
  portraits/  landscapes/  creative-experiments/  exhibitions/  certificates/
```

## Preview locally
Open `index.html` in a browser. Or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Replace photos and artwork
Copy your image into the right folder **using exactly these file names** (JPG, overwrite the placeholder). Until a file exists, a soft "add artwork" placeholder is shown, so nothing looks broken.

| What | Path |
|---|---|
| Hero image | `assets/images/hero/hero-artwork.jpg` (portrait 4:5, about 1200×1500) |
| Profile photo (hero circle) | `assets/images/profile/aishwarya-sreenivas-profile.jpg` (square) |
| About photo | `assets/images/profile/aishwarya-sreenivas-about.jpg` (4:5) |
| Pencil drawings | `assets/images/pencil-drawings/pencil-drawing-01.jpg`, `-02`, `-03` |
| Acrylic | `assets/images/acrylic/acrylic-painting-01.jpg` … |
| Watercolor | `assets/images/watercolor/watercolor-01.jpg` … |
| Oil pastels | `assets/images/oil-pastel/oil-pastel-01.jpg` … |
| Portraits | `assets/images/portraits/portrait-01.jpg` … |
| Landscapes | `assets/images/landscapes/landscape-01.jpg` … |
| Creative experiments | `assets/images/creative-experiments/creative-experiment-01.jpg` … |

**More than 3 pieces per category?** In `js/content.js`, change the number at the end of that line in `portfolioSlots` (e.g. `3` → `8`).
**Custom file names or titles?** Add a line to `extraArtworks` in `js/content.js`:
`{ file: "pencil-drawings/my-sketch.jpg", title: "My Sketch", cat: "Pencil Drawings" },`

**Exhibition photos and certificates:** put files in `exhibitions/` or `certificates/` and list them in `js/content.js` under `exhibitions` and `certificates`:
`{ file: "exhibitions/show-2025-01.jpg", title: "Exhibition 2025" },`

**Image tips (for speed):** resize to ~1600 px on the long side, save as JPG at 75–85% quality (or WebP), aim for under 300 KB each. Tools: squoosh.app, TinyPNG. Use descriptive lowercase file names with hyphens.

## Edit biography, achievements, classes and contact details
Everything lives in **`js/content.js`**, with comments beside each item:
- `bio` – biography paragraphs (replace the last placeholder paragraph with your own story)
- `name`, `role` – heading and subtitle in About
- `achievements` – add **only real** achievements: `{ year: "2025", title: "…", detail: "…" }`
- `grades`, `levels` – academy descriptions (edit to match your actual teaching)
- `phone`, `whatsapp` (international format, **917994855769**), `email`, `instagram` – used for every phone, WhatsApp, email and Instagram link and the enquiry form

Also update these two places that can't read `content.js` (search engines read them):
1. `index.html` → the `<script type="application/ld+json">` block (phone, email, Instagram).
2. `index.html` → after deploying, change the `og:image` meta to the full URL of your hero image, e.g. `https://yoursite.netlify.app/assets/images/hero/hero-artwork.jpg`.

Colours and fonts: variables at the top of `css/styles.css`.

## How the enquiry form works
There is no server. "Send on WhatsApp" opens `wa.me/917994855769` with the message pre-filled; "Send by email" opens the visitor's email app addressed to your Gmail. Nothing is stored on the site.

## Important: how image changes go live
This is a static site. **Images are part of the website files.** Adding or replacing a picture on your computer does not change the live site until you **upload/redeploy the updated files** (steps below). Visitors cannot upload images through the website, and the site cannot save uploads permanently without a backend.

## Deploy on GitHub Pages
1. Create a GitHub account and a new **public** repository (e.g. `aura-drawing-class`).
2. Upload everything in this folder (drag and drop in the web interface, or `git add . && git commit -m "Initial site" && git push`).
3. Repository → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
4. After a minute the site is live at `https://<username>.github.io/aura-drawing-class/`.
5. **To update images or text:** replace the files in the repository (upload again or push) and wait a minute for Pages to refresh.
6. Custom domain (optional): Settings → Pages → Custom domain.

## Deploy on Netlify
**Easiest (drag and drop):** go to app.netlify.com/drop, drag this whole folder in. You get a live URL immediately. To update, open the site → *Deploys* → drag the updated folder again.
**With GitHub (auto-updates):** Netlify → *Add new site → Import from Git* → pick the repo → leave build command empty and publish directory as `.` → Deploy. Every push then redeploys automatically.
Custom domain: Site settings → Domain management.

## Accessibility and SEO included
Semantic landmarks, skip link, keyboard-friendly menu, filters and lightbox (Esc closes, arrow keys navigate), descriptive alt text, visible focus, reduced-motion support, lazy-loaded images, meta description, Open Graph tags and structured data.
