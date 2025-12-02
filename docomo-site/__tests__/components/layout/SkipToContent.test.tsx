import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkipToContent from '@/components/layout/SkipToContent';

describe('SkipToContent', () => {
  test('renders skip to content link', () => {
    render(<SkipToContent />);
    
    const link = screen.getByText(/Skip to Content/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#content');
  });
});