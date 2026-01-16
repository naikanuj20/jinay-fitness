'use client';

import Link from 'next/link';
import { useState } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1F1F1F] bg-[#0E0E0E] shadow-lg supports-[backdrop-filter]:bg-[#0E0E0E]/90">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold text-white group-hover:text-[#6A00FF] transition-all duration-300">Forged Fitness</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/online-program" 
            className="text-sm font-semibold text-[#CFCFCF] hover:text-[#6A00FF] transition-all duration-300 relative group"
          >
            <span>Online Program</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6A00FF] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-semibold text-[#CFCFCF] hover:text-[#6A00FF] transition-all duration-300 relative group"
          >
            <span>About Me</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6A00FF] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-semibold text-[#CFCFCF] hover:text-[#6A00FF] transition-all duration-300 relative group"
          >
            <span>Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6A00FF] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className={buttonVariants({ className: "bg-[#6A00FF] text-white hover:bg-[#8C3CFF] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold" })}>
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#1F1F1F] bg-[#0E0E0E] shadow-lg animate-fade-in-up">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            <Link 
              href="/online-program" 
              className="text-sm font-medium text-[#CFCFCF] hover:text-[#6A00FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Online Program
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-[#CFCFCF] hover:text-[#6A00FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-[#CFCFCF] hover:text-[#6A00FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className={buttonVariants({ className: "w-full bg-[#6A00FF] text-white hover:bg-[#8C3CFF] font-semibold" })}
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
