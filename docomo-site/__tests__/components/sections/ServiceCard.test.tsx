import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServiceCard from '@/components/sections/ServiceCard';

// Mock next/link to avoid issues with router context
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('ServiceCard', () => {
  const mockProps = {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: '💻',
  };

  test('renders service information', () => {
    render(<ServiceCard {...mockProps} />);
    
    const title = screen.getByRole('heading', { level: 3, name: /Web Development/i });
    const description = screen.getByText(/Custom websites and web applications/i);
    const icon = screen.getByText(/💻/i);
    
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  test('renders learn more button', () => {
    render(<ServiceCard {...mockProps} />);
    
    const learnMoreButton = screen.getByRole('link', { name: /Learn more/i });
    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton).toHaveAttribute('href', '/services/web-development');
  });
});