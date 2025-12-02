import { useState, useCallback } from 'react';

interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
  isSubmitting: boolean;
}

export function useForm(initialValues: Record<string, any> = {}) {
  const [state, setState] = useState<FormState>({
    values: initialValues,
    errors: {},
    isSubmitting: false,
  });

  const handleChange = useCallback(
    (name: string, value: any) => {
      setState(prev => ({
        ...prev,
        values: {
          ...prev.values,
          [name]: value,
        },
        errors: {
          ...prev.errors,
          [name]: '',
        },
      }));
    },
    []
  );

  const setError = useCallback(
    (name: string, error: string) => {
      setState(prev => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: error,
        },
      }));
    },
    []
  );

  const setSubmitting = useCallback(
    (isSubmitting: boolean) => {
      setState(prev => ({
        ...prev,
        isSubmitting,
      }));
    },
    []
  );

  const reset = useCallback(() => {
    setState({
      values: initialValues,
      errors: {},
      isSubmitting: false,
    });
  }, [initialValues]);

  return {
    ...state,
    handleChange,
    setError,
    setSubmitting,
    reset,
  };
}