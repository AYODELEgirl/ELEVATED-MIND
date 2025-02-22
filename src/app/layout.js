"use client";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/NavLayouts/Navbar";
import "@arco-design/web-react/dist/css/arco.css";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadata = {
  title: "Elevated Minds",
};

export default function RootLayout({ children }) {
  // Use usePathname to get the current pathname
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  ${
          !pathname.includes("school-web") ? "bg-primary" : ""
        }`}
      >
        {/* Conditionally render Navbar based on the pathname */}
        {pathname && !pathname.includes("school-web") && <Navbar />}
        {children}
      </body>
    </html>
  );
}
