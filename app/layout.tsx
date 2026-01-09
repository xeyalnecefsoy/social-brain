import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#020617", // Slate-950
};

export const metadata: Metadata = {
  title: "Social Brain - Söhbət Mövzuları və Faktlar",
  description: "Söhbətlərinizi canlandırmaq üçün rəqəmsal beyin.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Social Brain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className="dark h-full">
      <body className={`${inter.className} h-full antialiased bg-slate-950 text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
