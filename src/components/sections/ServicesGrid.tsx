import ServiceCard from '@/components/sections/ServiceCard';

const services = [
  {
    title: 'Civil Engineering',
    description: 'Comprehensive civil engineering solutions including road construction, bridges, drainage systems, and structural works.',
    icon: '🏗️',
    slug: 'civil-engineering',
  },
  {
    title: 'Electrical Engineering',
    description: 'Professional electrical installation, maintenance, and power distribution systems for industrial and commercial projects.',
    icon: '⚡',
    slug: 'electrical-engineering',
  },
  {
    title: 'Oil Field Services',
    description: 'Specialized services for oil and gas sector including site preparation, equipment installation, and maintenance.',
    icon: '🛢️',
    slug: 'oil-field-services',
  },
  {
    title: 'General Contracting',
    description: 'Complete project management and construction services from planning to execution and delivery.',
    icon: '👷',
    slug: 'general-contracting',
  },
  {
    title: 'Building Construction',
    description: 'Residential and commercial building construction with focus on quality, safety, and timely delivery.',
    icon: '🏢',
    slug: 'building-construction',
  },
  {
    title: 'Infrastructure Development',
    description: 'Large-scale infrastructure projects including roads, water systems, and public facilities.',
    icon: '🌉',
    slug: 'infrastructure-development',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-[--neutral-100]">
      <div className="container">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-[--muted] max-w-2xl mx-auto">
            Professional engineering and construction solutions for your projects.
          </p>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}