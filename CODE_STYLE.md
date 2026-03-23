# Code Style & Conventions

## TypeScript

### Strict Typing
```typescript
// ✅ Good
const user: User | null = null;
const items: string[] = ['a', 'b'];
interface UserProps { name: string; }

// ❌ Avoid
const user: any = null;
const items: Array<any> = [];
```

### Interfaces Over Types
```typescript
// ✅ Prefer interfaces for object shapes
interface User {
  name: string;
  role: string;
}

// ❌ Avoid for major types
type User = {
  name: string;
  role: string;
};
```

### Optional Chaining
```typescript
// ✅ Good
const email = user?.contact?.email;
const handleClick = func?.();
const first = items?.[0];

// ❌ Avoid
const email = user && user.contact && user.contact.email;
```

## React Components

### Functional Components with TypeScript
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
```

### Props Interface Naming
```typescript
// ✅ Good - [ComponentName]Props
interface ProfileCardProps {
  user?: User;
}

// ❌ Avoid
interface IProfileCard {}
interface Profile_Card_Props {}
```

### Use React.FC for Type Safety
```typescript
// ✅ Good
const Component: React.FC<ComponentProps> = ({ prop }) => {
  return <div>{prop}</div>;
};

// ⚠️ Avoid (less type-safe)
const Component = ({ prop }: ComponentProps) => {
  return <div>{prop}</div>;
};
```

## Hooks

### useEffect Dependencies
```typescript
// ✅ Good
useEffect(() => {
  loadData();
}, []); // Runs once on mount

useEffect(() => {
  loadData();
}, [userId]); // Runs when userId changes

// ❌ Avoid
useEffect(() => {
  loadData();
}); // Runs on every render

useEffect(() => {
  loadData();
}, [user?.id?.toString()]); // Unstable dependency
```

### State Updates
```typescript
// ✅ Good - Simple state
const [count, setCount] = useState<number>(0);

// ✅ Good - Complex state with type
interface UserState {
  data: User | null;
  loading: boolean;
  error: string | null;
}
const [state, setState] = useState<UserState>({
  data: null,
  loading: false,
  error: null,
});

// ❌ Avoid - Untyped
const [state, setState] = useState({});
```

## Services

### Async Functions
```typescript
// ✅ Good
export const fetchUser = async (): Promise<User> => {
  try {
    const response = await fetch('/api/user');
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

// ❌ Avoid - No error handling
export const fetchUser = async () => {
  return (await fetch('/api/user')).json();
};
```

## File Organization

### Import Order
```typescript
// 1. React/Libraries
import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';

// 2. Project imports (types)
import { User } from '../types/user';

// 3. Project imports (services)
import { fetchUser } from '../services/userService';

// 4. Project imports (components)
import Button from './Button';

// 5. Project imports (utils)
import { formatDate } from '../utils/helpers';

// 6. Styles
import './ProfileCard.css';
```

### File Naming
```
✅ Good:
- components/ProfileCard.tsx
- services/userService.ts
- types/user.ts
- hooks/useAsync.ts
- utils/helpers.ts

❌ Avoid:
- components/profile-card.tsx
- services/UserService.ts
- types/User.ts
- hooks/use-async.ts
```

## Error Handling

### Try-Catch Pattern
```typescript
// ✅ Good
try {
  const data = await fetchUser();
  setData(data);
} catch (error) {
  const message = error instanceof Error ? error.message : 'Unknown error';
  setError(message);
}

// ❌ Avoid
try {
  const data = await fetchUser();
  setData(data);
} catch (error) {
  console.log(error); // Vague
  setError(String(error));
}
```

## Tailwind CSS Classes

### Organization
```typescript
// ✅ Good - Organized by purpose
className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500"

// Group related classes
className={`
  flex items-center gap-3
  px-4 py-2 rounded-lg
  bg-blue-100 text-blue-700
  hover:bg-blue-200 transition-colors
`}

// ❌ Avoid - Random order
className="p-6 bg-white shadow-lg rounded-lg border-blue-500 border-l-4"
```

### Responsive Classes
```typescript
// ✅ Good
className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
className="text-sm md:text-base lg:text-lg"
className="hidden md:block"

// ❌ Avoid
className="flex flex-col"
className="w-full md:w-1/2"
```

## Comments

### Comment Style
```typescript
// ✅ Good - Explain why, not what
// Delay simulates API response time
const loadUserData = async (): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
};

// ✅ Good - JSDoc for public APIs
/**
 * Fetches user profile from API
 * @returns Promise resolving to User object
 * @throws Error if fetch fails
 */
export const fetchUserProfile = async (): Promise<User> => {
  // ...
};

// ❌ Avoid - Obvious comments
// Set user to null
setUser(null);

// ❌ Avoid - Outdated comments
// TODO: This cannot be done (but it can be now!)
```

## Constants

### Const Naming
```typescript
// ✅ Good
const MAX_RETRIES = 3;
const API_BASE_URL = 'https://api.example.com';
const SECTIONS = {
  PROFILE: 'profile',
  SKILLS: 'skills',
} as const;

// ❌ Avoid
const maxRetries = 3;
const api_base_url = 'https://api.example.com';
```

## Performance

### Memoization
```typescript
// ✅ Good - Prevent unnecessary re-renders
const ExpensiveComponent = React.memo(({ data }: Props) => {
  return <div>{data}</div>;
});

// ✅ Good - useCallback for stable references
const handleClick = useCallback(() => {
  console.log('clicked');
}, []);
```

### Avoid

```typescript
// ❌ Avoid - Objects/arrays as dependencies
useEffect(() => {
  // ...
}, [{ id: 1 }]); // Creates new object every render

// ❌ Avoid - Inline objects as props
<Component style={{ color: 'red' }} /> 
// Create style object outside component

// ❌ Avoid - Arrow functions in JSX
<button onClick={() => handleClick()}>Click</button>
// Use useCallback or direct reference
```

## Testing

### Component Testing
```typescript
// ✅ Good - Test behavior
test('displays user profile', () => {
  render(<ProfileCard user={mockUser} />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
});

// ❌ Avoid - Testing implementation
test('ProfileCard renders', () => {
  const { container } = render(<ProfileCard user={mockUser} />);
  expect(container.querySelector('.profile-card')).toBeTruthy();
});
```

## Linting & Formatting

The project uses:
- TypeScript strict mode
- ESLint (if configured)
- Prettier (recommended)

Configure `.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```
