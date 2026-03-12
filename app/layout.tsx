import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

/*
 * Font pairing: DM Serif Display + DM Sans
 *
 * Rationale: Both fonts share the same design family, engineered to work
 * together. DM Serif Display has delicate, high-contrast letterforms with
 * quiet authority — considered, not clinical, not dramatic. DM Sans on body
 * copy is exceptionally legible on small screens, with slightly rounded
 * terminals that keep it warm without being cutesy. The unified DNA signals
 * craftsmanship that matches the Keru brand: calm, well-made, not shouting.
 *
 * Alternatives considered:
 *   - Lora + DM Sans: warm but risks reading "bloggy" at large sizes
 *   - Playfair Display + Source Sans 3: too editorial/trendy for the brand
 */
const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Keru — One intention. One check-in. One day at a time.",
  description:
    "Keru helps you stay close to what matters — without streaks, scores, or guilt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${dmSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
