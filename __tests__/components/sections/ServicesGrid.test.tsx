import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServicesGrid from '@/components/sections/ServicesGrid';

describe('ServicesGrid', () => {
  test('renders section title', () => {
    render(<ServicesGrid />);
    
    const title = screen.getByRole('heading', { level: 2, name: /Our Services/i });
    expect(title).toBeInTheDocument();
  });

  test('renders service cards', () => {
    render(<ServicesGrid />);
    
    // Check that at least one service is rendered
    const service = screen.getByText(/Web Development/i);
    expect(service).toBeInTheDocument();
  });

  test('renders all service icons', () => {
    render(<ServicesGrid />);
    
    // Check for some of the icons
    const laptopIcon = screen.getByText(/💻/i);
    const phoneIcon = screen.getByText(/📱/i);
    const cloudIcon = screen.getByText(/☁️/i);
    
    expect(laptopIcon).toBeInTheDocument();
    expect(phoneIcon).toBeInTheDocument();
    expect(cloudIcon).toBeInTheDocument();
  });
});