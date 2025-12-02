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
    },
    {
      id: '2',
      title: 'Oil Field Site Development',
      description: 'Site preparation and infrastructure development for major oil field operations in the Niger Delta.',
      image: '/assets/illustrations/oil.jpg',
      tags: ['Oil Field Services', 'Site Development'],
      slug: 'oil-field-site-development',
    },
    {
      id: '3',
      title: 'Commercial Building Complex',
      description: 'Multi-story commercial complex with comprehensive electrical and structural engineering in Owerri.',
      image: '/assets/illustrations/mall.jpg',
      tags: ['Building Construction', 'Electrical Engineering'],
      slug: 'commercial-building-complex',
    },
    {
      id: '4',
      title: 'Public Infrastructure Development',
      description: 'Water supply system and public facility construction for local government development project.',
      image: '/assets/illustrations/water.jpg',
      tags: ['Infrastructure', 'Public Works'],
      slug: 'public-infrastructure-development',
    },
  ];

  return (
    <>
      <Meta 
        title="Our Projects" 
        description="Explore our portfolio of successful civil engineering and construction projects completed by Docomo Technologies Limited." 
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-[--muted]">
              Showcasing our completed civil engineering and construction projects across Nigeria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-[--radius] overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative w-full h-64">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[--muted] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-[--neutral-100] text-[--muted] px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="mt-4 inline-block text-[--color-brand] hover:text-[--color-brand-dark] font-medium">
                    View Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}