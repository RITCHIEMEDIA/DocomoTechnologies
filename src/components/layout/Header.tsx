'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

type MenuItem = {
  name: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/assets/logos/docomo-logo.svg" 
            alt="Docomo Technologies Logo" 
            width={50} 
            height={50}
            priority
          />
          <span className="text-2xl font-bold">
            <span className="text-[--color-brand]">DOCOMO</span>
            <span className="text-[--color-accent]"> TECHNOLOGIES</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[--text] hover:text-[--color-brand] transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Button href="/contact" variant="primary">
            Contact
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-[--text]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[--text] hover:text-[--color-brand] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="w-full">
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}