import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvide } from "@/providers/theme-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

export const metadata: Metadata = {
  title: "AgentForce Marketing Template",
  description: "AgentForce is a multipurpose marketing template built with Next.js , TypeScript, Tailwindcss and Motion for react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvide attribute="class" defaultTheme="system"  enableSystem disableTransitionOnChange>
          <main className="bg-background text-foreground">{children}</main>
        </ThemeProvide>
      </body>
    </html>
  );
}
