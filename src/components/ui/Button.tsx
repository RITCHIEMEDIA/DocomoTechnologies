import Link from 'next/link';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  as?: React.ElementType;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    href, 
    as,
    children, 
    ...props 
  }, ref) => {
    // Determine the base classes based on variant
    const baseClasses = 'inline-flex items-center justify-center rounded-[--radius] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
    
    const variantClasses = {
      primary: 'bg-[--color-brand] text-white hover:bg-[--color-brand-dark]',
      outline: 'border border-[--color-brand] text-[--color-brand] hover:bg-[--color-brand] hover:text-white',
      ghost: 'text-[--color-brand] hover:bg-[--color-brand] hover:text-white',
    };
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg',
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    // If href is provided, render as Link
    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    
    // If 'as' prop is provided, render as that component
    if (as) {
      const Component = as;
      return (
        <Component className={classes} ref={ref} {...props}>
          {children}
        </Component>
      );
    }
    
    // Otherwise render as button
    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;