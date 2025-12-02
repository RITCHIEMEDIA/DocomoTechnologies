import Meta from '@/components/seo/Meta';
import { getProjects } from '@/lib/api/cmsClient';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  const projects = await getProjects();
  
  return projects.map((project) => ({
    id: project.slug,
  }));
}

const getProjectContent = (slug: string) => {
  const content: Record<string, any> = {
    'federal-housing-estate-roads': {
      client: 'Federal Housing Estate, Egbeda',
      location: 'Owerri, Imo State',
      duration: '8 months',
      overview: 'DOCOMO Technologies Limited was contracted to design and construct a comprehensive road network and drainage system for the Federal Housing Estate in Egbeda, Owerri. The project encompassed over 3.5 kilometers of residential roads, complete storm drainage infrastructure, and associated civil works to improve accessibility and flood management within the estate.',
      challenges: [
        'Poor soil conditions requiring extensive ground improvement',
        'Managing construction during rainy season without disrupting residents',
        'Coordinating with utility providers for underground service relocation',
        'Ensuring proper drainage to prevent flooding in low-lying areas'
      ],
      solutions: [
        'Conducted comprehensive geotechnical investigation and implemented soil stabilization using cement and laterite mixture',
        'Phased construction approach with temporary access routes to minimize disruption',
        'Advanced planning and coordination meetings with NEPA, water board, and telecom providers',
        'Designed integrated drainage system with proper gradients and outfall channels'
      ],
      results: [
        { value: '3.5km', label: 'Roads Constructed' },
        { value: '100%', label: 'Drainage Coverage' },
        { value: 'Zero', label: 'Flooding Incidents' }
      ],
      impact: 'The completed road network has significantly improved quality of life for estate residents, enhanced property values, and eliminated seasonal flooding that previously affected the area. The project was completed on schedule and within budget, earning commendation from the Federal Housing Authority.'
    },
    'oil-field-site-development': {
      client: 'Major Oil & Gas Operator',
      location: 'Niger Delta Region',
      duration: '12 months',
      overview: 'DOCOMO Technologies Limited executed comprehensive site development and infrastructure works for a major oil field operation in the Niger Delta. The project included land clearing, access road construction, equipment pad preparation, drainage systems, and installation of temporary facilities to support drilling and production operations.',
      challenges: [
        'Working in environmentally sensitive swamp and mangrove areas',
        'Ensuring compliance with strict environmental regulations',
        'Managing logistics in remote locations with limited access',
        'Maintaining safety standards in hazardous oil field environment'
      ],
      solutions: [
        'Employed specialized swamp equipment and constructed temporary access platforms',
        'Implemented comprehensive Environmental Management Plan with continuous monitoring',
        'Established forward logistics base and utilized marine transport for equipment and materials',
        'Rigorous HSE training for all personnel and strict adherence to oil industry safety protocols'
      ],
      results: [
        { value: '45 hectares', label: 'Site Developed' },
        { value: '4.2km', label: 'Access Roads' },
        { value: 'Zero', label: 'Lost Time Injuries' }
      ],
      impact: 'The project enabled the client to commence drilling operations ahead of schedule, resulting in significant cost savings. Our environmental management approach ensured zero environmental incidents, and the infrastructure continues to support ongoing field operations reliably.'
    },
    'commercial-building-complex': {
      client: 'Private Commercial Developer',
      location: 'Owerri, Imo State',
      duration: '18 months',
      overview: 'DOCOMO Technologies Limited provided comprehensive building construction, structural engineering, and electrical installation services for a modern 4-story commercial complex in Owerri. The 5,000 square meter development includes retail spaces on the ground floor and office suites on upper floors, with full electrical systems, backup power, and modern amenities.',
      challenges: [
        'Complex architectural design requiring precise structural engineering',
        'Coordinating multiple specialized trades and subcontractors',
        'Ensuring uninterrupted power supply through reliable backup systems',
        'Meeting tight deadlines for tenant move-in commitments'
      ],
      solutions: [
        'Detailed structural analysis and use of reinforced concrete frame construction',
        'Implemented comprehensive project management system with weekly coordination meetings',
        'Installed 250KVA generator with automatic changeover system and UPS for critical loads',
        'Fast-track construction methodology with parallel work streams'
      ],
      results: [
        { value: '5,000m²', label: 'Total Floor Area' },
        { value: '4 Floors', label: 'Stories Completed' },
        { value: '100%', label: 'Occupancy Rate' }
      ],
      impact: 'The completed complex has become a landmark commercial building in Owerri, attracting premium tenants and achieving full occupancy within three months of completion. The building\'s modern electrical infrastructure and reliable power systems have been particularly praised by tenants.'
    },
    'public-infrastructure-development': {
      client: 'Local Government Authority',
      location: 'Imo State',
      duration: '14 months',
      overview: 'DOCOMO Technologies Limited was awarded the contract for a comprehensive public infrastructure development project including a modern water supply system serving 15,000 residents, construction of a public health center, and renovation of community facilities. The project was part of a state government initiative to improve rural infrastructure and public services.',
      challenges: [
        'Sourcing reliable water supply in area with limited groundwater',
        'Working within tight government budget constraints',
        'Managing community expectations and ensuring inclusive development',
        'Coordinating with multiple government agencies and stakeholders'
      ],
      solutions: [
        'Conducted hydrogeological survey and developed surface water treatment solution with storage tanks',
        'Value engineering approach to optimize costs while maintaining quality standards',
        'Established community liaison committee and regular stakeholder engagement meetings',
        'Dedicated liaison officer to manage inter-agency coordination and approvals'
      ],
      results: [
        { value: '15,000', label: 'People Served' },
        { value: '8km', label: 'Water Pipeline' },
        { value: '3', label: 'Facilities Built' }
      ],
      impact: 'The project has transformed public service delivery in the community, providing reliable access to clean water and modern healthcare facilities. The success of this project led to DOCOMO being selected for additional government infrastructure projects in neighboring communities.'
    }
  };
  
  return content[slug] || null;
};

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const projects = await getProjects();
  const project = projects.find(p => p.slug === params.id);
  const projectContent = getProjectContent(params.id);
  
  if (!project || !projectContent) {
    return (
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
            <p className="text-xl text-[--muted] mb-8">
              The project you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/projects" className="text-[--color-brand] hover:text-[--color-brand-dark] font-medium">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Meta 
        title={project.title} 
        description={project.description} 
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-[--muted] mb-12">{project.description}</p>
            
            <div className="relative w-full h-96 mb-12 rounded-[--radius] overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-[--radius] shadow-md">
                <h3 className="font-bold text-lg mb-2">Client</h3>
                <p className="text-[--muted]">{projectContent.client}</p>
              </div>
              <div className="bg-white p-6 rounded-[--radius] shadow-md">
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-[--muted]">{projectContent.location}</p>
              </div>
              <div className="bg-white p-6 rounded-[--radius] shadow-md">
                <h3 className="font-bold text-lg mb-2">Duration</h3>
                <p className="text-[--muted]">{projectContent.duration}</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold mt-12 mb-4">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                {projectContent.overview}
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Challenges</h2>
              <ul className="space-y-2">
                {projectContent.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[--color-brand] mr-2 mt-1">•</span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Our Solutions</h2>
              <ul className="space-y-2">
                {projectContent.solutions.map((solution: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[--color-accent] mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                {projectContent.results.map((result: any, index: number) => (
                  <div key={index} className="text-center p-6 bg-[--neutral-100] rounded-[--radius]">
                    <div className="text-3xl font-bold text-[--color-brand] mb-2">{result.value}</div>
                    <div className="text-[--muted]">{result.label}</div>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Project Impact</h2>
              <p className="text-gray-700 leading-relaxed">
                {projectContent.impact}
              </p>
            </div>
            
            <div className="bg-[--neutral-100] rounded-[--radius] p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Interested in a Similar Project?</h2>
              <p className="text-[--muted] mb-6 max-w-2xl mx-auto">
                Contact DOCOMO Technologies Limited today to discuss how we can deliver exceptional results for your civil engineering and construction needs.
              </p>
              <Link href="/contact" className="inline-block bg-[--color-brand] text-white px-6 py-3 rounded-[--radius] font-medium hover:bg-[--color-brand-dark] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}