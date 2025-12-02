'use client';

import { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Tooltip({ children, content, position = 'top' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        tooltipRef.current && 
        !tooltipRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  };

  const arrowClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-t-[--neutral-800] border-l-4 border-r-4 border-b-0 border-solid border-transparent',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-b-[--neutral-800] border-l-4 border-r-4 border-t-0 border-solid border-transparent',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-l-[--neutral-800] border-t-4 border-b-4 border-r-0 border-solid border-transparent',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-r-[--neutral-800] border-t-4 border-b-4 border-l-0 border-solid border-transparent',
  };

  return (
    <span 
      ref={triggerRef}
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          role="tooltip"
          className={`absolute z-50 px-3 py-2 text-sm text-white bg-[--neutral-800] rounded-[--radius] whitespace-nowrap ${positionClasses[position]}`}
        >
          {content}
          <div 
            className={`absolute w-0 h-0 ${arrowClasses[position]}`} 
            aria-hidden="true"
          />
        </div>
      )}
    </span>
  );
}