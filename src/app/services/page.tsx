import Meta from '@/components/seo/Meta';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const serviceHighlights = [
    {
      title: 'Civil Engineering',
      description: 'Comprehensive civil engineering solutions including road construction, bridges, and drainage systems.',
      image: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2l2aWwlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D',
      icon: '🛣️',
      features: ['Road Construction', 'Bridge Design', 'Drainage Systems', 'Site Development'],
    },
    {
      title: 'Electrical Engineering',
      description: 'Professional electrical installations, power distribution, and comprehensive electrical systems.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop&q=80',
      icon: '⚡',
      features: ['Power Distribution', 'Electrical Installations', 'System Design', 'Maintenance'],
    },
    {
      title: 'Oil Field Services',
      description: 'Specialized services for oil and gas sector including site preparation and development.',
      image: 'https://images.unsplash.com/photo-1722553260514-8b97644c7dc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9pbCUyMGZpZWxkJTIwc2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww',
      icon: '⚙️',
      features: ['Site Preparation', 'Infrastructure Development', 'Equipment Support', 'Operations Support'],
    },
  ];

  const benefits = [
    {
      icon: '✅',
      title: 'Quality Delivery',
      description: 'We deliver high-quality engineering and construction projects on time and within budget.',
      stat: '100%',
      statLabel: 'On-Time Delivery',
    },
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'Safety is our top priority on every project we undertake with zero compromise.',
      stat: 'Zero',
      statLabel: 'Safety Incidents',
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Our experienced engineers and contractors bring deep industry expertise to every project.',
      stat: '200+',
      statLabel: 'Professionals',
    },
    {
      icon: '🌟',
      title: 'Client Satisfaction',
      description: 'Dedicated to exceeding client expectations with superior craftsmanship and service.',
      stat: '100%',
      statLabel: 'Satisfaction Rate',
    },
  ];

  return (
    <>
      <Meta 
        title="Our Services - Civil Engineering, Electrical Engineering & Oil Field Services"
        description="Professional civil engineering, electrical engineering, and oil field services. General contracting and construction solutions by DOCOMO Technologies Limited in Owerri, Nigeria."
        keywords="civil engineering services Nigeria, electrical engineering Owerri, oil field services Niger Delta, road construction services, building construction Nigeria, infrastructure development, general contracting Imo State, engineering services Nigeria, construction contractor Owerri"
      />
      
      {/* Hero Section with Background */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&auto=format&fit=crop&q=80"
            alt="Engineering services background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A7BA7]/90 to-[#B8CD7A]/80"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Comprehensive engineering and construction solutions tailored to your project needs.
            </p>
          </div>
        </div>
      </div>

      {/* Service Highlights with Images */}
      <section className="py-20 bg-white">
        <div className="container">
          {serviceHighlights.map((service, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[--color-brand]">{service.title}</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[--color-accent] text-xl">✓</span>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`relative h-96 rounded-[--radius] overflow-hidden shadow-2xl ${
                index % 2 === 1 ? 'lg:order-1' : ''
              }`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Services Grid */}
      <section className="py-20 bg-[--neutral-100]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A] bg-clip-text text-transparent">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-[--muted] max-w-3xl mx-auto">
              Explore our full range of engineering and construction services
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A] bg-clip-text text-transparent">
              Why Choose DOCOMO Technologies?
            </h2>
            <p className="text-xl text-[--muted] max-w-3xl mx-auto">
              Experience the DOCOMO difference in every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-[--neutral-100] to-white p-8 rounded-[--radius] shadow-lg hover:shadow-xl transition-all border-t-4 border-[--color-brand] text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <div className="text-4xl font-bold text-[--color-brand] mb-2">{benefit.stat}</div>
                <div className="text-sm text-[--color-accent] font-semibold mb-4">{benefit.statLabel}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Contact us today to discuss how we can bring your engineering and construction vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-[--color-brand] px-8 py-4 rounded-[--radius] font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg inline-block"
              >
                Get a Quote →
              </Link>
              <Link 
                href="/projects" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-[--radius] font-semibold text-lg hover:bg-white/10 transition-colors inline-block"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}