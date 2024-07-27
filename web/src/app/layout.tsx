import localFont from "next/font/local";

import { getLang } from "@/lib/api";
import Footer from "@/components/sections/Footer";

import "./globals.css";

const mulish = localFont({
  src: "./../../public/fonts/Mulish-Regular.woff2",
  variable: "--font-mulish",
});

const mulishBold = localFont({
  src: "./../../public/fonts/Mulish-Bold.woff2",
  variable: "--font-mulish-bold",
});

const dimbo = localFont({
  src: "./../../public/fonts/DimboRegular.woff2",
  variable: "--font-dimbo",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { lang } = await getLang();
  return (
    <html lang={lang || "en"}>
      <body
        className={`${mulish.variable} ${mulishBold.variable} ${dimbo.variable}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
