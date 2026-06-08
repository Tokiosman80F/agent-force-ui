"use client";
// import { ThemeProvider as NextThemesProvider } from "next-theme"
import { ThemeProvider as NextThemesProvider } from "next-themes";
export const ThemeProvide = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
