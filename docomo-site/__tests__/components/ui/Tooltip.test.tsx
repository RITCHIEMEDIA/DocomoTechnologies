import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tooltip from '@/components/ui/Tooltip';

describe('Tooltip', () => {
  test('does not show tooltip by default', () => {
    render(
      <Tooltip content="Tooltip content">
        <span>Hover me</span>
      </Tooltip>
    );
    
    expect(screen.queryByText(/Tooltip content/i)).not.toBeInTheDocument();
  });

  test('shows tooltip on hover', () => {
    render(
      <Tooltip content="Tooltip content">
        <span data-testid="trigger">Hover me</span>
      </Tooltip>
    );
    
    const trigger = screen.getByTestId('trigger');
    fireEvent.mouseEnter(trigger);
    
    expect(screen.getByText(/Tooltip content/i)).toBeInTheDocument();
  });

  test('hides tooltip on mouse leave', () => {
    render(
      <Tooltip content="Tooltip content">
        <span data-testid="trigger">Hover me</span>
      </Tooltip>
    );
    
    const trigger = screen.getByTestId('trigger');
    fireEvent.mouseEnter(trigger);
    expect(screen.getByText(/Tooltip content/i)).toBeInTheDocument();
    
    fireEvent.mouseLeave(trigger);
    expect(screen.queryByText(/Tooltip content/i)).not.toBeInTheDocument();
  });
});