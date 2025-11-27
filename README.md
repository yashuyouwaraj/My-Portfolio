# Yashu's Portfolio

A modern, interactive portfolio website inspired by macOS design with smooth GSAP animations, light/dark theme support, and window management system.

## 🎯 Overview

This portfolio is built to showcase projects, skills, and achievements in an immersive desktop-like interface. The design mimics a macOS operating system with draggable windows, animations, and a responsive dock at the bottom. Each window is fully functional with minimize, maximize, and close capabilities.

## ✨ Features

### Core Features
- **Desktop-like Interface**: Fully functional window management system similar to macOS
- **Dark & Light Modes**: Theme toggle with persistent styling across all components
- **Smooth Animations**: GSAP-powered animations for window movements, transitions, and hover effects
- **Responsive Design**: Optimized for desktop and tablet screens
- **Interactive Dock**: Application launcher with hover scaling effects
- **Draggable Windows**: All windows support drag-and-drop functionality

### Window Management
- **Minimize**: Animate windows to dock with smooth scale and opacity transitions
- **Maximize**: Expand windows to fullscreen with state preservation
- **Restore**: Bring windows back to original positions and sizes
- **Close**: Fade-out animation when closing windows
- **Focus Management**: Bring windows to front on interaction

### Available Windows
1. **Portfolio (Finder)** - Browse and view all projects with file system-like navigation
2. **Articles (Safari)** - Display blog posts and external articles
3. **Gallery (Photos)** - Image gallery with masonry layout
4. **Contact** - Social media links and contact information
5. **Skills (Terminal)** - Tech stack and technology expertise display
6. **Achievements** - Certifications and publications organized by categories
7. **Resume** - PDF viewer for resume display
8. **Text Files** - Project descriptions and details
9. **Image Viewer** - Preview images with full details

### Theme System
- **Light Mode**: Clean, bright interface with light backgrounds
- **Dark Mode**: Eye-friendly dark interface with slate color palette
- **Smooth Transitions**: 0.5s transitions between theme changes
- **Automatic Styling**: All components automatically adapt to theme changes
- **Background Images**: Custom backgrounds for each theme mode

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool with HMR

### Styling & Animation
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **GSAP 3.13.0** - Professional animation library
- **@tailwindcss/vite 4.1.17** - Tailwind CSS integration

### State Management
- **Zustand 5.0.8** - Lightweight state management
- **Immer 11.0.0** - Immutable state updates

### Components & UI
- **Lucide React 0.554.0** - Icon library
- **React Tooltip 5.30.0** - Tooltip component
- **React PDF 10.2.0** - PDF viewing support
- **clsx 2.1.1** - Conditional class names

### Utilities
- **dayjs 1.11.19** - Date formatting library

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Dock.jsx         # Application launcher dock
│   ├── Home.jsx         # Desktop folder icons
│   ├── Navbar.jsx       # Top navigation bar
│   ├── ThemeToggle.jsx  # Dark/light mode toggle
│   ├── Welcome.jsx      # Hero section with animations
│   └── WindowControls.jsx # Minimize/maximize/close buttons
├── windows/             # Window components
│   ├── ArchiveWindow.jsx # Achievements and certifications
│   ├── AchievementPDF.jsx # Achievement PDF viewer
│   ├── Contact.jsx      # Contact information
│   ├── Finder.jsx       # Project browser
│   ├── Image.jsx        # Image viewer
│   ├── Photos.jsx       # Gallery
│   ├── Resume.jsx       # Resume PDF
│   ├── Safari.jsx       # Articles/blog
│   ├── Terminal.jsx     # Tech skills display
│   └── Text.jsx         # Project descriptions
├── store/               # Zustand state management
│   ├── location.js      # Folder navigation state
│   ├── theme.js         # Dark/light mode state
│   └── window.js        # Window management state
├── hoc/                 # Higher-order components
│   └── WindowWrapper.jsx # Window functionality wrapper
├── utils/               # Utility functions
│   └── windowAnimations.js # GSAP animation utilities
├── constants/           # Application constants
│   └── index.js         # App configuration and data
├── App.jsx              # Main app component
├── index.css            # Global styles with dark mode
└── main.jsx             # React entry point
```

## 🎨 Theme System

### Light Mode
- Clean, bright interface with white backgrounds
- Gray text and borders for clarity
- Blue highlights for interactive elements
- Professional and minimal design

### Dark Mode
- Slate color palette (slate-800, slate-900, slate-950)
- White text for contrast and readability
- Blue-600 highlights for active elements
- Eye-friendly for extended use

### Color Palette
- **Primary Blue**: `#3b82f6` (blue-500)
- **Active Blue**: `#2563eb` (blue-600)
- **Light Background**: `/images/Light.png`
- **Dark Background**: `/images/wallpaper.png`

