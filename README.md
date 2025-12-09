# Botaniq

AI-powered boat discovery and marketplace.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with design tokens
- **Architecture**: Design-system-first, token-based

## 📁 Project Structure

```
botaniq/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout with SEO
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles entry
│   ├── (marketing)/          # Marketing pages group
│   └── (app)/                # App pages group
├── design-system/            # Design system foundation
│   ├── tokens/               # Design tokens
│   │   ├── colors.ts         # Color palette
│   │   ├── typography.ts     # Font styles
│   │   ├── spacing.ts        # Spacing scale
│   │   ├── radius.ts         # Border radius
│   │   ├── shadows.ts        # Box shadows
│   │   ├── z-index.ts        # Z-index scale
│   │   └── index.ts          # Token exports
│   ├── theme/                # Theme configuration
│   │   ├── css-variables.css # CSS custom properties
│   │   └── tailwind-theme.ts # Tailwind mappings
│   └── components/           # Primitive components
│       ├── layout/           # Layout primitives
│       │   ├── Container.tsx
│       │   ├── Stack.tsx
│       │   ├── Flex.tsx
│       │   └── Section.tsx
│       └── typography/       # Typography primitives
│           ├── Heading.tsx
│           └── Text.tsx
├── components/               # Application components
│   └── Logo.tsx              # Logo placeholder
├── lib/                      # Utilities
│   └── seo.ts                # SEO helpers
├── styles/                   # Global styles
│   └── globals.css           # Tailwind + tokens
└── types/                    # TypeScript types
    └── seo.ts                # SEO types
```

## 🎨 Design System

### Token-Based Architecture

The design system uses a three-layer architecture:

1. **Design Tokens** (`design-system/tokens/`) - Raw design values
2. **CSS Variables** (`design-system/theme/css-variables.css`) - Runtime theme values
3. **Tailwind Integration** (`styles/globals.css`) - Utility class mappings

### Color Palette

- **Brand Primary**: Teal-based palette for primary actions
- **Neutral**: Gray scale for text and backgrounds
- **Accent**: Blue, orange, coral for highlights
- **Feedback**: Success, warning, error, info states

### Typography

- **Sans**: DM Sans - Primary UI font
- **Mono**: JetBrains Mono - Code and technical data
- **Scale**: display, h1, h2, h3, h4, body, small, caption

### Layout Primitives

- **Container**: Constrains content width with responsive padding
- **Stack**: Vertical flex layout with configurable gap
- **Flex**: Flexible box layout component
- **Section**: Page section with padding and background variants

## 📱 Responsive Design

Mobile-first breakpoint strategy:

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Small devices |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small desktops |
| `xl` | 1280px | Large desktops |
| `2xl` | 1536px | Extra large screens |

### Guidelines

- Containers: Full width on mobile, constrained from `md`
- Typography: Headings scale up on `md` and above
- Layouts: Single column on mobile, multi-column from `md`

## 🔧 Development

### Prerequisites

- Node.js 18.17+
- npm 9+

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Lint code
npm run lint
```

### Path Aliases

```typescript
import { Container } from '@/design-system/components';
import { colors } from '@/design-system/tokens';
import { Logo } from '@/components/Logo';
import { generatePageMetadata } from '@/lib/seo';
```

## 🔍 SEO

Built-in SEO foundations:

- Global metadata with Open Graph and Twitter cards
- `generatePageMetadata()` helper for page-specific metadata
- JSON-LD structured data for organization and website
- Viewport and theme color configuration

### Usage

```typescript
// app/about/page.tsx
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'About Us',
  description: 'Learn about Botaniq...',
  path: '/about',
});
```

## 🎯 Sprint Status

### Sprint 1 ✅ Complete

- [x] Project initialization
- [x] Folder architecture
- [x] Design tokens system
- [x] CSS variables theme
- [x] Tailwind v4 integration
- [x] Layout primitives
- [x] Typography components
- [x] SEO foundations
- [x] Responsive structure

### Sprint 2 (Planned)

- [ ] Navigation component
- [ ] Form components
- [ ] Button component
- [ ] Card component
- [ ] Marketing pages

## 📝 TODO

- Configure `next-sitemap` for sitemap.xml and robots.txt
- Add dark mode toggle functionality
- Create additional typography variants
- Build form input components

## 📄 License

Private - All rights reserved.
