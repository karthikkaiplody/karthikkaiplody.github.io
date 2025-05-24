# Modern Portfolio & Blog - Karthik Kaiplody

## Overview

This project is a personal portfolio website for Karthik Kaiplody, showcasing skills, experience, projects, and a personal blog. It features a modern, responsive design with light/dark mode themes and a dynamically rendered Markdown-based blog.

## Features

*   **Responsive Design:** Adapts to various devices including desktops, tablets, and mobile phones.
*   **Light & Dark Mode Themes:** User-selectable themes with a toggle, and preference saved in `localStorage`.
*   **Portfolio Sections:**
    *   About
    *   Skills
    *   Experience
    *   Education
    *   Certificates
    *   Projects
    *   Awards
*   **Markdown-Powered Blog:**
    *   Blog posts are written in Markdown.
    *   Posts are dynamically fetched and rendered on the front-end using `marked.js`.

## How to Add a New Blog Post

1.  **Create a Markdown File:**
    *   Create a new Markdown file (e.g., `my-new-post.md`) inside the `/posts/` directory.

2.  **Write Content:**
    *   The first line of your Markdown file should be an H1 heading (e.g., `# My Awesome New Post`). This heading will be automatically used as the post title on the blog post page and in the browser tab title.
    *   Write your blog content using standard Markdown syntax. You can include headings, paragraphs, lists, code blocks, images, etc.

3.  **Link from Blog Listing (`blog.html`):**
    *   Open `blog.html`.
    *   Find the `div` with `id="blog-posts-container"`.
    *   Copy an existing `<div class="card blog-post-preview">...</div>` block.
    *   Update the following parts in your new block:
        *   **Title Link:** Change `href` in `<h3 class="card-title"><a href="...">New Post Title</a></h3>` to `post.html?md=my-new-post` (replace `my-new-post` with your actual filename without the `.md` extension). Update the "New Post Title" text.
        *   **Date:** Update the `<time datetime="...">Month DD, YYYY</time>` and the text.
        *   **Summary:** Update the summary paragraph (`<p class="card-text">...`).
        *   **Read More Link:** Change `href` in `<a href="..." class="button">Read More</a>` to `post.html?md=my-new-post`.

## Technologies Used

*   **HTML5:** For the basic structure of the website.
*   **CSS3:** For styling, utilizing CSS Variables for theming (light/dark modes) and modern layout techniques like Flexbox and Grid.
*   **JavaScript (Vanilla):** For interactivity, including the mobile menu, theme switcher, and dynamic loading of blog posts.
*   **`marked.js`:** A JavaScript library used for parsing Markdown and rendering it as HTML for blog posts.
*   **Font Awesome:** For icons used throughout the site.

## Setup/Running Locally

Simply open `index.html` in your web browser to view the portfolio.

For the blog functionality (fetching and rendering `.md` files), if you encounter issues with `fetch()` due to browser security restrictions when opening `post.html` directly via `file:///` URLs, running the site via a local HTTP server is recommended.

Common ways to start a simple local HTTP server:

*   **Using Python:**
    If you have Python installed, navigate to the project's root directory in your terminal and run:
    *   Python 3: `python -m http.server`
    *   Python 2: `python -m SimpleHTTPServer`
    Then open `http://localhost:8000` (or the port shown) in your browser.

*   **Using VS Code Live Server:**
    If you use Visual Studio Code, you can install the "Live Server" extension for an easy way to serve the files.

*   **Using Node.js `http-server`:**
    If you have Node.js installed, you can install `http-server` globally:
    `npm install -g http-server`
    Then, navigate to the project root and run:
    `http-server`
    Then open the URL provided (usually `http://localhost:8080`).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
(Note: Assuming a LICENSE file exists. If not, one should be added, typically an MIT license for personal portfolios.)
