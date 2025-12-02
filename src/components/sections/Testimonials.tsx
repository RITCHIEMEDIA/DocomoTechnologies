import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Adeola Johnson',
      role: 'Project Manager, Federal Housing Authority',
      content: 'DOCOMO Technologies delivered exceptional road construction and drainage work at our Federal Housing Estate. Professional service, quality materials, and completed ahead of schedule.',
      avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Emeka Okonkwo',
      role: 'Operations Director, Niger Delta Oil Services',
      content: 'Their oil field site development expertise is outstanding. DOCOMO handled our complex terrain challenges with innovative solutions. Zero safety incidents throughout the project.',
      avatar: 'https://images.unsplash.com/photo-1628149321186-7d4c5b1170f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww',
    },
    {
      name: 'Chidinma Eze',
      role: 'CEO, Owerri Commercial Ventures',
      content: 'Our 4-story commercial building was completed on time with excellent electrical and structural engineering. DOCOMO\'s attention to detail and quality craftsmanship exceeded expectations.',
      avatar: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-[--muted] max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[--neutral-100] rounded-[--radius] p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-[--muted] text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-[--neutral-800] italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}