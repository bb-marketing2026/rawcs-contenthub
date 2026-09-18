# RAWCS Content Hub

Single-page content hub for RAWCS social planning — August, September and October 2026.
It holds the post calendar, captions, delivery/status tracking and the pubmat (artwork)
editor, all in one self-contained HTML file.

Live deploys are handled by Vercel: **any push to `main` redeploys the site.**

## What's in here

```
index.html      The deployed hub — one self-contained file (~9 MB, artwork inlined).
                This is what Vercel serves. Nothing is built or compiled.
vercel.json     Static config: no build step, no framework.
source/         The authoring sources the hub is compiled from (see below).
source/data/    The latest exported hub state (RAWCS 16.json) — the post data of record.
```

### source/

| File | Role |
| --- | --- |
| `August 2026 Content Hub.dc.html` | The hub itself: post data arrays, calendar UI, post editor, all logic. Source of truth. |
| `Pubmat.dc.html` | The pubmat renderer (1080×1350 / 1080×1080 artwork composition). |
| `support.js` | Runtime that renders the `.dc.html` templates in the browser. |
| `logos.js` | Inlined RAWCS + Rotary logo lockups (data URLs). |
| `pubmat-art.js` | Approved artwork display proxies, inlined as data URLs (`window.RAWCS_ART`). |
| `image-slot.js` | Drag-and-drop image placeholder component. |
| `_ds/…` | RAWCS design-system tokens (colors, fonts, typography) and component bundle. |

`index.html` is `source/August 2026 Content Hub.dc.html` with every one of those
dependencies inlined into a single file. Editing `index.html` by hand is not the
workflow — edit the source, re-inline, commit both.

## Running it locally

No install, no build. Serve the folder (the hub fetches its siblings over HTTP,
so `file://` will not work):

```bash
cd source
python3 -m http.server 8000
# open http://localhost:8000/August%202026%20Content%20Hub.dc.html
```

Or just open the committed `index.html` directly — it has no external dependencies
apart from the html-to-image CDN script used for PNG export.

## Data model (short version)

Post data lives in `August 2026 Content Hub.dc.html` as plain JS arrays and objects:

- `POSTS`, `SEPT_POSTS` — the baseline August and September/October posts.
- `ADDED_POSTS` — posts added after the baseline (ad hoc posts, Nepal Appeal videos 1–6).
- `RETIRED_POSTS` — ids removed from the calendar.
- `BAKED_EDITS` — per-post overrides (dates, slot labels, frame layout, photo crops).
- `BLANK.checks` — delivery-method ticks (`<id>:d-organic`, `<id>:d-paid`, …).

The running app saves user edits to `localStorage` (+ IndexedDB for uploaded photos)
and can export the whole state as JSON. That export is what gets "baked" back into
the arrays above — `source/data/RAWCS 16.json` is the most recent one.

## Deployment

The Vercel project `rawcs-contenthub` (team BB-Marketing) is linked to this repo with
`main` as the production branch. Push to `main` → Vercel serves the new `index.html`.
No build command, no output directory.
