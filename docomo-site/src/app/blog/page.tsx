import Meta from '@/components/seo/Meta';

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
    },
    {
      id: '2',
      title: 'Safety Standards in Oil Field Operations',
      excerpt: 'Essential safety protocols and equipment requirements for oil field service operations.',
      date: '2025-09-22',
      author: 'Nnajiofor Jerry O.',
      tags: ['Oil Field Services', 'Safety', 'Best Practices'],
      slug: 'safety-standards-oil-field-operations',
    },
    {
      id: '3',
      title: 'Sustainable Building Practices for Nigerian Climate',
      excerpt: 'How to incorporate sustainable and energy-efficient designs in building construction projects.',
      date: '2025-08-30',
      author: 'Nnajiofor Alex O.',
      tags: ['Building Construction', 'Sustainability', 'Engineering'],
      slug: 'sustainable-building-practices-nigerian-climate',
    },
  ];

  return (
    <>
      <Meta 
        title="Blog" 
        description="Insights and expertise on civil engineering, construction, and oil field services from Docomo Technologies Limited." 
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-[--muted]">
              Industry insights and expertise from our engineering team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-[--radius] p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="bg-[--neutral-100] text-[--muted] px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-[--muted] mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap justify-between items-center">
                  <div className="text-sm text-[--muted]">
                    By {post.author} on {new Date(post.date).toLocaleDateString()}
                  </div>
                  <a href={`/blog/${post.slug}`} className="text-[--color-brand] hover:text-[--color-brand-dark] font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}