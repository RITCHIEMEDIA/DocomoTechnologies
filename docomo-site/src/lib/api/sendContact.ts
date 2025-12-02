export async function sendContact(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  // In a real application, you would send this data to your backend API
  console.log('Sending contact form data:', data);
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return success response
  return { 
    success: true, 
    message: 'Thank you for your message. We will get back to you soon.' 
  };
}