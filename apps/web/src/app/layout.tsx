import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "Next 15 demo",
  description: "Presentation of Next 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased dark`}
      >
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <nav className={"flex items-center space-x-4 lg:space-x-6"}>
              <Link
                href="/blog"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Blog
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Products
              </Link>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Dashboard
              </Link>
            </nav>
          </div>
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}
