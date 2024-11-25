"use client";

import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased dark`}
      >
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <nav className={"flex items-center space-x-4 lg:space-x-6"}>
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={100}
                height={23}
                priority
              />
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "text-sm font-medium transition-colors hover:text-primary",
                    {
                      "text-muted-foreground": pathname !== link.href,
                    },
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}
