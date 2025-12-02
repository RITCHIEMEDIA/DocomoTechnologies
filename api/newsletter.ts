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

  const { email } = req.body;

  // Validate required fields
  if (!email) {
    res.status(400).json({ success: false, message: 'Email is required' });
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ success: false, message: 'Invalid email format' });
    return;
  }

  // In a real application, you would save this to your database or email service
  console.log('Newsletter subscription:', { email });

  // Simulate API call delay
  setTimeout(() => {
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for subscribing to our newsletter!' 
    });
  }, 1000);
}