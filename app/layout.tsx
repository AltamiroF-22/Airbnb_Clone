import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import RegisterModal from "./components/Modals/RegisterModal";
import ToastProvider from "./providers/ToastPropvider";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
