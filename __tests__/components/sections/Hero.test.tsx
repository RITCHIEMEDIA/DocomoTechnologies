import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '@/components/sections/Hero';

// Mock next/link to avoid issues with router context
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('Hero', () => {
  const mockProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    ctas: [
      { text: 'Primary CTA', href: '/primary' },
      { text: 'Secondary CTA', href: '/secondary', variant: 'outline' as const },
    ],
  };

  test('renders title and subtitle', () => {
    render(<Hero {...mockProps} />);
    
    const title = screen.getByRole('heading', { level: 1, name: /Test Title/i });
    const subtitle = screen.getByText(/Test Subtitle/i);
    
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  test('renders CTA buttons', () => {
    render(<Hero {...mockProps} />);
    
    const primaryCta = screen.getByRole('link', { name: /Primary CTA/i });
    const secondaryCta = screen.getByRole('link', { name: /Secondary CTA/i });
    
    expect(primaryCta).toBeInTheDocument();
    expect(primaryCta).toHaveAttribute('href', '/primary');
    
    expect(secondaryCta).toBeInTheDocument();
    expect(secondaryCta).toHaveAttribute('href', '/secondary');
  });
});