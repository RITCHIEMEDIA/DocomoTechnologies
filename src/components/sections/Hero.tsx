import Button from '@/components/ui/Button';
import Image from 'next/image';

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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&auto=format&fit=crop&q=80"
          alt="Construction background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
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

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4A7BA7" />
              <stop offset="100%" stopColor="#B8CD7A" />
            </linearGradient>
          </defs>
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#waveGradient)"/>
        </svg>
      </div>
    </section>
  );
}