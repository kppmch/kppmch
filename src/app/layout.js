import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร",
  description: "โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร",
  // Add this line to include Font Awesome
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      rel: "icon",
      href: "favicon.ico"
      
    },
  ],
  icon: [
    {
      
      rel: "icon",
      href: "./favicon.ico"
      
    },
  ],
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
     
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
