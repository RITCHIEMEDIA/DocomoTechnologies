'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Subscribing email:', email);
    setSubmitted(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
      {submitted ? (
        <div className="bg-[--success] text-white p-3 rounded-[--radius]">
          Thank you for subscribing!
        </div>
      ) : (
        <>
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" size="sm">
            Subscribe
          </Button>
        </>
      )}
    </form>
  );
}