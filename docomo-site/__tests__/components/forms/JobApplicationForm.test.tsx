import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobApplicationForm from '@/components/forms/JobApplicationForm';

describe('JobApplicationForm', () => {
  test('renders form fields', () => {
    render(<JobApplicationForm />);
    
    expect(screen.getByPlaceholderText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Position Applying For/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Years of Experience/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Cover Letter/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/consent/i)).toBeInTheDocument();
    
    const submitButton = screen.getByRole('button', { name: /Submit Application/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('allows user to fill out form', () => {
    render(<JobApplicationForm />);
    
    const nameInput = screen.getByPlaceholderText(/Full Name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput).toHaveValue('John Doe');
    
    const emailInput = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput).toHaveValue('john@example.com');
    
    const coverLetterInput = screen.getByPlaceholderText(/Cover Letter/i);
    fireEvent.change(coverLetterInput, { target: { value: 'This is my cover letter.' } });
    expect(coverLetterInput).toHaveValue('This is my cover letter.');
  });

  test('shows success message after submission', async () => {
    render(<JobApplicationForm />);
    
    // Fill out form
    fireEvent.change(screen.getByPlaceholderText(/Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Position Applying For/i), { target: { value: 'Developer' } });
    fireEvent.change(screen.getByPlaceholderText(/Years of Experience/i), { target: { value: '5' } });
    fireEvent.change(screen.getByPlaceholderText(/Cover Letter/i), { target: { value: 'This is my cover letter.' } });
    fireEvent.click(screen.getByLabelText(/consent/i));
    
    // Submit form
    const submitButton = screen.getByRole('button', { name: /Submit Application/i });
    fireEvent.click(submitButton);
    
    // Check for success message
    expect(await screen.findByText(/Application Submitted!/i)).toBeInTheDocument();
  });
});