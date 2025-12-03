"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/build", label: "Build" },
    { href: "/write", label: "Write" },
    { href: "/saudi", label: "Saudi" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-50/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-6 px-6">
      <Link href="/" className="font-semibold text-gray-900 hover:text-blue-600 transition-colors text-xl">
          Hanzala Qureshi
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-base font-medium transition-all ${pathname === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}>
              {link.label}
            </Link>
          ))}
          
          <Link href="/contact" className="ml-4 px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-medium shadow-sm hover:shadow-md">
            Get in Touch
          </Link>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 -mr-2 text-gray-500 hover:text-gray-900 transition-colors" aria-label="Toggle menu">
          <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 bg-gray-50 border-t border-gray-200">
          <div className="space-y-1 pt-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={`block py-2.5 text-sm font-medium transition-colors ${pathname === link.href ? "text-blue-600" : "text-gray-500 hover:text-gray-900"}`}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block mt-4 px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-medium text-center">
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}