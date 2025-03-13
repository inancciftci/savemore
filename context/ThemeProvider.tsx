import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider enableSystem attribute="class" defaultTheme="system">
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
