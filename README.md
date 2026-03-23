# Developer Profile Dashboard

A modern, scalable React application built with TypeScript for showcasing professional profiles. Features a clean dashboard layout, responsive design, and reusable components.

## 🚀 Features

- **Feature-based folder structure** - Organized by functionality
- **TypeScript with strict typing** - Enhanced type safety
- **Functional components with hooks** - Modern React patterns
- **Responsive design** - Mobile, tablet, and desktop support
- **Tailwind CSS** - Utility-first styling framework
- **React Icons** - Professional icon library
- **State management** - useState and useEffect hooks
- **Mock API service** - Simulated data fetching with async/await
- **Loading & error states** - Complete UX Flow
- **Sidebar navigation** - Multi-section dashboard

## 📁 Project Structure

```
src/
├── types/              # TypeScript interfaces
│   └── user.ts        # User and API response types
├── services/          # API services and utilities
│   └── userService.ts # Mock user data fetching
├── components/        # Reusable UI components
│   ├── ProfileCard.tsx
│   ├── SkillsSection.tsx
│   ├── HighlightsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   └── Sidebar.tsx
├── pages/            # Page components
│   └── ProfilePage.tsx
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 🛠️ Technology Stack

- **React 18.3** - UI library with hooks
- **TypeScript 5.3** - Static type checking
- **Vite 5.0** - Fast build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS
- **React Icons 4.12** - Icon library
- **PostCSS** - CSS transformations
- **Autoprefixer** - Browser compatibility

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

## 🎯 Components Overview

### ProfileCard
Displays user profile with avatar, name, role, experience, and location.

### SkillsSection
Shows technical skills as interactive badges.

### HighlightsSection
Lists professional highlights with visual indicators.

### ProjectsSection
Showcases projects with title and description.

### ContactSection
Displays contact information with interactive links.

### Sidebar
Navigation component for switching between sections.

### ProfilePage
Main page that orchestrates all components with loading/error handling.

## 🎨 UI Features

- Gradient backgrounds
- Smooth transitions and hover effects
- Loading skeleton animation
- Error state handling
- Mobile-responsive hamburger menu
- Icon integration throughout
- Color-coded sections (blue, amber, green, purple)

## 📝 Data Model

```typescript
interface User {
  name: string;
  role: string;
  experience: string;
  location: string;
  skills: string[];
  highlights: string[];
  projects: Project[];
  contact: Contact;
}

interface Project {
  title: string;
  description: string;
}

interface Contact {
  email: string;
  phone: string;
  linkedin: string;
}
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration (strict mode)
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS plugins
- `index.html` - HTML entry point

## 🚀 Deployment

```bash
# Build the application
npm run build

# Outputs optimized files to 'dist' directory
# Deploy the dist folder to your hosting service
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## ✨ Code Quality

- Strict TypeScript configuration (noImplicitAny, strictNullChecks)
- No `any` types used
- Optional chaining operator
- Proper error handling
- Reusable and composable components
- Component prop interfaces with TypeScript

## 📄 License

MIT

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
