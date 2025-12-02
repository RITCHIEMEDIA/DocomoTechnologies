import Button from '@/components/ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export default function ServiceCard({ title, description, icon, slug }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-[--radius] p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-[--muted] mb-4">{description}</p>
      <Button href={`/services/${slug}`} variant="ghost" size="sm">
        Learn more
      </Button>
    </div>
  );
}