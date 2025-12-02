import Meta from '@/components/seo/Meta';
import AuthorProfile from '@/components/blog/AuthorProfile';
import { getBlogPosts } from '@/lib/api/cmsClient';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const posts = await getBlogPosts();
  const post = posts.find(p => p.slug === params.slug);
  
  if (!post) {
    return (
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
            <p className="text-xl text-muted">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Post-specific content
  const getPostContent = (slug: string) => {
    const content: Record<string, any> = {
      'best-practices-road-construction-nigeria': {
        intro: 'Nigeria\'s tropical climate and diverse terrain present unique challenges for road construction. Understanding and implementing best practices is essential for creating durable infrastructure that can withstand heavy rainfall, high temperatures, and increasing traffic demands.',
        sections: [
          {
            title: 'Understanding Nigerian Climate Challenges',
            content: 'The Nigerian climate, characterized by heavy rainfall during monsoon seasons and intense heat during dry periods, significantly impacts road construction and longevity. Proper drainage systems are crucial to prevent water damage and erosion. At Docomo Technologies Limited, we prioritize climate-appropriate designs that account for seasonal variations and local environmental conditions.'
          },
          {
            title: 'Material Selection and Quality Control',
            content: 'Using the right materials is fundamental to road durability. We recommend high-quality asphalt mixes with appropriate binder content for the Nigerian climate. Aggregates must be properly graded and tested for strength. Our quality control processes include regular testing of materials at every stage, from sourcing to final application, ensuring compliance with Nigerian standards and international best practices.'
          },
          {
            title: 'Proper Drainage Systems',
            content: 'Effective drainage is perhaps the most critical factor in Nigerian road construction. We design comprehensive drainage systems that include side drains, culverts, and proper road camber to quickly channel water away from the road surface. This prevents water infiltration that can weaken the sub-base and lead to premature failure.'
          },
          {
            title: 'Subgrade Preparation',
            content: 'A solid foundation is essential for long-lasting roads. We conduct thorough soil testing and prepare the subgrade with proper compaction techniques. In areas with poor soil conditions, we implement soil stabilization methods using cement or lime to improve bearing capacity and reduce settlement issues.'
          },
          {
            title: 'Quality Assurance and Testing',
            content: 'Throughout the construction process, we implement rigorous quality assurance protocols. This includes density testing, material sampling, and adherence to specified construction techniques. Regular inspections ensure that every layer meets the required standards before proceeding to the next phase.'
          }
        ],
        conclusion: 'Building durable roads in Nigeria requires expertise, proper planning, and adherence to best practices. At Docomo Technologies Limited (RC-620534), we combine our experience with international standards to deliver road construction projects that stand the test of time and serve communities for decades to come.'
      },
      'safety-standards-oil-field-operations': {
        intro: 'Safety is the cornerstone of all oil field operations. In the petroleum industry, adherence to strict safety standards is not just a regulatory requirement—it\'s a moral imperative that protects lives, preserves the environment, and ensures operational success.',
        sections: [
          {
            title: 'Health, Safety, and Environment (HSE) Protocols',
            content: 'At Docomo Technologies Limited, we implement comprehensive HSE management systems aligned with international standards. This includes risk assessments before every operation, detailed safety procedures, and continuous monitoring. All personnel undergo mandatory HSE training before deployment to oil field sites, ensuring everyone understands their role in maintaining a safe working environment.'
          },
          {
            title: 'Personal Protective Equipment (PPE)',
            content: 'Proper PPE is the first line of defense in oil field operations. We require all workers to use appropriate safety equipment including hard hats, safety boots, flame-resistant clothing, safety glasses, and hearing protection. Specialized operations may require additional equipment such as breathing apparatus, fall protection gear, or chemical-resistant suits. Regular inspections ensure all PPE is in good condition and properly maintained.'
          },
          {
            title: 'Emergency Response Preparedness',
            content: 'We maintain comprehensive emergency response plans for all potential scenarios including fires, gas leaks, oil spills, and medical emergencies. Our teams are trained in first aid, firefighting, and evacuation procedures. Emergency equipment including fire extinguishers, eye wash stations, and first aid kits are strategically positioned throughout work sites and regularly inspected.'
          },
          {
            title: 'Equipment Safety and Maintenance',
            content: 'All equipment used in oil field operations undergoes regular inspection and maintenance. We follow manufacturers\' guidelines and industry standards for equipment operation. Operators must be properly trained and certified for the specific equipment they use. Defective equipment is immediately removed from service until properly repaired and tested.'
          },
          {
            title: 'Environmental Protection',
            content: 'Environmental safety is integral to our operations. We implement measures to prevent soil and water contamination, manage waste properly, and minimize our environmental footprint. Spill containment equipment is always available on-site, and all personnel are trained in spill response procedures.'
          },
          {
            title: 'Continuous Safety Training',
            content: 'Safety training is not a one-time event but an ongoing commitment. We conduct regular safety briefings, toolbox talks, and refresher courses. Our safety culture encourages all personnel to report hazards and near-misses, enabling us to continuously improve our safety practices.'
          }
        ],
        conclusion: 'Safety excellence in oil field operations requires unwavering commitment, proper training, and strict adherence to protocols. As a subsidiary of Noble Environmental & Waste Management Ltd, Docomo Technologies Limited brings a strong safety culture to every project, ensuring our teams return home safely while delivering exceptional results.'
      },
      'sustainable-building-practices-nigerian-climate': {
        intro: 'As Nigeria continues to develop, sustainable building practices are becoming increasingly important. Designing buildings that are both energy-efficient and adapted to the Nigerian climate not only reduces environmental impact but also creates more comfortable living and working spaces while lowering long-term operational costs.',
        sections: [
          {
            title: 'Climate-Responsive Design',
            content: 'Nigerian climate varies from the humid coastal regions to drier northern areas, requiring adaptable design approaches. We incorporate natural ventilation strategies, proper building orientation, and shading devices to reduce heat gain and improve air circulation. Large overhangs, verandas, and strategic window placement help protect buildings from direct sunlight while allowing natural light to enter.'
          },
          {
            title: 'Energy-Efficient Building Envelope',
            content: 'The building envelope is crucial for energy efficiency in the Nigerian climate. We use materials with good thermal properties including insulated walls, reflective roofing materials, and double-glazed windows where appropriate. Proper insulation reduces the cooling load, decreasing reliance on air conditioning and lowering energy consumption.'
          },
          {
            title: 'Sustainable Materials Selection',
            content: 'We prioritize locally-sourced, sustainable materials that have lower environmental impact and support the local economy. This includes using recycled materials where possible, selecting materials with low embodied energy, and choosing durable options that require less frequent replacement. Local materials are often better adapted to the climate and more readily available for future maintenance.'
          },
          {
            title: 'Water Management and Conservation',
            content: 'Effective water management is essential in sustainable building design. We incorporate rainwater harvesting systems, efficient plumbing fixtures, and greywater recycling where appropriate. Proper site drainage prevents water damage and erosion while managing stormwater runoff responsibly.'
          },
          {
            title: 'Natural Ventilation and Lighting',
            content: 'Maximizing natural ventilation and daylighting reduces energy consumption significantly. We design buildings with cross-ventilation opportunities, high ceilings for heat stratification, and window placement that optimizes natural light penetration. This creates comfortable indoor environments while reducing electricity usage.'
          },
          {
            title: 'Renewable Energy Integration',
            content: 'Given Nigeria\'s abundant sunshine, solar energy integration is increasingly practical. We design buildings with renewable energy systems in mind, including solar panels for hot water and electricity generation. Proper roof design accommodates future solar installations even if not implemented initially.'
          },
          {
            title: 'Lifecycle Considerations',
            content: 'Sustainable building extends beyond construction to consider the entire lifecycle. We design for durability, ease of maintenance, and eventual adaptability or deconstruction. Using quality materials and proper construction techniques ensures buildings serve their purpose for generations while minimizing maintenance requirements.'
          }
        ],
        conclusion: 'Sustainable building practices in Nigeria represent smart investment in the future. At Docomo Technologies Limited, we combine traditional wisdom with modern technology to create buildings that are environmentally responsible, economically viable, and perfectly suited to Nigerian conditions. Contact us to learn how we can bring sustainable design to your next project.'
      }
    };
    return content[slug] || null;
  };

  const postContent = getPostContent(post.slug);

  return (
    <>
      <Meta 
        title={post.title} 
        description={post.excerpt} 
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-neutral-100 text-muted px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="text-muted mb-12">
              By {post.author} on {new Date(post.date).toLocaleDateString()}
            </div>
            
            {postContent && (
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {postContent.intro}
                </p>
                
                {postContent.sections.map((section: any, index: number) => (
                  <div key={index}>
                    <h2 className="text-2xl font-bold mt-8 mb-4">{section.title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {section.content}
                    </p>
                  </div>
                ))}
                
                <h2 className="text-2xl font-bold mt-12 mb-4">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed">
                  {postContent.conclusion}
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-12 rounded">
                  <h3 className="text-xl font-bold mb-2">Get Expert Consultation</h3>
                  <p className="text-gray-700 mb-4">
                    Need professional guidance on your engineering or construction project? 
                    Contact Docomo Technologies Limited today.
                  </p>
                  <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Contact Us
                  </a>
                </div>
              </div>
            )}
            
            <div className="border-t border-b border-neutral-200 py-8 my-12">
              <div className="flex items-center justify-between">
                <a href="/blog" className="flex items-center text-muted hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Blog
                </a>
              </div>
            </div>
            
            <AuthorProfile 
              name={post.author}
              bio={post.author === 'Nnajiofor Alex O.' 
                ? 'Director at Docomo Technologies Limited with extensive expertise in civil engineering and construction management. Leads complex infrastructure projects across Nigeria.'
                : 'Director at Docomo Technologies Limited specializing in electrical engineering and oil field services. Expert in safety management and technical operations.'}
              avatar="/assets/illustrations/author.jpg"
              socials={{
                twitter: "#",
                linkedin: "#"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}