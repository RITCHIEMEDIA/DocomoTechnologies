import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '@/components/ui/Button';

describe('Button', () => {
  test('renders with default props', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-primary');
  });

  test('renders with custom variant', () => {
    render(<Button variant="outline">Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('btn-outline');
  });

  test('renders as link when href is provided', () => {
    render(<Button href="/test">Click me</Button>);
    
    const link = screen.getByRole('link', { name: /click me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('custom-class');
  });
});