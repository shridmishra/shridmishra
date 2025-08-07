"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export default function DarkModeProvider(props: ThemeProviderProps) {
  return <NextThemesProvider {...props} />;
}
