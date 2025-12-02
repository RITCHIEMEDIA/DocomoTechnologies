import Meta from '@/components/seo/Meta';
import Image from 'next/image';
import TeamGrid from '@/components/sections/TeamGrid';

export default function About() {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '200+', label: 'Team Members' },
  ];

  const values = [
    {
      icon: '🏆',
      title: 'Excellence',
      description: 'We strive for the highest quality in every project we deliver, ensuring superior craftsmanship.',
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices at all times.',
    },
    {
      icon: '⚡',
      title: 'Safety',
      description: 'We prioritize the safety of our workers, clients, and communities in every project.',
    },
    {
      icon: '✓',
      title: 'Reliability',
      description: 'Our clients trust us to deliver projects on time and within budget, every time.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace modern engineering solutions and sustainable construction practices.',
    },
    {
      icon: '🌍',
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible practices in all our operations.',
    },
  ];

  return (
    <>
      <Meta 
        title="About Us - Leading Civil Engineering & Construction Company in Nigeria"
        description="DOCOMO Technologies Limited (RC-620534) - Leading civil engineering, electrical engineering, oil field services company in Owerri, Imo State. Subsidiary of Noble Environmental & Waste Management Ltd. Expert construction contractors serving Nigeria."
        keywords="about DOCOMO Technologies, civil engineering company Nigeria, construction company Owerri, oil field services Niger Delta, electrical engineering Imo State, RC-620534, Noble Environmental, engineering firm Nigeria, building contractors Owerri, infrastructure development Nigeria"
      />
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A] bg-clip-text text-transparent">
              Building Nigeria's Future
            </h1>
            <p className="text-xl text-[--muted] leading-relaxed">
              DOCOMO Technologies Limited - Your trusted partner for world-class civil engineering, 
              electrical engineering, and oil field services across Nigeria.
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mb-20">
          <div className="relative w-full h-96 md:h-[500px] rounded-[--radius] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&auto=format&fit=crop&q=80"
              alt="Construction site with cranes and buildings"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A7BA7]/80 to-[#B8CD7A]/60 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center text-white">
                <p className="text-2xl md:text-3xl font-bold">Excellence in Construction</p>
                <p className="text-lg md:text-xl mt-2">Since Establishment | RC: 620534</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A] py-16 mb-20">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="text-4xl md:text-6xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg md:text-xl opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="container mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[--color-brand]">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                DOCOMO Technologies Limited (RC-620534) stands as a beacon of excellence in Nigeria's 
                construction and engineering sector. As a proud subsidiary of Noble Environmental & 
                Waste Management Ltd, we bring together decades of expertise, cutting-edge technology, 
                and unwavering commitment to quality.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                From the bustling streets of Owerri to the challenging terrains of the Niger Delta, 
                we have left our mark through exceptional civil engineering projects, state-of-the-art 
                electrical installations, and reliable oil field services.
              </p>
              <div className="bg-[--neutral-100] p-6 rounded-[--radius] mt-6">
                <h3 className="font-bold text-lg mb-3 text-[--color-brand]">Company Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Registration:</strong> RC-620534</li>
                  <li><strong>Parent Company:</strong> Noble Environmental & Waste Management Ltd</li>
                  <li><strong>Headquarters:</strong> Owerri, Imo State</li>
                  <li><strong>Email:</strong> service@docomotechnologieslimited.com.ng</li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 rounded-[--radius] overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80"
                alt="Professional construction team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[--color-brand]/60 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-2xl font-bold">Professional Excellence</p>
                  <p className="text-lg mt-2">Trusted Across Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-[--neutral-100] py-16 mb-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-[--radius] shadow-lg border-l-4 border-[--color-brand] relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-5xl mb-4">🎯</div>
                  <h2 className="text-2xl font-bold mb-4 text-[--color-brand]">Our Mission</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To deliver exceptional civil engineering, electrical engineering, and oil field services 
                    that exceed client expectations while maintaining the highest standards of safety, quality, 
                    and environmental responsibility. We are committed to building infrastructure that transforms 
                    communities and drives Nigeria's development.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-[--radius] shadow-lg border-l-4 border-[--color-accent] relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-5xl mb-4">🔭</div>
                  <h2 className="text-2xl font-bold mb-4 text-[--color-brand]">Our Vision</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To be the most trusted and preferred general contractor and engineering firm in Nigeria, 
                    recognized for innovation, integrity, and sustainable development practices. We envision 
                    a future where DOCOMO Technologies is synonymous with quality construction and engineering 
                    excellence across Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Construction Gallery */}
        <div className="container mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[--color-brand]">Our Expertise in Action</h2>
            <p className="text-xl text-[--muted] max-w-3xl mx-auto">
              Witness the quality and scale of our construction projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-[--radius] overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <Image
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&auto=format&fit=crop&q=80"
                alt="Road construction project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-bold text-lg p-4">Road Construction</p>
              </div>
            </div>
            <div className="relative h-64 rounded-[--radius] overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <Image
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&auto=format&fit=crop&q=80"
                alt="Building construction"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-bold text-lg p-4">Building Projects</p>
              </div>
            </div>
            <div className="relative h-64 rounded-[--radius] overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <Image
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&auto=format&fit=crop&q=80"
                alt="Electrical engineering"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-bold text-lg p-4">Electrical Systems</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="container mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[--color-brand]">Our Core Values</h2>
            <p className="text-xl text-[--muted] max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-[--radius] shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[--color-brand]"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[--color-brand]">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-gradient-to-br from-[#4A7BA7]/10 to-[#B8CD7A]/10 py-16 mb-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[--color-brand]">Our Leadership</h2>
              <p className="text-xl text-[--muted] max-w-3xl mx-auto">
                Experienced directors driving excellence and innovation
              </p>
            </div>
            <TeamGrid />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="container mb-20">
          <div className="bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A] rounded-[--radius] p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose DOCOMO Technologies?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="opacity-90">50+ successfully completed projects across Nigeria</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Safety First</h3>
                <p className="opacity-90">Zero compromise on safety standards and protocols</p>
              </div>
              <div>
                <div className="text-5xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
                <p className="opacity-90">100% client satisfaction with superior craftsmanship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}