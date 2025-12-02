import Button from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctas: {
    text: string;
    href: string;
    variant?: 'primary' | 'outline' | 'ghost';
  }[];
}

export default function Hero({ title, subtitle, ctas }: HeroProps) {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl text-[--muted] mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {ctas.map((cta, index) => (
              <Button
                key={index}
                href={cta.href}
                variant={cta.variant || 'primary'}
                size="lg"
              >
                {cta.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}