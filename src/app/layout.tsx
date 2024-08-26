import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anas Dev",
  description: "Anas Dev is a portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
