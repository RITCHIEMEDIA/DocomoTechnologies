import Meta from '@/components/seo/Meta';
import { getServices } from '@/lib/api/cmsClient';

export async function generateStaticParams() {
  const services = await getServices();
  
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({ params }: { params: { slug: string } }) {
  const services = await getServices();
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    return (
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Service Not Found</h1>
            <p className="text-xl text-muted">
              The service you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Service-specific content
  const getServiceContent = (slug: string) => {
    const content: Record<string, any> = {
      'civil-engineering': {
        overview: 'Docomo Technologies Limited provides comprehensive civil engineering services across Nigeria, specializing in infrastructure development, road construction, structural engineering, and drainage systems. Our experienced team delivers projects that meet international standards while considering local requirements and environmental factors.',
        benefits: [
          'Professional structural design and analysis',
          'Compliance with Nigerian building codes and regulations',
          'Advanced surveying and site assessment',
          'Quality materials sourcing and testing',
          'Project management from concept to completion',
          'Cost-effective solutions without compromising quality'
        ],
        process: [
          { title: 'Site Assessment', desc: 'Comprehensive evaluation of site conditions, soil testing, and environmental impact analysis' },
          { title: 'Design & Planning', desc: 'Detailed engineering designs, structural calculations, and project specifications' },
          { title: 'Approvals', desc: 'Obtaining necessary permits and regulatory approvals from relevant authorities' },
          { title: 'Construction', desc: 'Professional execution with quality control and safety management' },
          { title: 'Testing & Handover', desc: 'Final inspection, testing, and project documentation delivery' }
        ],
        applications: [
          'Road and highway construction',
          'Bridge and culvert design',
          'Building foundations and structures',
          'Drainage and water management systems',
          'Land development and site preparation'
        ]
      },
      'electrical-engineering': {
        overview: 'Our electrical engineering services cover the complete spectrum of power systems design, installation, and maintenance for residential, commercial, and industrial projects. We ensure safe, efficient, and reliable electrical installations that meet all safety standards.',
        benefits: [
          'Professional electrical system design',
          'Compliance with Nigerian electrical codes',
          'Energy-efficient solutions',
          'Safety-first approach to all installations',
          'Preventive maintenance programs',
          'Emergency repair services available'
        ],
        process: [
          { title: 'Load Assessment', desc: 'Evaluation of power requirements and electrical load calculations' },
          { title: 'System Design', desc: 'Comprehensive electrical layout, panel design, and circuit planning' },
          { title: 'Installation', desc: 'Professional installation of wiring, panels, and electrical equipment' },
          { title: 'Testing & Commissioning', desc: 'Complete system testing and certification' },
          { title: 'Maintenance', desc: 'Regular maintenance and support services' }
        ],
        applications: [
          'Power distribution systems',
          'Industrial electrical installations',
          'Lighting design and installation',
          'Generator installation and integration',
          'Electrical upgrades and retrofits'
        ]
      },
      'oil-field-services': {
        overview: 'Docomo Technologies Limited provides specialized oil field services for the petroleum industry, including site preparation, infrastructure development, and equipment installation. Our team has extensive experience working in challenging environments while maintaining the highest safety standards.',
        benefits: [
          'Experienced in oil and gas sector requirements',
          'Strict adherence to HSE protocols',
          'Specialized equipment and trained personnel',
          'Minimal environmental impact approach',
          'Emergency response capabilities',
          'Integration with existing operations'
        ],
        process: [
          { title: 'Site Survey', desc: 'Detailed assessment of site conditions and access requirements' },
          { title: 'Planning', desc: 'Development of work plans, safety procedures, and logistics' },
          { title: 'Mobilization', desc: 'Equipment and personnel deployment to site' },
          { title: 'Execution', desc: 'Professional execution with continuous safety monitoring' },
          { title: 'Demobilization', desc: 'Site restoration and project closeout' }
        ],
        applications: [
          'Oil field site preparation',
          'Access road construction',
          'Equipment installation support',
          'Pipeline support infrastructure',
          'Site maintenance services'
        ]
      },
      'general-contracting': {
        overview: 'As a full-service general contractor, we manage construction projects from initial planning through final delivery. Our comprehensive approach ensures seamless coordination of all trades, timely completion, and quality results.',
        benefits: [
          'Single point of contact for entire project',
          'Experienced project management team',
          'Coordination of multiple trades and suppliers',
          'Quality control at every stage',
          'Transparent pricing and budgeting',
          'On-time project delivery commitment'
        ],
        process: [
          { title: 'Pre-Construction', desc: 'Project planning, budgeting, and scheduling' },
          { title: 'Design Coordination', desc: 'Working with architects and engineers on project requirements' },
          { title: 'Procurement', desc: 'Materials sourcing and subcontractor management' },
          { title: 'Construction', desc: 'Day-to-day project management and quality oversight' },
          { title: 'Closeout', desc: 'Final inspection, punch list completion, and handover' }
        ],
        applications: [
          'Commercial building projects',
          'Residential construction',
          'Renovation and remodeling',
          'Industrial facilities',
          'Multi-trade project coordination'
        ]
      },
      'building-construction': {
        overview: 'Docomo Technologies Limited delivers quality building construction services for residential and commercial projects. We combine traditional craftsmanship with modern construction techniques to create durable, functional, and aesthetically pleasing structures.',
        benefits: [
          'Quality workmanship and materials',
          'Experienced construction crews',
          'Project scheduling and timeline management',
          'Building code compliance',
          'Value engineering options',
          'Warranty and after-sales support'
        ],
        process: [
          { title: 'Foundation Work', desc: 'Site preparation, excavation, and foundation construction' },
          { title: 'Structural Work', desc: 'Column, beam, and slab construction' },
          { title: 'Envelope', desc: 'Walls, roofing, windows, and doors installation' },
          { title: 'Finishing', desc: 'Interior finishes, flooring, painting, and fixtures' },
          { title: 'Final Inspection', desc: 'Quality checks and project handover' }
        ],
        applications: [
          'Residential homes and apartments',
          'Office buildings',
          'Retail spaces',
          'Warehouses',
          'Mixed-use developments'
        ]
      },
      'infrastructure-development': {
        overview: 'We specialize in large-scale infrastructure projects that form the backbone of community development. From roads to water systems, our infrastructure solutions are built to last and serve communities for decades.',
        benefits: [
          'Large-scale project experience',
          'Government and private sector expertise',
          'Environmental sustainability focus',
          'Community impact considerations',
          'Long-term durability design',
          'Comprehensive project documentation'
        ],
        process: [
          { title: 'Feasibility Study', desc: 'Technical and economic viability assessment' },
          { title: 'Master Planning', desc: 'Comprehensive infrastructure design and phasing' },
          { title: 'Approvals & Permits', desc: 'Government approvals and community engagement' },
          { title: 'Implementation', desc: 'Phased construction with quality monitoring' },
          { title: 'Commissioning', desc: 'System testing and operational handover' }
        ],
        applications: [
          'Road networks and highways',
          'Water supply systems',
          'Drainage and sewerage systems',
          'Public facilities',
          'Estate development infrastructure'
        ]
      }
    };
    return content[slug] || content['civil-engineering'];
  };

  const serviceContent = getServiceContent(service.slug);

  return (
    <>
      <Meta 
        title={service.title} 
        description={service.description} 
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-muted mb-12">{service.description}</p>
            
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                {serviceContent.overview}
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Key Benefits</h2>
              <ul className="space-y-2">
                {serviceContent.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Our Process</h2>
              <div className="space-y-6">
                {serviceContent.process.map((step: any, index: number) => (
                  <div key={index} className="border-l-4 border-brand pl-6 py-2">
                    <h3 className="text-lg font-bold mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceContent.applications.map((application: string, index: number) => (
                  <div key={index} className="bg-neutral-100 p-4 rounded-lg">
                    <p className="font-medium">{application}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 border-l-4 border-brand p-6 mt-12 rounded">
                <h3 className="text-xl font-bold mb-2">Why Choose Docomo Technologies Limited?</h3>
                <p className="text-gray-700">
                  With our registration number RC-620534 and as a subsidiary of Noble Environmental & Waste Management Ltd, 
                  we bring proven expertise, professional standards, and commitment to excellence in every project. 
                  Our directors, Nnajiofor Alex O. and Nnajiofor Jerry O., lead a team of experienced professionals 
                  dedicated to delivering quality results.
                </p>
              </div>
            </div>
            
            <div className="bg-neutral-100 rounded-lg p-8 text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-muted mb-6 max-w-2xl mx-auto">
                Contact us today to discuss how our {service.title} services can help you achieve your project goals.
              </p>
              <a href="/contact" className="inline-block bg-brand text-white px-8 py-3 rounded-lg hover:bg-brand-dark transition-colors font-medium">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}