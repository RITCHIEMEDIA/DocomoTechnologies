import Meta from '@/components/seo/Meta';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      id: '1',
      title: 'Best Practices in Road Construction in Nigeria',
      excerpt: 'Exploring modern techniques and standards for durable road infrastructure in Nigerian climate conditions.',
      date: '2025-10-15',
      author: 'Nnajiofor Alex O.',
      tags: ['Civil Engineering', 'Road Construction', 'Infrastructure'],
      slug: 'best-practices-road-construction-nigeria',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&auto=format&fit=crop&q=80',
      readTime: '5 min read',
    },
    {
      id: '2',
      title: 'Safety Standards in Oil Field Operations',
      excerpt: 'Essential safety protocols and equipment requirements for oil field service operations.',
      date: '2025-09-22',
      author: 'Nnajiofor Jerry O.',
      tags: ['Oil Field Services', 'Safety', 'Best Practices'],
      slug: 'safety-standards-oil-field-operations',
      image: 'https://images.unsplash.com/photo-1594977217222-fdc266acdd27?w=800&auto=format&fit=crop&q=80',
      readTime: '6 min read',
    },
    {
      id: '3',
      title: 'Sustainable Building Practices for Nigerian Climate',
      excerpt: 'How to incorporate sustainable and energy-efficient designs in building construction projects.',
      date: '2025-08-30',
      author: 'Nnajiofor Alex O.',
      tags: ['Building Construction', 'Sustainability', 'Engineering'],
      slug: 'sustainable-building-practices-nigerian-climate',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop&q=80',
      readTime: '7 min read',
    },
  ];

  const categories = [
    { name: 'Civil Engineering', count: 12, icon: '🛣️' },
    { name: 'Oil Field Services', count: 8, icon: '⚙️' },
    { name: 'Building Construction', count: 10, icon: '🏢' },
    { name: 'Safety & Compliance', count: 6, icon: '🛡️' },
  ];

  return (
    <>
      <Meta 
        title="Blog - Engineering Insights & Industry Expertise"
        description="Insights and expertise on civil engineering, construction, and oil field services from DOCOMO Technologies Limited. Stay updated with latest industry trends and best practices."
        keywords="civil engineering blog Nigeria, construction industry insights, oil field services blog, engineering best practices, construction safety Nigeria, infrastructure development blog, building construction tips Nigeria"
      />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&auto=format&fit=crop&q=80"
            alt="Blog background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A7BA7]/90 to-[#B8CD7A]/80"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Engineering Insights</h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Industry expertise, best practices, and technical insights from our engineering team.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="mb-8">
            <span className="text-[--color-accent] font-semibold text-lg">🌟 Featured Article</span>
          </div>
          <Link href={`/blog/${posts[0].slug}`} className="block group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[--neutral-100] rounded-[--radius] overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-96 lg:h-full">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {posts[0].tags.map((tag, index) => (
                    <span key={index} className="bg-[--color-accent] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[--color-brand] group-hover:text-[--color-accent] transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-[--muted]">
                  <div className="flex items-center gap-2">
                    <span>👤</span>
                    <span>{posts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📅</span>
                    <span>{new Date(posts[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🕒</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-[--radius] text-center text-white hover:bg-white/20 transition-all cursor-pointer">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A] bg-clip-text text-transparent">
              Recent Articles
            </h2>
            <p className="text-xl text-[--muted]">
              Stay updated with the latest insights from our engineering experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(1).map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="bg-white rounded-[--radius] overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-[--color-accent] text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {post.tags[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[--color-brand] group-hover:text-[--color-accent] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-[--muted]">
                      <div className="flex items-center gap-2">
                        <span>👤</span>
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🕒</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[--neutral-100]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A] rounded-[--radius] p-12 text-white">
            <div className="text-5xl mb-4">📧</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Subscribe to our newsletter for the latest engineering insights, project updates, and industry news.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-[--color-brand] px-8 py-4 rounded-[--radius] font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg inline-block"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}