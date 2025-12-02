import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CaseStudyCard from '@/components/sections/CaseStudyCard';

// Mock next/link to avoid issues with router context
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('CaseStudyCard', () => {
  const mockProps = {
    title: 'Test Case Study',
    description: 'This is a test case study description.',
    metrics: [
      { label: 'Metric 1', value: '100%' },
      { label: 'Metric 2', value: '50%' },
    ],
    image: '/test-image.jpg',
    slug: 'test-case-study',
  };

  test('renders case study information', () => {
    render(<CaseStudyCard {...mockProps} />);
    
    const title = screen.getByRole('heading', { level: 3, name: /Test Case Study/i });
    const description = screen.getByText(/This is a test case study description/i);
    
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('renders metrics', () => {
    render(<CaseStudyCard {...mockProps} />);
    
    const metric1Value = screen.getByText(/100%/i);
    const metric1Label = screen.getByText(/Metric 1/i);
    const metric2Value = screen.getByText(/50%/i);
    const metric2Label = screen.getByText(/Metric 2/i);
    
    expect(metric1Value).toBeInTheDocument();
    expect(metric1Label).toBeInTheDocument();
    expect(metric2Value).toBeInTheDocument();
    expect(metric2Label).toBeInTheDocument();
  });

  test('renders view case study button', () => {
    render(<CaseStudyCard {...mockProps} />);
    
    const viewButton = screen.getByRole('link', { name: /View Case Study/i });
    expect(viewButton).toBeInTheDocument();
    expect(viewButton).toHaveAttribute('href', '/projects/test-case-study');
  });
});