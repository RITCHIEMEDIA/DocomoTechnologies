import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileNav from '@/components/layout/MobileNav';

// Mock next/link to avoid issues with router context
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('MobileNav', () => {
  test('does not render when isOpen is false', () => {
    render(<MobileNav isOpen={false} onClose={jest.fn()} />);
    
    expect(screen.queryByText(/Home/i)).not.toBeInTheDocument();
  });

  test('renders navigation links when isOpen is true', () => {
    render(<MobileNav isOpen={true} onClose={jest.fn()} />);
    
    const homeLink = screen.getByRole('link', { name: /Home/i });
    const aboutLink = screen.getByRole('link', { name: /About/i });
    const servicesLink = screen.getByRole('link', { name: /Services/i });
    const contactLink = screen.getByRole('link', { name: /Contact/i });
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    
    render(<MobileNav isOpen={true} onClose={onClose} />);
    
    const closeButton = screen.getByLabelText(/Close menu/i);
    fireEvent.click(closeButton);
    
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});