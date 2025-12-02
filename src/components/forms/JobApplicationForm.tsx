'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Application submitted:', { ...formData, resume });
    setLoading(false);
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
    });
    setResume(null);
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white rounded-[--radius] p-6 shadow-md">
      {submitted ? (
        <div className="bg-[--success] text-white p-4 rounded-[--radius] text-center">
          <h3 className="font-bold text-lg mb-2">Application Submitted!</h3>
          <p>Thank you for your application. We'll review it and get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              label="Position Applying For"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>
          
          <Input
            label="Years of Experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
          
          <div>
            <label className="block text-sm font-medium text-[--text] mb-1">
              Resume/CV
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full px-4 py-2 border border-[--neutral-200] rounded-[--radius] focus:ring-[--color-brand] focus:border-[--color-brand]"
            />
          </div>
          
          <Textarea
            label="Cover Letter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
            rows={6}
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
            {loading ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      )}
    </div>
  );
}