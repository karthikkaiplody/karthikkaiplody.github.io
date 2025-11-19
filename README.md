# Karthik Kaiplody - Portfolio

This is my personal portfolio website built with [Astro](https://astro.build). It features a clean, minimal design, a blog, and is deployed to GitHub Pages.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── consts.ts
└── package.json
```

## Customization

### Site Configuration
You can easily customize the site by editing `src/consts.ts`. This file contains:
- `SITE_TITLE`: The title of your website.
- `SITE_DESCRIPTION`: The description for SEO.
- `SOCIAL_LINKS`: Links to your GitHub, LinkedIn, and Email.
- `PERSONAL_INFO`: Your name, role, bio, and professional highlights.

### Adding Blog Posts
1. Create a new markdown file in `src/content/blog/`.
2. Add the required frontmatter:
   ```markdown
   ---
   title: 'Your Post Title'
   description: 'A brief description of your post.'
   pubDate: 'Jul 08 2022'
   heroImage: '/blog-placeholder-1.jpg'
   ---
   ```
3. Write your content in Markdown.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
following frontmatter:

```markdown
---
title: 'Post Title'
description: 'Short description'
heroImage: '/blog-placeholder.jpg' (optional)
---
```
