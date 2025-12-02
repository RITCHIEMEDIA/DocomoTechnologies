import Meta from '@/components/seo/Meta';
import ContactForm from '@/components/forms/ContactForm';

export default function Contact() {
  return (
    <>
      <Meta 
        title="Contact Us" 
        description="Get in touch with Docomo Technologies Limited. Contact us for civil engineering, electrical engineering, and oil field services." 
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-[--muted]">
              Get in touch for your civil engineering and construction project needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-[--muted] mb-8">
                Contact Docomo Technologies Limited for your engineering and construction needs. We're ready to discuss your project requirements.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[--color-brand] p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-[--muted]">08037856714</p>
                    <p className="text-[--muted]">07081993027</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[--color-brand] p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-[--muted]">info@docomotech.ng</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[--color-brand] p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Office Address</h3>
                    <p className="text-[--muted]">No 6th Avenue 62nd Road House 1</p>
                    <p className="text-[--muted]">Federal Housing Estate Egbeda</p>
                    <p className="text-[--muted]">Owerri, Imo State, Nigeria</p>
                    <p className="text-[--muted] mt-2">RC: 620534</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}