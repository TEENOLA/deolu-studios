# deolustudio

A premium, conversion-focused marketing site for **deolustudio**, a custom web design & development studio. Built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     Reusable UI pieces (Navbar, Hero, Services, ProjectCard, etc.)
  data/           Content lives here — services.ts, projects.ts, testimonials.ts,
                  whyUs.ts, process.ts, navigation.ts
  pages/          Home.tsx assembles all sections in order
  hooks/          useScrollReveal.ts — scroll-triggered fade-in animation
  utils/          scrollTo.ts — smooth-scroll helper
  assets/         logo.png and other static assets
```

## Adding a new portfolio project

Open `src/data/projects.ts` and append a new object to the `projects` array:

```ts
{
  id: 'your-project-slug',
  title: 'Client Name — Project',
  category: 'Business', // 'Business' | 'Landing Pages' | 'E-commerce' | 'Portfolio' | 'Web Apps'
  thumbnail: 'https://your-image-url.com/image.jpg',
  description: 'A short summary of what you built and why.',
  technologies: ['React', 'TypeScript'],
  liveUrl: 'https://client-site.com',
  githubUrl: 'https://github.com/you/repo', // optional
  featured: true,
}
```

No component code needs to change — the grid, filters, and cards all read from this file automatically.

## Adding a new service, testimonial, or nav link

Same pattern: edit the matching file in `src/data/` and the UI updates automatically.

- Services → `src/data/services.ts`
- Testimonials → `src/data/testimonials.ts`
- Why Us highlights → `src/data/whyUs.ts`
- Process steps → `src/data/process.ts`
- Navigation & social links → `src/data/navigation.ts`

## Wiring up the contact form

`src/components/Contact.tsx` currently simulates a submission. Replace the `handleSubmit` function with a call to your form backend of choice (Formspree, Resend, a serverless function, etc.) and keep the existing success/loading states.

## Design tokens

Colors, fonts, and animation keyframes are defined in `tailwind.config.js` and `src/index.css`, derived from the deolustudio logo (blue `#5B6EF5` → violet `#8B5CF6` gradient on a near-black background).

# deolu-studios

# deolu-studios
