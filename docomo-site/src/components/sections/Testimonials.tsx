export default function Testimonials() {
  const testimonials = [
    {
      name: 'Adeola Johnson',
      role: 'CTO, TechStart Nigeria',
      content: 'Docomo transformed our digital infrastructure completely. Their team delivered beyond our expectations.',
      avatar: '/assets/illustrations/avatar1.png',
    },
    {
      name: 'Emeka Okonkwo',
      role: 'Director, FinServe Ltd',
      content: 'The cybersecurity solution implemented by Docomo has given us peace of mind. Highly recommended!',
      avatar: '/assets/illustrations/avatar2.png',
    },
    {
      name: 'Chidinma Eze',
      role: 'CEO, AgriTech Solutions',
      content: 'Our mobile app development project was completed on time and within budget. Excellent communication throughout.',
      avatar: '/assets/illustrations/avatar3.png',
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
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
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