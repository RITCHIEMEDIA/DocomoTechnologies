import Meta from '@/components/seo/Meta';

export default function TermsOfService() {
  return (
    <>
      <Meta 
        title="Terms of Service" 
        description="Terms of service for using Docomo Technologies Ltd website and services." 
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-[--muted]"><strong>Last Updated:</strong> December 1, 2025</p>
              
              <p>
                Welcome to Docomo Technologies Ltd. These Terms of Service ("Terms") govern your access to and use of our website and services. By accessing or using our website and services, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Services</h2>
              <p>
                Docomo Technologies Ltd provides technology consulting, software development, and related services. Our services are subject to these Terms and any additional terms that may apply to specific services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Services</h2>
              <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:</p>
              <ul>
                <li>Use our services in any way that violates applicable laws</li>
                <li>Engage in unauthorized access to our systems</li>
                <li>Interfere with the operation of our services</li>
                <li>Attempt to bypass our security measures</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
              <p>
                All content, features, and functionality on our website are owned by Docomo Technologies Ltd and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. User Content</h2>
              <p>
                You retain ownership of any content you submit to our services. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content solely for the purpose of providing our services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Disclaimer of Warranties</h2>
              <p>
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, secure, or error-free.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Docomo Technologies Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> legal@docomotech.com<br />
                <strong>Address:</strong> 123 Tech Street, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}