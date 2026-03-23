# Quick Start Guide

## Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher (or yarn/pnpm)

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

Output files will be generated in the `dist/` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page-level components
├── services/        # API services and data fetching
├── types/           # TypeScript interfaces
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── constants/       # Application constants
├── App.tsx          # Root component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Key Components

- **ProfileCard**: Displays user profile information
- **SkillsSection**: Technical skills showcase
- **HighlightsSection**: Professional achievements
- **ProjectsSection**: Portfolio projects
- **ContactSection**: Contact information
- **Sidebar**: Navigation sidebar
- **Button**: Reusable button component
- **Container**: Layout wrapper component

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run type-check` | Run TypeScript type checking |

## Environment Setup

Create a `.env.local` file in the root directory if you need environment variables:

```env
VITE_API_BASE_URL=http://localhost:3001
```

Access in code using:

```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

## Development Tips

### Hot Module Replacement (HMR)

Changes to files are reflected instantly during development without full page reload.

### Type Safety

TypeScript strict mode is enabled. This ensures:
- No implicit `any` types
- Null/undefined checking
- Strict function types
- Type-safe optional chaining

### Component Development

Create functional components with TypeScript:

```typescript
interface ComponentProps {
  title: string;
  onClick?: () => void;
}

const Component: React.FC<ComponentProps> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};
```

## Debugging

### Browser DevTools

1. Open DevTools (F12)
2. Go to Sources tab
3. Set breakpoints in source maps
4. VS Code debugging also works with Vite

### TypeScript Errors

Run type checking:

```bash
npm run type-check
```

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### Traditional Hosting

1. Build the project: `npm run build`
2. Upload `dist/` folder to your server
3. Configure server to serve `index.html` for all routes

## Troubleshooting

### Port 3000 Already in Use

Vite will automatically use the next available port, or specify a custom port:

```bash
npm run dev -- --port 3001
```

### Module Not Found Errors

Clear node_modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Ensure TypeScript is up to date:

```bash
npm install -D typescript@latest
```

## Performance Optimization

- Code splitting is automatic with Vite
- CSS is tree-shaken by Tailwind
- Images should be optimized with tools like ImageOptim
- Use React.memo for expensive components

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Android 6+

## Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons)
