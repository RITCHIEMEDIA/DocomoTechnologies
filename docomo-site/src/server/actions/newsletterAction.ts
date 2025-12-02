'use server';

export async function subscribeToNewsletter(formData: FormData) {
  // Extract form data
  const email = formData.get('email') as string;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Invalid email format' };
  }

  // In a real application, you would:
  // 1. Save email to database or email service (Mailchimp, ConvertKit, etc.)
  // 2. Send confirmation email
  console.log('Newsletter subscription:', { email });

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return success response
  return { 
    success: true, 
    message: 'Thank you for subscribing to our newsletter!' 
  };
}