import Link from 'next/link';
import Button from '@/components/ui/Button';
import NewsletterForm from '@/components/forms/NewsletterForm';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Projects', href: '/projects' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-accent">Docomo</span>
            </Link>
            <p className="text-neutral-200 mb-6 max-w-md">
              Oil field services, Civil/Electrical Engineering & general contractor. A subsidiary of Noble Environmental & Waste Management Ltd.
            </p>
            
            {/* Email */}
            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Email</h4>
              <a href="mailto:service@docomotechnologieslimited.com.ng" className="text-neutral-200 hover:text-accent transition-colors">
                service@docomotechnologieslimited.com.ng
              </a>
            </div>
            
            {/* Addresses */}
            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Office Address 1</h4>
              <p className="text-neutral-200 text-sm">
                No 6th Avenue 62nd Road House 1<br />
                Federal Housing Estate Egbeda<br />
                Owerri, Imo State, Nigeria
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-2">Office Address 2</h4>
              <p className="text-neutral-200 text-sm">
                92 Wetheral Road<br />
                Owerri, Imo State, Nigeria
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-neutral-200 hover:text-accent">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-neutral-200 hover:text-accent">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-neutral-200 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-neutral-200 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-600">
            &copy; {new Date().getFullYear()} Docomo Technologies Limited. All rights reserved. RC: 620534
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/legal/privacy" className="text-neutral-600 hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="text-neutral-600 hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}