import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CTA from '@/components/sections/CTA';

// Mock next/link to avoid issues with router context
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('CTA', () => {
  const mockProps = {
    title: 'Test CTA Title',
    description: 'Test CTA description',
    buttonText: 'Call to Action',
    buttonHref: '/test',
  };

  test('renders title and description', () => {
    render(<CTA {...mockProps} />);
    
    const title = screen.getByRole('heading', { level: 2, name: /Test CTA Title/i });
    const description = screen.getByText(/Test CTA description/i);
    
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('renders CTA button', () => {
    render(<CTA {...mockProps} />);
    
    const button = screen.getByRole('link', { name: /Call to Action/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/test');
  });
});