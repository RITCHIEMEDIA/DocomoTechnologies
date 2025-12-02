import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthorProfile from '@/components/blog/AuthorProfile';

describe('AuthorProfile', () => {
  const mockProps = {
    name: 'Test Author',
    bio: 'This is a test author bio.',
    avatar: '/test-avatar.jpg',
    socials: {
      twitter: 'https://twitter.com/test',
      linkedin: 'https://linkedin.com/test',
      github: 'https://github.com/test',
    },
  };

  test('renders author name and bio', () => {
    render(<AuthorProfile {...mockProps} />);
    
    const name = screen.getByText(/Test Author/i);
    const bio = screen.getByText(/This is a test author bio/i);
    
    expect(name).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<AuthorProfile {...mockProps} />);
    
    const twitterLink = screen.getByLabelText(/Twitter/i);
    const linkedinLink = screen.getByLabelText(/LinkedIn/i);
    const githubLink = screen.getByLabelText(/GitHub/i);
    
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/test');
    
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/test');
    
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test');
  });
});