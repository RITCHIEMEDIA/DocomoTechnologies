import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostCard from '@/components/blog/PostCard';

describe('PostCard', () => {
  const mockProps = {
    title: 'Test Blog Post',
    excerpt: 'This is a test blog post excerpt.',
    date: '2023-01-01',
    author: 'Test Author',
    tags: ['Tag1', 'Tag2'],
    slug: 'test-post',
    readingTime: '5 min read',
  };

  test('renders post title and excerpt', () => {
    render(<PostCard {...mockProps} />);
    
    const title = screen.getByRole('heading', { level: 2, name: /Test Blog Post/i });
    const excerpt = screen.getByText(/This is a test blog post excerpt/i);
    
    expect(title).toBeInTheDocument();
    expect(excerpt).toBeInTheDocument();
  });

  test('renders post metadata', () => {
    render(<PostCard {...mockProps} />);
    
    const author = screen.getByText(/Test Author/i);
    const date = screen.getByText(/Jan 1, 2023/i);
    const readingTime = screen.getByText(/5 min read/i);
    
    expect(author).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(readingTime).toBeInTheDocument();
  });

  test('renders tags', () => {
    render(<PostCard {...mockProps} />);
    
    const tag1 = screen.getByText(/Tag1/i);
    const tag2 = screen.getByText(/Tag2/i);
    
    expect(tag1).toBeInTheDocument();
    expect(tag2).toBeInTheDocument();
  });
});