## 🎬 Animations

### Window Animations
- **Open**: Fade-in with scale effect (300ms)
- **Close**: Fade-out with scale down (250ms)
- **Minimize**: Bounce animation to dock (350ms)
- **Restore**: Pop-out animation from dock (350ms)
- **Maximize**: Smooth expansion to fullscreen (350ms)
- **Drag**: Real-time dragging with GSAP Draggable

### Interactive Animations
- **Dock Hover**: Icon scaling based on mouse distance (exponential easing)
- **Text Hover**: Font weight variation on Welcome text
- **Button Hover**: Scale and brightness effects
- **Window Focus**: Instant z-index update with no animation

### Easing Functions
- `power3.out` - Window open/restore animations
- `power3.in` - Window close animations
- `power3.inOut` - Maximize/restore animations
- `power2.out` - Hover and interactive effects
- `power1.out` - Dock icon animations

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup
No environment variables required. All configuration is in `src/constants/index.js`.

## 📝 Configuration

### Customizing Projects
Edit `src/constants/index.js` to add or modify projects:

```javascript
const WORK_LOCATION = {
  // Add your projects here
  children: [
    {
      id: 1,
      name: "Your Project",
      icon: "/images/folder.png",
      kind: "folder",
      children: [/* project files */]
    }
  ]
};
```

### Customizing Tech Stack
Update the `techStack` constant in `src/constants/index.js`:

```javascript
const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"]
  }
];
```

### Customizing Social Links
Update the `socials` constant in `src/constants/index.js` with your social profiles.

## 🎯 Component Details

### WindowWrapper HOC
Wraps all window components to provide:
- Drag functionality
- Animation state management
- Z-index management
- Focus behavior

### Zustand Stores

**useWindowStore**
- Manages window open/close state
- Handles minimize/maximize state
- Manages z-index for window stacking
- Stores window position data

**useThemeStore**
- Manages dark/light mode toggle
- Stores background image URLs
- Persists theme preference

**useLocationStore**
- Manages current folder navigation
- Handles sidebar selection

## 🔗 Navigation

### Using NavLinks
Click navigation items in the top navbar to open windows directly.

### Using the Dock
Click dock icons to open/close applications. Click again to bring window to front.

### Folder Navigation
Use the Finder window to browse projects. Click folders to navigate and view project contents.

## 📱 Responsive Behavior

- **Desktop/Laptop**: Full interface with all features enabled
- **Tablet**: Windows repositioned and scaled appropriately
- **Mobile**: Warning message - portfolio optimized for larger screens

## 🐛 Code Quality

- **ESLint**: JavaScript linting configured
- **Vite HMR**: Hot Module Replacement for fast development
- **Path Aliases**: Easy imports with `#` prefix:
  - `#components` → `src/components`
  - `#windows` → `src/windows`
  - `#store` → `src/store`
  - `#hoc` → `src/hoc`
  - `#utils` → `src/utils`
  - `#constants` → `src/constants`

## 🌐 Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

Output files are in the `dist/` directory.

### Preview Build Locally
```bash
npm run preview
```

## 📦 Dependencies

All dependencies are production-ready and actively maintained:
- React & React DOM for UI
- GSAP for professional animations
- Zustand for lightweight state management
- Tailwind CSS for utility-first styling
- Lucide React for consistent icons

## 🎓 Learning Resources

This portfolio demonstrates:
- **React Hooks**: useRef, useEffect, custom hooks
- **State Management**: Zustand with Immer middleware
- **GSAP Animations**: Timelines, tweens, and Draggable
- **Higher-Order Components**: WindowWrapper pattern
- **Tailwind CSS**: Responsive design and dark mode
- **Performance**: Code splitting and lazy loading

## 📄 License

This portfolio is personal work and available for reference.

## 🙏 Acknowledgments

Built with modern web technologies and best practices for an immersive portfolio experience.
