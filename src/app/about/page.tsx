import Meta from '@/components/seo/Meta';

export default function About() {
  return (
    <>
      <Meta 
        title="About Us - Leading Civil Engineering & Construction Company in Nigeria"
        description="DOCOMO Technologies Limited (RC-620534) - Leading civil engineering, electrical engineering, oil field services company in Owerri, Imo State. Subsidiary of Noble Environmental & Waste Management Ltd. Expert construction contractors serving Nigeria."
        keywords="about DOCOMO Technologies, civil engineering company Nigeria, construction company Owerri, oil field services Niger Delta, electrical engineering Imo State, RC-620534, Noble Environmental, engineering firm Nigeria, building contractors Owerri, infrastructure development Nigeria"
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Docomo Technologies Limited</h1>
            <p className="text-xl text-[--muted]">
              A subsidiary of Noble Environmental & Waste Management Ltd - Delivering excellence in civil engineering and oil field services since establishment.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p>
              Docomo Technologies Limited (RC-620534) is a leading provider of oil field services, civil and electrical engineering solutions, and general contracting services across Nigeria. As a proud subsidiary of Noble Environmental & Waste Management Ltd, we bring together expertise, reliability, and commitment to excellence in every project we undertake.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Company Information</h2>
            <ul>
              <li><strong>Registration Number:</strong> RC-620534</li>
              <li><strong>Legal Address:</strong> No 6th Avenue 62nd Road House 1, Federal Housing Estate Egbeda, Owerri, Imo State, Nigeria</li>
              <li><strong>Contact:</strong> 08037856714, 07081993027</li>
              <li><strong>Parent Company:</strong> Noble Environmental & Waste Management Ltd</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
            <p>
              To deliver exceptional civil engineering, electrical engineering, and oil field services that exceed client expectations while maintaining the highest standards of safety, quality, and environmental responsibility.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Our Vision</h2>
            <p>
              To be the most trusted and preferred general contractor and engineering firm in Nigeria, recognized for innovation, integrity, and sustainable development practices.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Core Values</h2>
            <ul>
              <li><strong>Excellence:</strong> We strive for the highest quality in every project we deliver.</li>
              <li><strong>Integrity:</strong> We conduct business with honesty, transparency, and ethical practices.</li>
              <li><strong>Safety:</strong> We prioritize the safety of our workers, clients, and communities.</li>
              <li><strong>Reliability:</strong> Our clients trust us to deliver projects on time and within budget.</li>
              <li><strong>Innovation:</strong> We embrace modern engineering solutions and sustainable practices.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Leadership</h2>
            <p>
              Docomo Technologies Limited is led by experienced directors who bring deep industry knowledge and commitment to excellence:
            </p>
            <ul>
              <li><strong>Nnajiofor Alex O.</strong> - Director</li>
              <li><strong>Nnajiofor Jerry O.</strong> - Director</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}