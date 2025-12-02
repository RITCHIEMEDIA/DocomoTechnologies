import Meta from '@/components/seo/Meta';
import ServicesGrid from '@/components/sections/ServicesGrid';

export default function Services() {
  return (
    <>
      <Meta 
        title="Our Services" 
        description="Professional civil engineering, electrical engineering, and oil field services. General contracting and construction solutions by Docomo Technologies Limited." 
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-[--muted]">
              Professional engineering and construction solutions for your projects.
            </p>
          </div>
          
          <ServicesGrid />
          
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Docomo Technologies Limited?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[--neutral-100] p-6 rounded-[--radius]">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Quality Delivery</h3>
                <p className="text-[--muted]">
                  We deliver high-quality engineering and construction projects on time and within budget.
                </p>
              </div>
              
              <div className="bg-[--neutral-100] p-6 rounded-[--radius]">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2">Safety First</h3>
                <p className="text-[--muted]">
                  Safety is our top priority on every project we undertake.
                </p>
              </div>
              
              <div className="bg-[--neutral-100] p-6 rounded-[--radius]">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-[--muted]">
                  Our experienced engineers and contractors bring deep industry expertise to every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}