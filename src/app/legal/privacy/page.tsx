import Meta from '@/components/seo/Meta';

export default function PrivacyPolicy() {
  return (
    <>
      <Meta 
        title="Privacy Policy" 
        description="Privacy policy for Docomo Technologies Ltd website and services." 
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-[--muted]"><strong>Last Updated:</strong> December 1, 2025</p>
              
              <p>
                Docomo Technologies Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website docomotech.com and use our services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-2">Personal Information</h3>
              <p>
                We may collect personally identifiable information, such as your name, email address, phone number, company name, and other information you voluntarily provide when you:
              </p>
              <ul>
                <li>Contact us through our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Apply for a job</li>
                <li>Register for an event or webinar</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-2">Usage Data</h3>
              <p>
                We may automatically collect information about your device and usage of our website, including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited</li>
                <li>Time and date of visit</li>
                <li>Referring website</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p>We may use your information for various purposes, including:</p>
              <ul>
                <li>To provide and maintain our services</li>
                <li>To communicate with you, including responding to inquiries</li>
                <li>To send you newsletters and marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Data Protection Rights</h2>
              <p>
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul>
                <li>The right to access, update, or delete your personal information</li>
                <li>The right to data portability</li>
                <li>The right to restrict or object to our processing of your personal data</li>
                <li>The right to withdraw consent</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@docomotech.com<br />
                <strong>Address:</strong> 123 Tech Street, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}