import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return {
    theme: mounted ? theme : undefined,
    toggleTheme,
    isDark: mounted ? theme === "dark" : true,
  };
};
