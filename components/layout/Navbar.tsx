"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-slate-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <span className="text-xl font-bold text-slate-50">
          Anelka Cornelius Hariyanto
        </span>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="transition hover:text-[#06B6D4]">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-[#06B6D4]">
            About
          </Link>

          <Link
            href="/case-studies"
            className="transition hover:text-[#06B6D4]"
          >
            Case Studies
          </Link>

          <Link href="/contact" className="transition hover:text-[#06B6D4]">
            Contact
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-slate-300 md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-6 py-4">
            <Link
              href="/"
              className="py-2 hover:text-[#06B6D4]"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="py-2 hover:text-[#06B6D4]"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/case-studies"
              className="py-2 hover:text-[#06B6D4]"
              onClick={() => setMenuOpen(false)}
            >
              Case Studies
            </Link>

            <Link
              href="/contact"
              className="py-2 hover:text-[#06B6D4]"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}