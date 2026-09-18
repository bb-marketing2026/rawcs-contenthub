# CLAUDE.md — RAWCS Content Hub

Read this before touching anything. This repo is not a typical web app.

## What this project is

A **single-page, no-build content hub** used by the RAWCS marketing team to plan and
review social posts for August–October 2026. It ships as one self-contained
`index.html` at the repo root. Vercel serves it statically; a push to `main` deploys.

There is no framework, no package.json, no bundler, no CI. Do not add any.
Do not convert this to React/Next/Vite. Do not introduce npm dependencies.

## The two-file rule

- `source/August 2026 Content Hub.dc.html` — **the source of truth.** All post data,
  layout and logic live here.
- `index.html` — a generated, fully-inlined copy of that file (dependencies from
  `source/` are embedded as inline scripts and data URLs).

Never hand-edit `index.html`. Change the source, then regenerate the inlined file and
commit both in the same commit. If you cannot regenerate it in this environment, make
the source change, say so explicitly in the PR/commit message, and leave `index.html`
untouched rather than half-updated.

## How the page works

`source/support.js` is a small runtime that renders `.dc.html` files: each is a normal
HTML document containing an `<x-dc>` template plus a `class Component extends DCLogic`
script. The template uses `{{ dotted.path }}` holes and `<sc-for>` / `<sc-if>`
elements; values come from the logic class's `renderVals()`. Styling is **inline
styles only** — no stylesheets, no CSS classes. Keep it that way; the team edits this
file through a visual editor that relies on inline styles.

Key globals loaded from `source/`: `window.RAWCS_LOGOS` (logos.js),
`window.RAWCS_ART` (pubmat-art.js, artwork proxies as data URLs), `<image-slot>`
(image-slot.js), and the RAWCS design-system bundle + token CSS under `source/_ds/`.

## Post data

Inside the hub source:

| Name | Meaning |
| --- | --- |
| `POSTS` / `SEPT_POSTS` | Baseline August and September/October posts. |
| `ADDED_POSTS` | Posts added later — ad hoc posts and Nepal Appeal videos 1–6. |
| `RETIRED_POSTS` | Post ids hidden from the calendar. |
| `BAKED_EDITS` | Per-post overrides: dates, week, slot label, frame text, photo crop. |
| `BLANK.checks` | Delivery-method ticks, keyed `"<postId>:d-organic"`, `":d-paid"`, `":d-boosted"`, `":d-adhoc"`. |
| `STATUS` / `STATUS_ORDER` | Review states: notstarted, review, improve, hold, queued, posted. |

Each post carries: `id`, `dateISO`, `week`, `slotLabel`, `category`, `pillar`, `ask`,
`topic`, `format` (`photo` / `video` / `carousel`), `frames[]` (kicker, headline,
highlight, ctas, brief, photo/video refs), `caption`, `tags[]`, `status`, `statusType`.

Users' in-browser edits persist to `localStorage` (key prefix `rawcs-aug26-hub-v5`)
with uploaded photos in IndexedDB (`rawcs-hub-photos`), and can be exported as JSON.
`source/data/RAWCS 16.json` is the latest export — the shape is
`{ seed, savedAt, months, data: { edits, extra, deleted, checks, notes, times } }`.
"Baking" means copying `data.edits` → `BAKED_EDITS`, `data.extra` → `ADDED_POSTS`,
`data.deleted` → `RETIRED_POSTS`, `data.checks` → `BLANK.checks`. Never overwrite the
committed source with an older export — check `savedAt` first.

## Content rules (these matter to the client)

- **Never reword captions, hashtags or donation links** unless explicitly asked. They
  are client-approved copy. Copy them verbatim, including line breaks.
- Donation links point at `directory.rawcs.com.au/ProjectDisplayBB.aspx?<project-id>`;
  keep the project id exactly as given.
- Australian English throughout. Keep the `Donations of $2 or more are tax deductible
  in Australia.` line intact where it appears.
- Video posts hold a Google Drive share URL in `frames[0].videoLink`. Drive links must
  be set to "anyone with the link" for external playback — flag it, don't rewrite it.
- Visual changes must use the RAWCS design-system tokens in `source/_ds/`. No new
  colours, no new fonts.

## Deployment

Vercel project `rawcs-contenthub`, team BB-Marketing, production branch `main`,
static — no build command, no output directory. Push to `main` to deploy.
`vercel.json` in the repo root pins that: `{"framework": null, "buildCommand": null}`.

## First push

This repo starts empty. The initial commit should be exactly the contents of this
bundle at the repo root (`index.html`, `vercel.json`, `README.md`, `CLAUDE.md`,
`source/`). `index.html` is ~9 MB because artwork is inlined — that is expected and
intentional; do not split it or move artwork to external files without being asked.
