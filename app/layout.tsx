import { Exo_2 } from "next/font/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/Models/Modal";

const font = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VanGo",
  description: "Welcome to Vango, a new way of travel!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <Modal title="Hello" isOpen/>
          <Navbar />
          
          </ClientOnly>
        
        {children}
        
        </body>
    </html>
  );
}
