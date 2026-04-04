"use client";

import Link from "next/link";

export default function HeaderComp() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-black tracking-tight">
          <span className="text-yellow-400">Brand</span>
          <span className="text-white">Buzz</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide uppercase">
          <Link href="/" className="text-white/60 hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/about" className="text-white/60 hover:text-yellow-400 transition">
            About
          </Link>
          <Link href="/portfolio" className="text-white/60 hover:text-yellow-400 transition">
            Portfolio
          </Link>
          <Link href="/services" className="text-white/60 hover:text-yellow-400 transition">
            What We Offer
          </Link>
          
          <Link href="/contact" className="text-white/60 hover:text-yellow-400 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link href="/pricing" className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition">
         Get Pricing
        </Link >
      </div>
    </header>
  );
}