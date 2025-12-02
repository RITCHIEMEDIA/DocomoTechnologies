'use server';

export async function sendContact(formData: FormData) {
  // Extract form data
  const name = formData.get('name') as string;
  const company = formData.get('company') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // In a real application, you would send this data to your email service or database
  console.log('Contact form submission:', { name, company, email, phone, subject, message });

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return success response
  return { success: true, message: 'Thank you for your message. We will get back to you soon.' };
}