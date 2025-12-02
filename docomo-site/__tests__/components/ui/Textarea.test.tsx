import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Textarea from '@/components/ui/Textarea';

describe('Textarea', () => {
  test('renders with label', () => {
    render(<Textarea label="Test Label" />);
    
    const label = screen.getByText(/Test Label/i);
    expect(label).toBeInTheDocument();
  });

  test('renders with placeholder', () => {
    render(<Textarea placeholder="Test placeholder" />);
    
    const textarea = screen.getByPlaceholderText(/Test placeholder/i);
    expect(textarea).toBeInTheDocument();
  });

  test('renders with error message', () => {
    render(<Textarea error="Test error message" />);
    
    const error = screen.getByText(/Test error message/i);
    expect(error).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<Textarea className="custom-class" />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('custom-class');
  });
});