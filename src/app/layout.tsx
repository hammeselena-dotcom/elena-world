import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle"; // ✅ <- hier relativ importieren

export const metadata = {
  title: "Elena World",
  description: "Meine Next.js Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" data-theme="pastel">
      <body className="min-h-screen flex flex-col bg-base-100 text-base-content">
        {/* NAVBAR */}
        <div className="navbar bg-base-100/80 backdrop-blur supports-[backdrop-filter]:bg-base-100/70 border-b border-base-200 sticky top-0 z-20">
          <div className="max-w-6xl w-full mx-auto px-4">
            <div className="navbar-start">
              <Link href="/" className="btn btn-ghost text-xl font-extrabold tracking-tight">
                Elena<span className="text-primary">·</span>World
              </Link>
            </div>

            <div className="navbar-center hidden md:flex gap-1">
              <Link href="/" className="btn btn-ghost">Home</Link>
              <Link href="/about" className="btn btn-ghost">About</Link>
              <Link href="/projects" className="btn btn-primary">Projects</Link>
            </div>

            <div className="navbar-end">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <main className="flex-1 max-w-6xl mx-auto px-4 py-10">{children}</main>

        {/* FOOTER */}
        <footer className="footer footer-center bg-base-200 text-base-content p-6">
          <aside>
            <p>© {new Date().getFullYear()} Elena World — built with Next.js, Tailwind & daisyUI</p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
