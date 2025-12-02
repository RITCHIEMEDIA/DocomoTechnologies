import { renderHook, act } from '@testing-library/react';
import { useForm } from '@/hooks/useForm';

describe('useForm', () => {
  test('returns initial state', () => {
    const { result } = renderHook(() => useForm({ name: 'John' }));
    
    expect(result.current.values).toEqual({ name: 'John' });
    expect(result.current.errors).toEqual({});
    expect(result.current.isSubmitting).toBe(false);
  });

  test('handles value changes', () => {
    const { result } = renderHook(() => useForm({ name: 'John' }));
    
    act(() => {
      result.current.handleChange('name', 'Jane');
    });
    
    expect(result.current.values).toEqual({ name: 'Jane' });
    expect(result.current.errors).toEqual({});
  });

  test('handles errors', () => {
    const { result } = renderHook(() => useForm({ name: 'John' }));
    
    act(() => {
      result.current.setError('name', 'Name is required');
    });
    
    expect(result.current.errors).toEqual({ name: 'Name is required' });
  });

  test('handles submitting state', () => {
    const { result } = renderHook(() => useForm({ name: 'John' }));
    
    act(() => {
      result.current.setSubmitting(true);
    });
    
    expect(result.current.isSubmitting).toBe(true);
  });

  test('resets form', () => {
    const { result } = renderHook(() => useForm({ name: 'John' }));
    
    act(() => {
      result.current.handleChange('name', 'Jane');
      result.current.reset();
    });
    
    expect(result.current.values).toEqual({ name: 'John' });
    expect(result.current.errors).toEqual({});
    expect(result.current.isSubmitting).toBe(false);
  });
});