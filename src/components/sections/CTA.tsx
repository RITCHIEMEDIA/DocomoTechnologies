import Button from '@/components/ui/Button';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTA({ title, description, buttonText, buttonHref }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4A7BA7] to-[#B8CD7A]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Button href={buttonHref} variant="primary" size="lg" className="bg-grey text-[#4A7BA7] hover:bg-gray-800">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}