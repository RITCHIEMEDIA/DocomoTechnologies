import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/layout/Footer';

// Mock next/link to avoid issues with router context
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('Footer', () => {
  test('renders company info', () => {
    render(<Footer />);
    
    const logo = screen.getByText(/Docomo/i);
    expect(logo).toBeInTheDocument();
    
    const description = screen.getByText(/Empowering Nigerian businesses/i);
    expect(description).toBeInTheDocument();
  });

  test('renders footer navigation links', () => {
    render(<Footer />);
    
    // Check for some key links
    const aboutLink = screen.getByRole('link', { name: /About/i });
    const privacyLink = screen.getByRole('link', { name: /Privacy Policy/i });
    const termsLink = screen.getByRole('link', { name: /Terms of Service/i });
    
    expect(aboutLink).toBeInTheDocument();
    expect(privacyLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<Footer />);
    
    const socialLinks = screen.getAllByRole('link', { name: /LinkedIn|Twitter/i });
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  test('renders newsletter form', () => {
    render(<Footer />);
    
    const emailInput = screen.getByPlaceholderText(/email/i);
    const subscribeButton = screen.getByRole('button', { name: /Subscribe/i });
    
    expect(emailInput).toBeInTheDocument();
    expect(subscribeButton).toBeInTheDocument();
  });
});