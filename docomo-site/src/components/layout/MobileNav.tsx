'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Close mobile nav on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when mobile nav is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Restore body scroll when mobile nav is closed
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close mobile nav when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 md:hidden"
      onClick={handleBackdropClick}
    >
      <div 
        ref={mobileNavRef}
        className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex justify-between items-center p-4 border-b border-[--neutral-200]">
          <Link href="/" className="text-xl font-bold text-[--color-brand]">
            Docomo
          </Link>
          <button 
            onClick={onClose}
            className="p-2 rounded-md text-[--text]"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-[--text] hover:text-[--color-brand] transition-colors font-medium"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-8">
            <Button href="/contact" variant="primary" className="w-full">
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}