import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamGrid from '@/components/sections/TeamGrid';

describe('TeamGrid', () => {
  test('renders section title', () => {
    render(<TeamGrid />);
    
    const title = screen.getByRole('heading', { level: 2, name: /Our Leadership Team/i });
    expect(title).toBeInTheDocument();
  });

  test('renders team member cards', () => {
    render(<TeamGrid />);
    
    // Check that at least one team member is rendered
    const teamMember = screen.getByText(/Adebayo Johnson/i);
    expect(teamMember).toBeInTheDocument();
  });

  test('renders team member roles', () => {
    render(<TeamGrid />);
    
    const role = screen.getByText(/Founder & CEO/i);
    expect(role).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<TeamGrid />);
    
    const linkedinLinks = screen.getAllByLabelText(/LinkedIn/i);
    const twitterLinks = screen.getAllByLabelText(/Twitter/i);
    
    expect(linkedinLinks.length).toBeGreaterThan(0);
    expect(twitterLinks.length).toBeGreaterThan(0);
  });
});