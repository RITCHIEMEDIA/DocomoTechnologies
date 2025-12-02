'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Something went wrong!</h1>
          <p className="text-xl text-[--muted] mb-8">
            {error.message || 'An unexpected error occurred.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="btn btn-primary"
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              Try again
            </button>
            <Link href="/" className="btn btn-outline">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}