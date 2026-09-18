# First push — RAWCS Content Hub

The GitHub repo `bb-marketing2026/rawcs-contenthub` exists but is empty, and the Vercel
project `rawcs-contenthub` (team BB-Marketing) is already linked to it with `main` as the
production branch. Pushing is all that's left.

Unzip this bundle, then from its folder:

```bash
git init
git add .
git commit -m "Add RAWCS content hub (Aug–Oct 2026) with Nepal Appeal videos 1–6"
git branch -M main
git remote add origin https://github.com/bb-marketing2026/rawcs-contenthub.git
git push -u origin main
```

Vercel picks that up and deploys automatically. Check the deployment URL in the Vercel
dashboard under the `rawcs-contenthub` project.

## If you're handing this to Claude Code

Point it at the unzipped folder and give it this prompt:

> This folder is the initial content of the empty GitHub repo
> `bb-marketing2026/rawcs-contenthub`. Read CLAUDE.md first — it explains that this is a
> no-build static single-page app and must stay that way. Initialise the repo, commit
> everything as-is, and push to `main` (Vercel is already linked and deploys on push).
> Do not restructure the project, add dependencies, or edit `index.html` by hand.

`CLAUDE.md` in this bundle is written for that agent: it covers the source-of-truth rule
(`source/August 2026 Content Hub.dc.html`, never `index.html`), the post data model, how
JSON exports are baked back into the source, and the content rules — captions, hashtags
and donation links are client-approved and must not be reworded.
