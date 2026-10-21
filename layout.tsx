import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiler Pro — টাইলস কাজের গাইড",
  description: "Wall & Floor Tiler-এর বাংলা workflow, checklist, tools এবং material calculator.",
  applicationName: "Tiler Pro",
  manifest: "/manifest.json",
};
export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bn"><body>{children}</body></html>;
}
