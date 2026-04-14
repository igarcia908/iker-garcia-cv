# Project Context

This repository contains the personal CV website of **Iker Garcia Ribote**, an AI Research Engineer and Senior Data Scientist.

The goal of this repository is to create and maintain a clean, professional, and fully self-contained personal website that presents the professional profile of Iker Garcia and allows visitors to download the CV as a PDF.

The website should present a **strong and clear professional narrative**, highlighting leadership, applied AI expertise, and the ability to translate research into production systems.

All content must remain **fully local to the repository**. 
Do not use external URLs for images, scripts, or assets.

---

# Author

**Iker Garcia Ribote**

Senior AI / Data Science Lead 
PhD in Computer Science

LinkedIn:

https://www.linkedin.com/in/iker-garcia-ribote/

---

# Professional Positioning

When generating or improving the content of the website, highlight the following key aspects of Iker's professional profile:

### 1. Technical Leadership

Iker currently acts as the **main responsible for Data Science in the Bilbao team**, coordinating and guiding AI research and development initiatives.

The website should clearly reflect that he operates in a **senior technical leadership role**, not just as an individual contributor.

### 2. Research-to-Product Bridge

A key aspect of Iker's role is acting as a **bridge between AI research and production software systems**.

Specifically:

- Coordinating work between the **Data Science team in Bilbao** and the **Software Development team in the United States**
- Helping transform **research prototypes into production-ready systems**
- Ensuring AI solutions can be integrated into real-world software products

This research-to-production capability is a **core differentiator** and should be emphasized in the professional narrative.

### 3. Applied Industrial AI

Emphasize experience building **AI systems applied to real industrial problems**, particularly in:

- machine learning
- optimization
- AI systems engineering
- production ML pipelines
- AI integration into software products

### 4. Modern AI Tooling and AI Agents

Iker actively works with modern AI development tools and agent-based workflows.

He has experience using AI-assisted development environments and coding agents such as Claude Code to accelerate software development, automate tasks, and prototype AI-driven applications.

This includes:

- Building projects using AI coding agents
- Designing workflows where AI systems assist software development
- Rapid prototyping of AI-powered applications
- Exploring emerging paradigms such as AI agents and LLM-powered systems

This experience demonstrates an ability to quickly adopt and leverage **state-of-the-art AI tooling and development workflows**.

---

# Content Sources

Content should be based on:

1. The CV PDF located in `/files`
2. The LinkedIn profile

The website text should **not copy the CV verbatim**.

Instead, the content should:

- improve clarity
- refine the wording
- emphasize leadership and impact
- present a coherent professional story

---

# Development Rules

When generating or modifying the website:

1. Use **only local files from this repository**.
2. Do not reference external images, fonts, scripts or CDNs.
3. Keep the website **static and lightweight**.
4. Prefer **plain HTML, CSS and minimal JavaScript**.
5. Ensure compatibility with **GitHub Pages**.
6. All content must be written in **English**.
7. Code should be clean, readable and well structured.

---

# Website Goals

The website must:

- Present a professional CV-style profile
- Clearly communicate technical expertise and leadership
- Display a profile image
- Include the following sections:

    - About
    - Professional Experience
    - Education
    - Skills
    - Contact

- Include a **Download CV (PDF)** button.

---

# File Structure

index.html
    The main website file (root of the repository, used by GitHub Pages)

images/
    profile image and CV preview

files/
    CV PDF document

src/
    Legacy/unused HTML, CSS and JavaScript files — do NOT edit these

---

# Important Note on File Location

The active website is **`/index.html`** at the root of the repository.
The `src/` directory contains old files that are no longer in use.
Always edit the root `index.html`, never `src/index.html`.

---

# Important

All resources must be loaded from within the repository.

The website must **never depend on external URLs or third-party assets**.
