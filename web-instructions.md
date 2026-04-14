# Website Implementation Instructions

This document describes how the CV website should be implemented.

## Goal

Create a simple personal website that displays the CV of Iker Garcia and allows downloading the CV as a PDF.

The site must be:

- lightweight
- static
- fully local
- compatible with GitHub Pages

## Technologies

Use only:

- HTML
- CSS
- minimal JavaScript

Do not introduce frameworks (React, Vue, etc.).

## Layout

Single page layout.

Sections:

1. Header
2. About
3. Experience
4. Education
5. Skills
6. Contact
7. Download CV

## Header

Must include:

- name
- professional title
- profile picture (from /images)

Example title:

Iker Garcia 
Senior AI Engineer | Machine Learning | AI Systems

## CV Download

Add a button:

Download CV (PDF)

The button must link to:

/files/iker-garcia-cv.pdf


## CV Preview

Extract the first page image from the CV and place it in:

/images/cv-preview.png


Display it inside the page.

## Design Requirements

The design must be:

- minimal
- professional
- modern
- readable

Suggested style:

- centered content
- neutral colors
- clean typography
- responsive layout

## Assets

All assets must come from this repository:

- images from `/images`
- documents from `/files`

External CDNs are not allowed.

## Mobile Compatibility

The page must work well on:

- desktop
- tablet
- mobile

## Performance

The website should load instantly and contain minimal dependencies.

## Optional Enhancements

Allowed but optional:

- smooth scrolling
- section navigation
- light animations





