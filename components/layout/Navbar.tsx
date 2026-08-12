"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Win95Button from "@/components/ui/Win95Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/case-studies"
      ? pathname === href || pathname.startsWith(`${href}/`)
      : pathname === href;

  return (
    <nav className="bg-slate-900 text-slate-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <span className="text-xl font-bold text-slate-50">
          Anelka Cornelius Hariyanto
        </span>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Win95Button
              key={link.href}
              href={link.href}
              accent={link.href === "/contact"}
              active={isActive(link.href)}
            >
              {link.label}
            </Win95Button>
          ))}
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
          <div className="flex flex-col items-stretch gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <Win95Button
                key={link.href}
                href={link.href}
                accent={link.href === "/contact"}
                active={isActive(link.href)}
                className="w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Win95Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}