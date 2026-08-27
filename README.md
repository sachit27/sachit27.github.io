# Academic & Research Personal Website

Personal academic and research website designed for **Dr. Sachit Mahajan** (ETH Zurich), optimized for **GitHub Pages** (`sachit27.github.io`).

---

## ✨ Features

- **Academic Aesthetics**: Clean serif headers, crisp modern typography, high contrast, and responsive layout.
- **Dark / Light Mode**: Seamless theme toggler with auto-detection of system preferences and `localStorage` persistence.
- **Interactive Publications**:
  - Filter by category tag (e.g., *Selected*, *AI Ethics*, *Citizen Science*, *Computational Social Science*).
  - Real-time search by title, author, year, or venue.
  - Interactive **Abstract drawer** with smooth reveal.
  - Interactive **BibTeX drawer** with one-click copy-to-clipboard button.
  - Links to PDFs, arXiv preprints, DOIs, and Code repositories.
  - Automatic author highlighting for your name in author lists.
- **Modular Data Architecture**: Easily edit your publications, news, profile, and projects via clean JSON files in `data/`.
- **Zero Build Step Required**: Works natively with standard HTML/CSS/JS or GitHub Pages.

---

## 🚀 Quick Local Preview

You can preview the website locally using Python's built-in web server or any static server:

```bash
# Inside the academic-website folder:
python3 -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🌐 Publishing to GitHub Pages (`sachit27.github.io`)

Follow these simple steps to make your site live:

### Step 1: Create a GitHub Repository
1. Go to [GitHub New Repository](https://github.com/new).
2. Set the repository name to: **`sachit27.github.io`** (Must match your username).
3. Set the repository to **Public**.

### Step 2: Push your code
In your terminal, navigate to this folder and run:

```bash
cd /Users/smahajan/.gemini/antigravity/scratch/academic-website
git init
git add .
git commit -m "Initial commit of academic personal website"
git branch -M main
git remote add origin https://github.com/sachit27/sachit27.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages (if not automatically active)
1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**:
   - Select **GitHub Actions** (recommended, workflow is already included in `.github/workflows/deploy.yml`), OR
   - Select **Deploy from a branch** -> `main` / `/ (root)`.
3. Within 1–2 minutes, your website will be live at:
   👉 **`https://sachit27.github.io`** 🎉

---

## 📝 Updating Your Content

All website content is organized cleanly in the `data/` directory:

| File | Purpose |
|---|---|
| [`data/profile.json`](./data/profile.json) | Update your bio, title, affiliation, social links, appointments, education, and teaching. |
| [`data/publications.json`](./data/publications.json) | Add/modify papers, abstracts, BibTeX entries, DOIs, and code links. |
| [`data/news.json`](./data/news.json) | Add new announcements, talks, awards, and paper acceptances. |
| [`data/projects.json`](./data/projects.json) | Showcase software packages, models, and open-source tools. |

---

## 🎨 Customizing Styles & Colors

- Open [`assets/css/style.css`](./assets/css/style.css) to change color schemes, accent colors, or typography variables in `:root` and `[data-theme="dark"]`.
- To customize the profile picture, update the avatar URL in [`data/profile.json`](./data/profile.json) and [`index.html`](./index.html).
