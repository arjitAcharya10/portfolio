# Project Architecture Overview

## Folder Structure

```
d:/my-project/
├── src/
│   ├── components/
│   │   ├── Button.tsx              # Reusable button with variants
│   │   ├── ContactSection.tsx      # Contact information display
│   │   ├── Container.tsx           # Layout wrapper component
│   │   ├── HighlightsSection.tsx  # Professional highlights
│   │   ├── ProfileCard.tsx         # Main profile display
│   │   ├── ProjectsSection.tsx     # Projects showcase
│   │   ├── Sidebar.tsx             # Navigation sidebar
│   │   └── SkillsSection.tsx       # Skills badges display
│   │
│   ├── pages/
│   │   └── ProfilePage.tsx         # Main dashboard page
│   │
│   ├── services/
│   │   └── userService.ts          # Mock API service with async/await
│   │
│   ├── types/
│   │   └── user.ts                 # TypeScript interfaces
│   │
│   ├── hooks/
│   │   └── useAsync.ts             # Custom hook for async operations
│   │
│   ├── utils/
│   │   └── helpers.ts              # Utility functions
│   │
│   ├── constants/
│   │   └── index.ts                # Application constants
│   │
│   ├── App.tsx                     # Root component
│   ├── main.tsx                    # Entry point
│   ├── index.css                   # Global styles & Tailwind
│   └── vite-env.d.ts              # Vite type definitions
│
├── public/                         # Static assets
├── index.html                      # HTML entry point
├── package.json                    # Dependencies & scripts
├── tsconfig.json                   # TypeScript configuration (strict)
├── tsconfig.node.json              # TypeScript for build tools
├── vite.config.ts                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── .gitignore                      # Git ignore rules
├── README.md                       # Project documentation
└── SETUP.md                        # Setup instructions
```

## Component Hierarchy

```
App
└── ProfilePage
    ├── Sidebar (with navigation)
    ├── ProfileCard (user avatar, name, role, location)
    ├── SkillsSection (technical skills badges)
    ├── HighlightsSection (professional achievements)
    ├── ProjectsSection (portfolio projects)
    └── ContactSection (contact information)
```

## Data Flow

```
ProfilePage (Component)
  └── useEffect: triggered on mount
    └── fetchUserProfile() (Service)
      └── Mock data with 1s delay
        └── setUser() (State update)
          └── Re-render Components
            └── Display data or loading/error states
```

## Key Features

### State Management
- **useState**: User data, loading, error, active section
- **useEffect**: Fetch data on component mount
- **useAsync**: Custom hook for async operations (included)

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS transformations & autoprefixer
- **Custom components**: card, btn-primary, btn-secondary layers

### Type Safety
- **Strict TypeScript**: No implicit any, strict null checks
- **Interfaces**: User, Project, Contact, ApiResponse
- **Proper typing**: React.FC, React.ReactNode, etc.

### Error Handling
- Try-catch in service
- Error state in component
- User-friendly error display

### Responsive Design
- Mobile-first approach
- Tailwind responsive utilities (md:, lg:, etc.)
- Sidebar hamburger menu for mobile
- Flexible grid layouts

## Available User Data

```typescript
{
  name: "Arjit Acharya",
  role: "Backend Java Developer",
  experience: "1+ year",
  location: "Kathmandu, Nepal",
  skills: ["Java", "Spring Boot", "JWT", "Angular", "MySQL", "Docker", "Redis", "Swagger"],
  highlights: [
    "Built scalable backend services",
    "Implemented JWT authentication",
    "Developed REST APIs",
    "Integrated Redis caching",
    "Dockerized applications"
  ],
  projects: [
    { title: "Futsal Booking System", description: "..." },
    { title: "Student Management System", description: "..." }
  ],
  contact: {
    email: "rajuacharya260@email.com",
    phone: "9821974266",
    linkedin: "linkedin.com/in/arjitacharya"
  }
}
```

## Best Practices Implemented

✅ **Functional Components Only** - All React components are functional
✅ **TypeScript Strict Mode** - No implicit any, full type safety
✅ **Proper Error Handling** - Try-catch with loading/error states
✅ **Async/Await Pattern** - Modern async operations
✅ **Reusable Components** - Composable and single responsibility
✅ **Optional Chaining** - Safe property access
✅ **Separation of Concerns** - Services, types, utils, components
✅ **Clean Code** - Well-organized and documented
✅ **Performance** - Lazy loading potential, optimized re-renders
✅ **Responsive Design** - Mobile-first, breakpoint support

## Performance Optimizations

- React.memo for expensive components
- Code splitting via Vite
- CSS tree-shaking with Tailwind
- Image optimization ready
- Minimal dependencies
- Fast refresh with HMR

## Security Considerations

- No hardcoded credentials
- Input validation utilities included
- Optional chaining prevents null reference errors
- Proper error handling without exposing internals
- Email validation helper
