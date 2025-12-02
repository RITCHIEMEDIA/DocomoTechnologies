import Button from '@/components/ui/Button';

interface CaseStudyCardProps {
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
  slug: string;
}

export default function CaseStudyCard({ title, description, metrics, image, slug }: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-[--radius] overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-[--muted] mb-4">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-[--color-brand]">{metric.value}</div>
              <div className="text-sm text-[--muted]">{metric.label}</div>
            </div>
          ))}
        </div>
        
        <Button href={`/projects/${slug}`} variant="ghost" size="sm">
          View Case Study
        </Button>
      </div>
    </div>
  );
}