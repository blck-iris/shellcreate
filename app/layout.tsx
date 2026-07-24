import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "ShellCrete — Turning Discarded Shells into Sustainable Construction Materials",
  description:
    "ShellCrete uses calcium-rich shells from restaurants, markets, coastal communities and households as a partial substitute in non-structural concrete products. Better materials. Less quarrying.",
  keywords: [
    "shellcrete",
    "sustainable construction",
    "shell waste recycling",
    "calcium carbonate",
    "green building materials",
    "circular economy",
    "limestone alternative",
    "shellpass",
    "material passport",
  ],
  openGraph: {
    title: "ShellCrete — Better Materials. Less Quarrying.",
    description:
      "Turning discarded shells into verified calcium-rich inputs for lower-impact concrete products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
