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

  const buttonClass = pathname ? buttonClassMapping[pathname] || "" : ""; // fallback to "fancy-button" if pathname is not in the mapping

  return (
    <html lang="en">
      <head></head>
      <body>
        <header>
          <div className="centered">
            {["/", "/project1", "/project2", "project5"].map((link) => (
              <Link
                key={link}
                href={link}
                className={`fancy-button ${buttonClass} ${
                  link === pathname ? "button-highlighted" : ""
                }`}
              >
                {link === "/" ? "Main Page" : link.replace("/", "")}
              </Link>
            ))}
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
