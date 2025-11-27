import { create } from "zustand";

const LIGHT_BACKGROUND = "/images/Light.png";
const DARK_BACKGROUND = "/images/wallpaper.png";

const useThemeStore = create((set) => ({
  isDarkMode: false,
  lightBg: LIGHT_BACKGROUND,
  darkBg: DARK_BACKGROUND,

  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.isDarkMode;
      // Apply theme to document
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return { isDarkMode: newMode };
    }),

  setLightBackground: (imageUrl) => set({ lightBg: imageUrl }),
  setDarkBackground: (imageUrl) => set({ darkBg: imageUrl }),
}));

export default useThemeStore;
