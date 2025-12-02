import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '@/components/forms/ContactForm';

describe('ContactForm', () => {
  test('renders form fields', () => {
    render(<ContactForm />);
    
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/company/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/phone/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/subject/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/consent/i)).toBeInTheDocument();
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('allows user to fill out form', () => {
    render(<ContactForm />);
    
    const nameInput = screen.getByPlaceholderText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput).toHaveValue('John Doe');
    
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput).toHaveValue('john@example.com');
    
    const messageInput = screen.getByPlaceholderText(/message/i);
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });
    expect(messageInput).toHaveValue('Hello, this is a test message.');
  });

  test('shows success message after submission', async () => {
    render(<ContactForm />);
    
    // Fill out form
    fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/subject/i), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByPlaceholderText(/message/i), { target: { value: 'Hello, this is a test message.' } });
    fireEvent.click(screen.getByLabelText(/consent/i));
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);
    
    // Check for success message
    expect(await screen.findByText(/thank you!/i)).toBeInTheDocument();
  });
});