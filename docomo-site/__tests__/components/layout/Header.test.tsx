import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/layout/Header';

// Mock next/link to avoid issues with router context
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('Header', () => {
  test('renders the logo', () => {
    render(<Header />);
    
    const logo = screen.getByText(/Docomo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Header />);
    
    const homeLink = screen.getByRole('link', { name: /Home/i });
    const aboutLink = screen.getByRole('link', { name: /About/i });
    const servicesLink = screen.getByRole('link', { name: /Services/i });
    const contactLink = screen.getByRole('link', { name: /Contact/i });
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('renders contact button', () => {
    render(<Header />);
    
    const contactButton = screen.getByRole('link', { name: /Contact/i });
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveClass('btn-primary');
  });
});