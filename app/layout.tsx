import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Herbal Hair Oil Architect",
  description:
    "Craft a bespoke, science-backed herbal hair oil blend to reduce hair fall, boost growth, banish dandruff, and thicken strands."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className="bg-forest-50 text-forest-900 antialiased">
        <div className="min-h-screen bg-gradient-to-b from-white/70 via-forest-50 to-forest-100">
          {children}
        </div>
      </body>
    </html>
  );
}
