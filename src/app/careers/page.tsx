import Meta from '@/components/seo/Meta';

export default function Careers() {
  const jobOpenings = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Lagos, Nigeria (Remote Available)',
      description: 'We are looking for an experienced frontend developer to join our team.',
      requirements: [
        '5+ years of experience with React',
        'Strong TypeScript skills',
        'Experience with modern CSS frameworks',
        'Good understanding of web performance',
      ],
    },
    {
      id: '2',
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Lagos, Nigeria (Remote Available)',
      description: 'Join our backend team to build scalable systems.',
      requirements: [
        '3+ years of Node.js experience',
        'Experience with databases (SQL/NoSQL)',
        'Knowledge of cloud platforms (AWS/GCP)',
        'Understanding of security best practices',
      ],
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Lagos, Nigeria (Remote Available)',
      description: 'Create beautiful and intuitive user experiences for our products.',
      requirements: [
        'Portfolio demonstrating strong design skills',
        'Proficiency in Figma or similar tools',
        'Understanding of user research methods',
        'Experience with design systems',
      ],
    },
  ];

  return (
    <>
      <Meta 
        title="Careers" 
        description="Join our team at Docomo Technologies Ltd and help build the future of technology in Africa." 
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-[--muted]">
              Help us build the future of technology in Africa.
            </p>
          </div>
          
          <div className="bg-[--neutral-100] rounded-[--radius] p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Culture</h2>
            <p className="text-[--muted] mb-6">
              At Docomo Technologies, we believe in fostering an environment of innovation, collaboration, and growth. We're a diverse team of passionate technologists working to solve real-world problems for African businesses.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-[--radius]">
                <h3 className="font-bold text-lg mb-2">Continuous Learning</h3>
                <p className="text-[--muted]">
                  We invest in our team's growth with training, conferences, and learning resources.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-[--radius]">
                <h3 className="font-bold text-lg mb-2">Work-Life Balance</h3>
                <p className="text-[--muted]">
                  We respect our team's time and encourage a healthy balance between work and life.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-[--radius]">
                <h3 className="font-bold text-lg mb-2">Impact</h3>
                <p className="text-[--muted]">
                  Your work will directly impact businesses and communities across Africa.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
            
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-white rounded-[--radius] p-6 shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-[--neutral-100] text-[--muted] px-3 py-1 rounded-full text-sm">
                          {job.department}
                        </span>
                        <span className="bg-[--neutral-100] text-[--muted] px-3 py-1 rounded-full text-sm">
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 btn btn-primary">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-[--muted] mb-4">{job.description}</p>
                  
                  <div>
                    <h4 className="font-bold mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-[--muted]">{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}