"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          🎓 Teacher Management
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/teachers" className="hover:underline">
            Teachers
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/payment" className="hover:underline">
            Payment
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-blue-800 text-sm font-medium">
          <Link href="/" className="block hover:underline" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/teachers" className="block hover:underline" onClick={() => setMenuOpen(false)}>
            Teachers
          </Link>
          <Link href="/about" className="block hover:underline" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/payment" className="block hover:underline" onClick={() => setMenuOpen(false)}>
            Payment
          </Link>
          <Link href="/contact" className="block hover:underline" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
