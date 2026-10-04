# Builds

A small site of my builds. Add a build in Pages CMS (photos, a few fields, tags), save, and GitHub publishes it about a minute later.

- **Site generator:** Eleventy (`src/`), published to GitHub Pages by `.github/workflows/deploy.yml`.
- **Editor:** Pages CMS, configured by `.pages.yml`.
- **Photos:** drop full-size phone photos straight in. Every image is resized and converted to WebP at build time.
- **Videos:** short MP4 clips, each under 100 MB (GitHub's file limit). Put longer videos on YouTube and add them as a link.

## One-time setup

1. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push this folder (the first commit is already made):

   ```bash
   git push -u origin main
   ```

3. Open the **Actions** tab and wait for "Publish site" to go green (about a minute; re-run it if it ran before step 1). The site appears at `https://ajwl27.github.io/builds/`.
4. Go to [app.pagescms.org](https://app.pagescms.org), sign in with GitHub, install the Pages CMS app on this repository, and open it.

## Posting a build

1. In Pages CMS, open **Builds** and pick an entry or click **Add**.
2. Fill in the title and one-liner, drop in a cover photo and any extra photos or clips, add tags and a few specs.
3. Untick **Draft** and save. Each save is a commit under your account, so it shows up on your GitHub contribution graph.

**Site settings** (also in Pages CMS) holds your name, tagline, about text and links.

## Previewing locally (optional)

```bash
npm install
npm run preview   # shows drafts too, at http://localhost:8080
```
