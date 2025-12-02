interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
  readingTime: string;
}

export default function PostCard({ title, excerpt, date, author, tags, slug, readingTime }: PostCardProps) {
  return (
    <div className="bg-white rounded-[--radius] p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-[--neutral-100] text-[--muted] px-3 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-[--muted] mb-4">{excerpt}</p>
      <div className="flex flex-wrap justify-between items-center">
        <div className="text-sm text-[--muted]">
          By {author} on {new Date(date).toLocaleDateString()} • {readingTime}
        </div>
        <button className="text-[--color-brand] hover:text-[--color-brand-dark] font-medium">
          Read More →
        </button>
      </div>
    </div>
  );
}