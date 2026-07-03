# Echo Shell

Phase 1 site: a hand-curated, platform-agnostic guide to drone, ambient, and electro-acoustic music. No backend, no build step — plain HTML/CSS, ready for GitHub Pages.

## Structure

```
index.html              Homepage — lists published crates
about.html               About / curator / contact info
crates/
  template-crate.html    Duplicate this for every new crate
css/style.css             All styling (design tokens at the top)
js/main.js                 Placeholder for future interactivity
```

## Publishing a new crate

1. Copy `crates/template-crate.html` to `crates/your-crate-slug.html`.
2. Replace every `[bracketed placeholder]` — title, description, tracks, links.
3. Add a `.crate-row` entry to the "Crates" section of `index.html` (a commented example is already there) linking to your new file, and update the `count` in the section heading.
4. Commit and push — GitHub Pages redeploys automatically.

## Deploying to GitHub Pages

1. Push this repo to GitHub (already done if you're reading this from the cloned repo).
2. In the repo settings, go to **Pages**.
3. Under **Source**, choose the `main` branch and `/ (root)` folder.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/` within a few minutes.
5. Once you're ready to point `echo-shell.net` at it, add a `CNAME` file to the repo root containing just the domain, and configure the DNS records your registrar gives you for GitHub Pages (an `A` record set, or a `CNAME` record if using a subdomain).

## Email

`contact@echo-shell.net` (referenced in `about.html` and the footer) forwards to a Gmail inbox via GoDaddy Email Forwarding.
