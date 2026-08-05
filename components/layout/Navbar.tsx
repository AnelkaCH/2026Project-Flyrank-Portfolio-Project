"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold transition hover:text-gray-600"
        >
          Anelka
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-blue-600">
            About
          </Link>

          <Link
            href="/case-studies"
            className="transition hover:text-blue-600"
          >
            Case Studies
          </Link>

          <Link href="/contact" className="transition hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t md:hidden">
          <div className="flex flex-col px-6 py-4">
            <Link
              href="/"
              className="py-2 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="py-2 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/case-studies"
              className="py-2 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Case Studies
            </Link>

            <Link
              href="/contact"
              className="py-2 hover:text-blue-600"
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