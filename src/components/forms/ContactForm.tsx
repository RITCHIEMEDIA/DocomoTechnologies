'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setLoading(false);
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white rounded-[--radius] p-6 shadow-md">
      {submitted ? (
        <div className="bg-[--success] text-white p-4 rounded-[--radius] text-center">
          <h3 className="font-bold text-lg mb-2">Thank You!</h3>
          <p>Your message has been sent successfully. We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              label="Phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <Input
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          
          <Textarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
          />
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="consent"
              className="mr-2"
              required
            />
            <label htmlFor="consent" className="text-sm text-[--muted]">
              I agree to the processing of my personal data in accordance with the Privacy Policy.
            </label>
          </div>
          
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  );
}