// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  const { name, company, email, phone, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    res.status(400).json({ success: false, message: 'Missing required fields' });
    return;
  }

  // In a real application, you would send this data to your email service or database
  console.log('Contact form submission:', { name, company, email, phone, subject, message });

  // Simulate API call delay
  setTimeout(() => {
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon.' 
    });
  }, 1000);
}