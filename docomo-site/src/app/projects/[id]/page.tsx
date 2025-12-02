import Meta from '@/components/seo/Meta';
import { getProjects } from '@/lib/api/cmsClient';

export async function generateStaticParams() {
  const projects = await getProjects();
  
  return projects.map((project) => ({
    id: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const projects = await getProjects();
  const project = projects.find(p => p.slug === params.id);
  
  if (!project) {
    return (
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
            <p className="text-xl text-[--muted]">
              The project you're looking for doesn't exist or has been moved.
            </p>
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
            
            <div className="bg-gray-200 border-2 border-dashed w-full h-96 mb-12 rounded-[--radius]" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-[--radius] shadow-md">
                <h3 className="font-bold text-lg mb-2">Client</h3>
                <p className="text-[--muted]">TechStart Ltd</p>
              </div>
              <div className="bg-white p-6 rounded-[--radius] shadow-md">
                <h3 className="font-bold text-lg mb-2">Industry</h3>
                <p className="text-[--muted]">E-commerce</p>
              </div>
              <div className="bg-white p-6 rounded-[--radius] shadow-md">
                <h3 className="font-bold text-lg mb-2">Duration</h3>
                <p className="text-[--muted]">6 months</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold mt-12 mb-4">Project Overview</h2>
              <p>
                This project involved developing a comprehensive e-commerce platform for TechStart Ltd, 
                a retail company looking to expand their online presence. The platform needed to support 
                thousands of products, multiple payment methods, and integrate with their existing inventory system.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Challenges</h2>
              <ul>
                <li>Handling high traffic volumes during peak shopping periods</li>
                <li>Ensuring secure payment processing and data protection</li>
                <li>Integrating with multiple third-party services and APIs</li>
                <li>Creating an intuitive user experience across all device types</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Solutions</h2>
              <p>
                Our team implemented a scalable cloud architecture using microservices to handle traffic spikes. 
                We integrated industry-leading payment processors and implemented end-to-end encryption for 
                all sensitive data. The platform was built with a mobile-first approach to ensure optimal 
                performance on all devices.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <div className="text-center p-4 bg-[--neutral-100] rounded-[--radius]">
                  <div className="text-3xl font-bold text-[--color-brand]">+150%</div>
                  <div className="text-[--muted]">Increase in sales</div>
                </div>
                <div className="text-center p-4 bg-[--neutral-100] rounded-[--radius]">
                  <div className="text-3xl font-bold text-[--color-brand]">45%</div>
                  <div className="text-[--muted]">Reduction in cart abandonment</div>
                </div>
                <div className="text-center p-4 bg-[--neutral-100] rounded-[--radius]">
                  <div className="text-3xl font-bold text-[--color-brand]">99.9%</div>
                  <div className="text-[--muted]">Uptime reliability</div>
                </div>
              </div>
            </div>
            
            <div className="bg-[--neutral-100] rounded-[--radius] p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Interested in a similar project?</h2>
              <p className="text-[--muted] mb-6 max-w-2xl mx-auto">
                Contact us today to discuss how we can help you achieve your technology goals.
              </p>
              <button className="btn btn-primary">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}