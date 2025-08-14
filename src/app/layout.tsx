import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../context/provider";

const info = {
  name: "Shrid Mishra",
  twitter: "@ShridMishra",
  description:
    "Full-Stack Developer specializing in Next.js, TypeScript, and Solana. Crafting modern, scalable, and high-performance web experiences.",
  url: "https://shrid.in",
  image: "/assets/pfp.webp", 
};

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: {
    default: `${info.name} | Full-Stack Developer & Solana Enthusiast`,
    template: `%s | ${info.name}`,
  },
  description: info.description,
  keywords: [
    "Shrid Mishra",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Solana Developer",
    "Portfolio",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [
    {
      name: info.name,
      url: info.url,
    },
  ],
  creator: info.name,
  publisher: info.name,
  openGraph: {
    type: "website",
    url: info.url,
    title: `${info.name} | Full-Stack Developer`,
    description: info.description,
    siteName: info.name,
    images: [
      {
        url: info.image,
        width: 1200,
        height: 630,
        alt: `${info.name} Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${info.name} | Full-Stack Developer`,
    description: info.description,
    creator: info.twitter,
    images: [info.image],
  },
  alternates: {
    canonical: info.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
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
