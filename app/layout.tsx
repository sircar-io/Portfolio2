import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siddhartha Sarkar — Creative Strategist × Writer × Creative Generalist",
  description: "A creative map of Siddhartha Sarkar: strategy, writing and end-to-end content ownership from brief to publish.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
