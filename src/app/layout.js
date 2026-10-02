import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import navbar from "@/components/navbar/Navbar";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }) {
  const navList = ["Home", "About", "Contact", "Cart"];

  return (
    <html>
      <body>
        <Navbar list={navList} />
        {children}
      </body>
    </html>
  );
}
