import { createContext, ReactNode, useState } from "react";

interface ThemeContextProps {
  selectedTheme: number   // 0 = system defined, 1 = light, 2 = dark,
  setSelectedTheme(theme: number): void
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextProps>({
  selectedTheme: 0,
  setSelectedTheme: (value) => {}
});

const ThemeContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // 0 = system defined, 1 = light, 2 = dark,
  const [selectedTheme, setSelectedTheme] = useState<number>(0);

  return (
    <ThemeContext.Provider
      value={{ 
        selectedTheme,
        setSelectedTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

