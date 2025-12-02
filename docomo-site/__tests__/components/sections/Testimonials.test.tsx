import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Testimonials from '@/components/sections/Testimonials';

describe('Testimonials', () => {
  test('renders section title', () => {
    render(<Testimonials />);
    
    const title = screen.getByRole('heading', { level: 2, name: /What Our Clients Say/i });
    expect(title).toBeInTheDocument();
  });

  test('renders testimonial cards', () => {
    render(<Testimonials />);
    
    // Check that at least one testimonial is rendered
    const testimonial = screen.getByText(/transformed our digital infrastructure/i);
    expect(testimonial).toBeInTheDocument();
  });

  test('renders client names and roles', () => {
    render(<Testimonials />);
    
    const clientName = screen.getByText(/Adeola Johnson/i);
    const clientRole = screen.getByText(/CTO, TechStart Nigeria/i);
    
    expect(clientName).toBeInTheDocument();
    expect(clientRole).toBeInTheDocument();
  });
});