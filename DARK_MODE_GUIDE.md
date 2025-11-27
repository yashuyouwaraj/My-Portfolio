# Dark Mode & Light Mode - Customization Guide

## Overview
The dark mode system has been implemented with a theme toggle button in the navbar. Click the button to switch between light and dark modes. The background changes automatically.

## File Structure

### Theme Store: `src/store/theme.js`
This manages the theme state globally using Zustand.

**Key Features:**
- `isDarkMode`: Boolean state tracking current theme
- `lightBg`: URL for light mode background
- `darkBg`: URL for dark mode background
- `toggleDarkMode()`: Function to switch themes
- `setLightBackground(url)`: Update light mode background
- `setDarkBackground(url)`: Update dark mode background

## How to Change Backgrounds

### Method 1: Update Default Images in theme.js

Edit `src/store/theme.js`:

```javascript
const LIGHT_BACKGROUND = "/images/wallpaper.png";  // ← Change this path
const DARK_BACKGROUND = "/images/dark-wallpaper.svg";  // ← Or this path
```

Steps:
1. Add your custom image to `public/images/`
2. Update the URL in the constants
3. Vite HMR will reload automatically

### Method 2: Update Dynamically in React Components

```javascript
import useThemeStore from "#store/theme";

function MyComponent() {
  const { setLightBackground, setDarkBackground } = useThemeStore();

  const handleImageUpload = (lightImage, darkImage) => {
    setLightBackground(lightImage);
    setDarkBackground(darkImage);
  };

  return (
    <button onClick={() => handleImageUpload("/images/custom-light.png", "/images/custom-dark.png")}>
      Change Backgrounds
    </button>
  );
}
```

### Method 3: Add Multiple Background Presets

You can create a list of presets in `src/constants/index.js`:

```javascript
export const THEME_PRESETS = [
  {
    id: 1,
    name: "Default",
    light: "/images/wallpaper.png",
    dark: "/images/dark-wallpaper.svg",
  },
  {
    id: 2,
    name: "Ocean",
    light: "/images/ocean-light.png",
    dark: "/images/ocean-dark.png",
  },
  {
    id: 3,
    name: "Forest",
    light: "/images/forest-light.png",
    dark: "/images/forest-dark.png",
  },
];
```

Then use in a component:

```javascript
import { THEME_PRESETS } from "#constants";
import useThemeStore from "#store/theme";

function ThemePresets() {
  const { setLightBackground, setDarkBackground } = useThemeStore();

  return (
    <div>
      {THEME_PRESETS.map((preset) => (
        <button
          key={preset.id}
          onClick={() => {
            setLightBackground(preset.light);
            setDarkBackground(preset.dark);
          }}
        >
          {preset.name}
        </button>
      ))}
    </div>
  );
}
```

## Supported Image Formats

- `.png` - Best for quality
- `.jpg` / `.jpeg` - Good for photos
- `.svg` - Best for graphics/vectors (lightweight)
- `.webp` - Modern format (smaller file size)
- `.gif` - Animated backgrounds supported

## Current Backgrounds

**Light Mode:**
- Image: `/images/wallpaper.png`
- Current default wallpaper

**Dark Mode:**
- Image: `/images/dark-wallpaper.svg`
- Gradient background with subtle particle effects

## CSS Customization

Dark mode styles are in `src/index.css` under the `:root.dark` selector.

To customize dark mode colors:

```css
:root.dark nav {
  @apply bg-slate-900/50 backdrop-blur-3xl text-white;
  /* Adjust colors here */
}

:root.dark #findernav {
  @apply bg-slate-900;
  /* Customize finder background */
}
```

## How Theme Toggle Works

1. User clicks the theme toggle button in navbar
2. `toggleDarkMode()` is called
3. `isDarkMode` state updates
4. `document.documentElement.classList.add("dark")` or `classList.remove("dark")`
5. CSS `:root.dark` selectors apply dark mode styles
6. Background image changes via `App.jsx` useEffect
7. All components with `isDarkMode` value re-render with dark styles

## Theme Toggle Button Component

**Location:** `src/components/ThemeToggle.jsx`

Features:
- Shows moon icon in light mode (click to go dark)
- Shows sun icon in dark mode (click to go light)
- Smooth transition animations
- Accessible with aria-label and title

## Tips

1. **Keep file sizes small**: Use optimized images (compress with tools like TinyPNG)
2. **Ensure contrast**: Make sure text is readable in both modes
3. **Use SVG for patterns**: SVGs are lightweight and scalable
4. **Test both modes**: Check readability and appearance in light and dark

## Troubleshooting

**Background not changing:**
- Check image path is correct and file exists in `public/images/`
- Verify URL starts with `/images/`
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

**Dark mode not applying:**
- Clear browser cache
- Check that `document.documentElement.classList` contains "dark"
- Verify CSS `:root.dark` selector is in index.css
