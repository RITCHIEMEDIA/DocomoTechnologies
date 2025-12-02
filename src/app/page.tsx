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
        title="Civil Engineering, Oil Field Services & Construction Company in Nigeria"
        description="DOCOMO Technologies Limited - Leading civil engineering, electrical engineering, oil field services, and general contracting company in Owerri, Imo State, Nigeria. Expert road construction, building contractors, infrastructure development, and oil field site services across Nigeria."
        keywords="civil engineering company Nigeria, electrical engineering Owerri, oil field services Niger Delta, construction company Imo State, road construction Nigeria, building contractor Owerri, infrastructure development Nigeria, general contractor Owerri, DOCOMO Technologies, engineering services Nigeria, construction services Owerri, Federal Housing Estate contractor, oil and gas services Nigeria"
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