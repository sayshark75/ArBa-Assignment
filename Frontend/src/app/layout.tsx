import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navigation/Navbar";
import { fonts } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "ArBa Assignment",
  description: "Assignment from ArBa Dvelopment Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fonts.lato.variable} ${fonts.poppins.variable} ${fonts.rubik.variable} ${fonts.monte.variable}`}>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
