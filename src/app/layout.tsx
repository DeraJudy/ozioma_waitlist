import type { Metadata } from "next";
import "./globals.css";

import { Playfair_Display, Montserrat_Alternates } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Specify desired weights
});

const montserrat = Montserrat_Alternates({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Match original import
});


export const metadata: Metadata = {
  title: "WaitList",
  description: "WaitList for oziomapov.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>

        {children}
      </body>
    </html>
  );
}

export { playfair, montserrat };
