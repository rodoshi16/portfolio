# Portfolio Website

An impressive, high-end portfolio website showcasing achievements, projects, and experience.

## Features

- **Dark, Sophisticated Design** - Modern black theme with neon accents
- **Smooth Scrolling Sections** - Seamless navigation through all portfolio sections
- **Interactive Mini Me** - Chatbot component for user interaction
- **Responsive Design** - Works beautifully on all devices
- **Animations** - Smooth, professional animations using Framer Motion

## Sections

1. **Highlights** - Key achievements at a glance
2. **Work Experience** - Detailed work projects with deployed solutions
3. **Products Scaled** - Production systems and impact
4. **Personal Projects** - Full-stack projects with GitHub links
5. **Hackathon Projects** - Winning hackathon entries
6. **Open Source** - Contributions to major projects
7. **Scholarships** - Academic achievements and awards
8. **Leadership** - Leadership roles and impact
9. **Competitive Programming** - Coding competition achievements
10. **Case Competitions** - Business case competition wins
11. **Mini Me** - Interactive chatbot component

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Update Personal Information

Edit the data in each component file:
- `src/components/Highlights.tsx` - Update highlights
- `src/components/WorkExperience.tsx` - Update work experience
- `src/components/PersonalProjects.tsx` - Update projects
- And other component files as needed

### Styling

Main color variables are defined in `src/index.css`:
- `--bg-primary`: Main background color
- `--accent-primary`: Primary accent color (green)
- `--accent-secondary`: Secondary accent color (cyan)
- `--text-primary`: Primary text color

### Mini Me Avatar

To customize the Mini Me avatar appearance, edit:
- `src/components/MiniMe.tsx` - Avatar initials and styling
- `src/components/MiniMe.css` - Avatar visual design

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Deployment

The site can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## License

MIT

