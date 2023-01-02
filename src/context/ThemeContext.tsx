import { createContext, ReactNode, useLayoutEffect, useState } from "react";
import { themeKey } from "../config/storageKeys";
import { readStore, writeStore } from "../services/asyncStore";

interface ThemeContextProps {
  selectedTheme: number   // 0 = system defined, 1 = light, 2 = dark,
  updateSelectedTheme(theme: number): void
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>({
  selectedTheme: 0,
  updateSelectedTheme: (value) => {}
});

const ThemeContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // 0 = system defined, 1 = light, 2 = dark,
  const [selectedTheme, setSelectedTheme] = useState<number>(0);

  const readThemeSettings = async () => {
    const result = await readStore(themeKey);
    if (result.success === true && result.data) {
      setSelectedTheme(parseInt(result.data));
    }
    else if (result.success === true && !result.data) {
      setSelectedTheme(0);
      writeStore(themeKey, '0');
    }
  }

  useLayoutEffect(() => {
    readThemeSettings();
  }, []);

  const updateSelectedTheme = async (value: number) => {
    const result = await writeStore(themeKey, value.toString());
    if (result.success === true) {
      setSelectedTheme(value)
    }
  }

  return (
    <ThemeContext.Provider
      value={{ 
        selectedTheme,
        updateSelectedTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

