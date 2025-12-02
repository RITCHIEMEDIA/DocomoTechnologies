import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '@/components/ui/Input';

describe('Input', () => {
  test('renders with label', () => {
    render(<Input label="Test Label" />);
    
    const label = screen.getByText(/Test Label/i);
    expect(label).toBeInTheDocument();
  });

  test('renders with placeholder', () => {
    render(<Input placeholder="Test placeholder" />);
    
    const input = screen.getByPlaceholderText(/Test placeholder/i);
    expect(input).toBeInTheDocument();
  });

  test('renders with error message', () => {
    render(<Input error="Test error message" />);
    
    const error = screen.getByText(/Test error message/i);
    expect(error).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<Input className="custom-class" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });
});