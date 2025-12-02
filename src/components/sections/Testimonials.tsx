import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Adeola Johnson',
      role: 'CTO, TechStart Nigeria',
      content: 'Docomo transformed our digital infrastructure completely. Their team delivered beyond our expectations.',
      avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Emeka Okonkwo',
      role: 'Director, FinServe Ltd',
      content: 'The cybersecurity solution implemented by Docomo has given us peace of mind. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1628149321186-7d4c5b1170f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww',
    },
    {
      name: 'Chidinma Eze',
      role: 'CEO, AgriTech Solutions',
      content: 'Our mobile app development project was completed on time and within budget. Excellent communication throughout.',
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