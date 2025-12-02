import Meta from '@/components/seo/Meta';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: '1',
      title: 'Federal Housing Estate Road Network',
      description: 'Complete road construction and drainage system for Federal Housing Estate Egbeda, Owerri.',
      image: '/assets/illustrations/fed.jpg',
      tags: ['Civil Engineering', 'Road Construction'],
      slug: 'federal-housing-estate-roads',
      location: 'Owerri, Imo State',
      duration: '8 months',
      value: '₦50M+',
    },
    {
      id: '2',
      title: 'Oil Field Site Development',
      description: 'Site preparation and infrastructure development for major oil field operations in the Niger Delta.',
      image: '/assets/illustrations/oil.jpg',
      tags: ['Oil Field Services', 'Site Development'],
      slug: 'oil-field-site-development',
      location: 'Niger Delta',
      duration: '12 months',
      value: '₦120M+',
    },
    {
      id: '3',
      title: 'Commercial Building Complex',
      description: 'Multi-story commercial complex with comprehensive electrical and structural engineering in Owerri.',
      image: '/assets/illustrations/mall.jpg',
      tags: ['Building Construction', 'Electrical Engineering'],
      slug: 'commercial-building-complex',
      location: 'Owerri, Imo State',
      duration: '14 months',
      value: '₦85M+',
    },
    {
      id: '4',
      title: 'Public Infrastructure Development',
      description: 'Water supply system and public facility construction for local government development project.',
      image: '/assets/illustrations/water.jpg',
      tags: ['Infrastructure', 'Public Works'],
      slug: 'public-infrastructure-development',
      location: 'Imo State',
      duration: '10 months',
      value: '₦65M+',
    },
  ];

  const stats = [
    { number: '50+', label: 'Completed Projects', icon: '✅' },
    { number: '₦500M+', label: 'Total Project Value', icon: '💰' },
    { number: '100%', label: 'Success Rate', icon: '🎯' },
    { number: '15+', label: 'Years Experience', icon: '⭐' },
  ];

  return (
    <>
      <Meta 
        title="Our Projects - Construction & Engineering Portfolio Nigeria"
        description="Explore our portfolio of successful civil engineering, construction, and oil field projects completed by DOCOMO Technologies Limited across Nigeria. Federal Housing Estate, Niger Delta, and more."
        keywords="construction projects Nigeria, civil engineering portfolio, completed projects Owerri, oil field projects Niger Delta, building construction portfolio, infrastructure projects Imo State, DOCOMO projects, engineering case studies Nigeria"
      />
      
      {/* Hero Section with Background */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&auto=format&fit=crop&q=80"
            alt="Projects portfolio background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A7BA7]/90 to-[#B8CD7A]/80"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Projects</h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Showcasing our completed civil engineering and construction excellence across Nigeria.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-[--color-brand] mb-2">{stat.number}</div>
                <div className="text-base md:text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[--neutral-100]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A] bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-[--muted] max-w-3xl mx-auto">
              Delivering excellence in every project, from roads to infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-[--radius] overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative w-full h-72">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-[--color-accent] text-black px-3 py-2 rounded-full text-sm font-bold">
                        {project.tags[0]}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                        <span>📍</span>
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-[--color-brand] group-hover:text-[--color-accent] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-[--neutral-100] p-3 rounded-lg">
                        <div className="text-xs text-[--muted] mb-1">Duration</div>
                        <div className="font-bold text-[--color-brand]">{project.duration}</div>
                      </div>
                      <div className="bg-[--neutral-100] p-3 rounded-lg">
                        <div className="text-xs text-[--muted] mb-1">Value</div>
                        <div className="font-bold text-[--color-brand]">{project.value}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(1).map((tag, index) => (
                          <span key={index} className="bg-[--neutral-100] text-gray-700 px-3 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-[--color-brand] font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                        View Case Study →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Let's discuss how we can bring your engineering and construction vision to reality with proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-[--color-brand] px-8 py-4 rounded-[--radius] font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg inline-block"
              >
                Start Your Project →
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-[--radius] font-semibold text-lg hover:bg-white/10 transition-colors inline-block"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}