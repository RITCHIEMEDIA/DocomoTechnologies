import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[--text] mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-2 border rounded-[--radius] focus:ring-[--color-brand] focus:border-[--color-brand] ${
            error ? 'border-[--danger]' : 'border-[--neutral-200]'
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-[--danger]">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;