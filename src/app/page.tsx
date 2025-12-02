import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Meta from '@/components/seo/Meta';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroData = {
    title: "Building Excellence in Civil Engineering & Oil Field Services",
    subtitle: "DOCOMO Technologies Limited - Your trusted partner for civil/electrical engineering and general contracting services across Nigeria.",
    ctas: [
      { text: "Our Services", href: "/services" },
      { text: "Contact Us", href: "/contact", variant: "outline" as const }
    ]
  };

  const achievements = [
    { number: '50+', label: 'Completed Projects', icon: '🏗️' },
    { number: '15+', label: 'Years Experience', icon: '⭐' },
    { number: '100%', label: 'Client Satisfaction', icon: '😊' },
    { number: '200+', label: 'Expert Team', icon: '👷' },
  ];

  const features = [
    {
      title: 'Civil Engineering Excellence',
      description: 'Road construction, bridges, drainage systems, and infrastructure development across Nigeria.',
      icon: '🛣️',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop&q=80',
    },
    {
      title: 'Oil Field Services',
      description: 'Specialized services for oil and gas sector including site preparation and development.',
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1722553260514-8b97644c7dc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9pbCUyMGZpZWxkJTIwc2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww',
    },
    {
      title: 'Building Construction',
      description: 'Residential and commercial building projects with superior craftsmanship and quality.',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop&q=80',
    },
    {
      title: 'Electrical Engineering',
      description: 'Professional electrical installations, power distribution, and comprehensive electrical systems.',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1635335874521-7987db781153?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const recentProjects = [
    {
      title: 'Federal Housing Estate Roads',
      location: 'Owerri, Imo State',
      category: 'Road Construction',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop&q=80',
      slug: 'federal-housing-estate-roads',
    },
    {
      title: 'Commercial Building Complex',
      location: 'Owerri, Imo State',
      category: 'Building Construction',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
      slug: 'commercial-building-complex',
    },
    {
      title: 'Oil Field Site Development',
      location: 'Niger Delta',
      category: 'Oil Field Services',
      image: 'https://images.unsplash.com/photo-1722553260514-8b97644c7dc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9pbCUyMGZpZWxkJTIwc2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww',
      slug: 'oil-field-site-development',
    },
  ];

  return (
    <>
      <Meta 
        title="Civil Engineering, Oil Field Services & Construction Company in Nigeria"
        description="DOCOMO Technologies Limited - Leading civil engineering, electrical engineering, oil field services, and general contracting company in Owerri, Imo State, Nigeria. Expert road construction, building contractors, infrastructure development, and oil field site services across Nigeria."
        keywords="civil engineering company Nigeria, electrical engineering Owerri, oil field services Niger Delta, construction company Imo State, road construction Nigeria, building contractor Owerri, infrastructure development Nigeria, general contractor Owerri, DOCOMO Technologies, engineering services Nigeria, construction services Owerri, Federal Housing Estate contractor, oil and gas services Nigeria"
      />
      
      {/* Enhanced Hero with Background */}
      <Hero {...heroData} />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services with Images */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A] bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-xl text-[--muted] max-w-3xl mx-auto">
              Comprehensive engineering and construction solutions across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative h-96 rounded-[--radius] overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/90 text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/services" 
              className="inline-block bg-[--color-brand] text-white px-8 py-4 rounded-[--radius] font-semibold text-lg hover:bg-[--color-brand]/90 transition-colors shadow-lg"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[--neutral-100]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[--color-brand]">
                Why Choose DOCOMO Technologies?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 15 years of experience in civil engineering, electrical engineering, and oil field services, 
                we have established ourselves as a trusted name across Nigeria.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✅</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-[--color-brand]">Proven Track Record</h3>
                    <p className="text-gray-700">50+ successfully completed projects across Owerri, Niger Delta, and beyond.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🛡️</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-[--color-brand]">Safety First Culture</h3>
                    <p className="text-gray-700">Zero compromise on safety standards with comprehensive protocols and training.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-[--color-brand]">On-Time Delivery</h3>
                    <p className="text-gray-700">We respect deadlines and deliver projects on schedule without compromising quality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🌟</div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-[--color-brand]">Quality Guarantee</h3>
                    <p className="text-gray-700">100% client satisfaction with superior craftsmanship and materials.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[--radius] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80"
                alt="Construction team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A7BA7]/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <p className="text-2xl font-bold mb-2">Expert Team</p>
                  <p className="text-lg">200+ Professionals Ready to Serve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A] bg-clip-text text-transparent">
              Recent Projects
            </h2>
            <p className="text-xl text-[--muted] max-w-3xl mx-auto">
              Explore our portfolio of successfully completed projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentProjects.map((project, index) => (
              <Link 
                key={index} 
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="relative h-80 rounded-[--radius] overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="absolute top-4 right-4">
                      <span className="bg-[--color-accent] text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[--color-accent] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/90 flex items-center gap-2">
                        <span>📍</span> {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/projects" 
              className="inline-block bg-[--color-brand] text-white px-8 py-4 rounded-[--radius] font-semibold text-lg hover:bg-[--color-brand]/90 transition-colors shadow-lg"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CTA 
        title="Ready to start your next project?"
        description="Contact DOCOMO Technologies Limited today to discuss your civil engineering and construction needs. We deliver quality results on time."
        buttonText="Get a Quote"
        buttonHref="/contact"
      />
    </>
  );
}