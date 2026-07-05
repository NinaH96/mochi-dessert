import type { Metadata } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mochi Dessert — Custom Cakes in West Lafayette, IN",
  description:
    "Home-based custom cake studio in West Lafayette, Indiana. Birthday, graduation, celebration, and pet-friendly cakes, baked with love and a little Purdue spirit.",
  openGraph: {
    title: "Mochi Dessert — Custom Cakes, Baked With Love",
    description:
      "Custom birthday, graduation, celebration, and pet cakes from a home studio in West Lafayette, Indiana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${jakarta.variable}`}>
      <body className="font-body bg-cream text-ink antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
