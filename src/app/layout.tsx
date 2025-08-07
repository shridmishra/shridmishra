import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../context/provider";

export const metadata: Metadata = {
  title: "Shrid Mishra",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
