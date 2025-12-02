export default function TeamGrid() {
  const teamMembers = [
    {
      id: '1',
      name: 'Adebayo Johnson',
      role: 'Founder & CEO',
      bio: 'Technology visionary with 15+ years of experience in enterprise software development.',
      image: '/assets/illustrations/team1.jpg',
    },
    {
      id: '2',
      name: 'Chidinma Eze',
      role: 'CTO',
      bio: 'Full-stack developer and cloud architect specializing in scalable solutions.',
      image: '/assets/illustrations/team2.jpg',
    },
    {
      id: '3',
      name: 'Emeka Okonkwo',
      role: 'Lead Designer',
      bio: 'UI/UX designer focused on creating intuitive and beautiful user experiences.',
      image: '/assets/illustrations/team3.jpg',
    },
    {
      id: '4',
      name: 'Adunni Ade',
      role: 'Head of Engineering',
      bio: 'Expert in mobile development and DevOps practices.',
      image: '/assets/illustrations/team4.jpg',
    },
  ];

  return (
    <section className="py-20 bg-[--neutral-100]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-xl text-[--muted] max-w-2xl mx-auto">
            Meet the talented individuals leading our technology initiatives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-[--radius] overflow-hidden shadow-md">
              <div className="bg-gray-200 border-2 border-dashed w-full h-64" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[--color-brand] mb-3">{member.role}</p>
                <p className="text-[--muted]">{member.bio}</p>
                <div className="flex space-x-3 mt-4">
                  <a href="#" className="text-[--muted] hover:text-[--color-brand]">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[--muted] hover:text-[--color-brand]">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}