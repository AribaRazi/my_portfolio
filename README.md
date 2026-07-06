# Personal Portfolio

A premium, production-ready personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion — designed for CS students applying to top product companies.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom design tokens, dark/light theme)
- Framer Motion (page-load, scroll, and hover animations)
- next-themes (theme persistence)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Almost everything — your name, bio, skills, projects, achievements, experience, education, certifications, and social links — lives in a single file:

```
app/constants/data.ts
```

Edit that file with your real details; the components read from it automatically.

## Adding your resume

Drop your resume PDF into `public/resume.pdf` (replace `public/RESUME_PLACEHOLDER.txt`). The "Download Resume" buttons already point to `/resume.pdf`.

## Wiring up the contact form

The contact form in `app/components/sections/contact.tsx` currently only updates UI state on submit. Connect it to an email service of your choice (e.g. Resend, Formspree, EmailJS) by replacing the `handleSubmit` function with an API call.

## Folder structure

```
app/
  components/
    layout/      navbar, footer, theme toggle
    sections/    one component per page section
    ui/          shared primitives (button, cards, timeline, reveal)
    theme-provider.tsx
  constants/      all editable content (data.ts)
  lib/            utilities
  globals.css     design tokens (light + dark theme)
  layout.tsx      root layout, fonts, metadata
  page.tsx        assembles all sections
hooks/            useActiveSection (scroll-spy)
public/           static assets, resume.pdf
```

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com):

```bash
npm run build
```

Push to GitHub and import the repo in Vercel — no extra configuration needed.
