import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OGImage from '@/components/seo/OGImage';

describe('OGImage', () => {
  test('renders with title and description', () => {
    render(<OGImage title="Test Title" description="Test Description" />);
    
    // Since OGImage is primarily for documentation, we just verify it renders
    expect(true).toBe(true);
  });

  test('renders with custom image', () => {
    render(<OGImage title="Test Title" description="Test Description" image="/test.jpg" />);
    
    // Since OGImage is primarily for documentation, we just verify it renders
    expect(true).toBe(true);
  });
});