import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsletterForm from '@/components/forms/NewsletterForm';

describe('NewsletterForm', () => {
  test('renders email input and subscribe button', () => {
    render(<NewsletterForm />);
    
    const emailInput = screen.getByPlaceholderText(/email/i);
    const subscribeButton = screen.getByRole('button', { name: /Subscribe/i });
    
    expect(emailInput).toBeInTheDocument();
    expect(subscribeButton).toBeInTheDocument();
  });

  test('allows user to enter email', () => {
    render(<NewsletterForm />);
    
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });

  test('shows success message after submission', async () => {
    render(<NewsletterForm />);
    
    // Fill out email
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    // Submit form
    const subscribeButton = screen.getByRole('button', { name: /Subscribe/i });
    fireEvent.click(subscribeButton);
    
    // Check for success message
    expect(await screen.findByText(/Thank you for subscribing!/i)).toBeInTheDocument();
  });
});