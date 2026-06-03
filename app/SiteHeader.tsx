"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties/", label: "Properties" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span
            className="text-xl md:text-[22px]"
            style={{
              color: "#F5EFE8",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              letterSpacing: 1,
              lineHeight: 1,
            }}
          >
            VANI ESTATES
          </span>
          <span
            className="hidden sm:block text-[9px] mt-1"
            style={{
              color: "#C9A055",
              fontFamily: "Jost, sans-serif",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Property Consultants
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[12px] uppercase text-gray-400 hover:text-[#C9A055] transition"
              style={{ fontFamily: "Jost, sans-serif", letterSpacing: 1.5 }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/919845012548"
            target="_blank"
            className="hidden sm:inline-block bg-[#C9A055] text-black text-sm font-semibold px-5 py-2 hover:bg-[#b8913e] transition"
          >
            WhatsApp Us
          </a>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          >
            <span
              className={`block h-0.5 w-6 bg-[#C9A055] transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#C9A055] transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#C9A055] transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        className={`md:hidden border-t border-[#222] bg-[#0a0a0a] overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-2 flex flex-col">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm tracking-wider uppercase text-gray-400 hover:text-[#C9A055] border-b border-[#1a1a1a] transition"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/919845012548"
            target="_blank"
            onClick={() => setOpen(false)}
            className="mt-3 mb-2 bg-[#C9A055] text-black text-center text-sm font-semibold px-5 py-3 hover:bg-[#b8913e] transition"
          >
            WhatsApp Us
          </a>
        </div>
      </nav>
    </header>
  );
}
