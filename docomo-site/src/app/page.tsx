import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Meta from '@/components/seo/Meta';

export default function Home() {
  const heroData = {
    title: "Building Excellence in Civil Engineering & Oil Field Services",
    subtitle: "Docomo Technologies Limited - Your trusted partner for civil/electrical engineering and general contracting services across Nigeria.",
    ctas: [
      { text: "Our Services", href: "/services" },
      { text: "Contact Us", href: "/contact", variant: "outline" as const }
    ]
  };

  return (
    <>
      <Meta 
        title="Home" 
        description="Docomo Technologies Ltd - Reliable technology solutions for African businesses" 
      />
      <Hero {...heroData} />
      <ServicesGrid />
      <Testimonials />
      <CTA 
        title="Ready to start your next project?"
        description="Contact Docomo Technologies Limited today to discuss your civil engineering and construction needs. We deliver quality results on time."
        buttonText="Get a Quote"
        buttonHref="/contact"
      />
    </>
  );
}