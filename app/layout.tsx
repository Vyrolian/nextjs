"use client";
import React from "react";
import "./globals.css";
// Removed import type { Metadata } from "next"; as it is not being used in this component
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

// Removed unused export const metadata: Metadata = {...}; as it is not being used in this component

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);
  const buttonClassMapping: Record<string, string> = {
    "/project1": "fancy-button-project1",
    "/project2": "fancy-button-project2",
    // ... other mappings ...
  };

  const buttonClass = pathname ? buttonClassMapping[pathname] || "" : "";
  return (
    <html lang="en">
      <head></head>
      <body>
        <header>
          <div className="centered">
            <Link href="/" className={`fancy-button ${buttonClass}`}>
              Main Page
            </Link>
            <Link href="/project1" className={`fancy-button ${buttonClass}`}>
              Project 1
            </Link>
            <Link href="/project2" className={`fancy-button ${buttonClass}`}>
              Project 2
            </Link>
            <Link href="/project3" className={`fancy-button ${buttonClass}`}>
              Project 3
            </Link>
            <Link href="/project4" className={`fancy-button ${buttonClass}`}>
              Project 4
            </Link>
            <Link href="/project5" className={`fancy-button ${buttonClass}`}>
              Project 5
            </Link>
            <Link href="/project6" className={`fancy-button ${buttonClass}`}>
              Project 6
            </Link>
            <Link href="/project7" className={`fancy-button ${buttonClass}`}>
              Project 7
            </Link>
          </div>
        </header>
        <main>{children}</main>
        {/* You can add a footer here if necessary */}
      </body>
    </html>
  );
};

export default RootLayout;
