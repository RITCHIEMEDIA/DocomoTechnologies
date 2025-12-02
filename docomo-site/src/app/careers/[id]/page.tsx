import Meta from '@/components/seo/Meta';
import JobApplicationForm from '@/components/forms/JobApplicationForm';

// Mock job data - in a real app, this would come from a CMS or database
const jobs = [
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
    responsibilities: [
      'Develop and maintain our web applications',
      'Collaborate with designers and backend developers',
      'Optimize applications for maximum speed and scalability',
      'Participate in code reviews and mentor junior developers',
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
    responsibilities: [
      'Design and implement RESTful APIs',
      'Build and maintain microservices',
      'Ensure system security and data protection',
      'Optimize database queries and performance',
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
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Collaborate with product and engineering teams',
      'Maintain and evolve our design system',
    ],
  },
];

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

export default async function JobDetail({ params }: { params: { id: string } }) {
  const job = jobs.find(j => j.id === params.id);
  
  if (!job) {
    return (
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Job Not Found</h1>
            <p className="text-xl text-[--muted]">
              The job you're looking for doesn't exist or has been filled.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Meta 
        title={job.title} 
        description={job.description} 
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <button className="flex items-center text-[--muted] hover:text-[--color-brand] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Careers
              </button>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[--neutral-100] text-[--muted] px-3 py-1 rounded-full text-sm">
                  {job.department}
                </span>
                <span className="bg-[--neutral-100] text-[--muted] px-3 py-1 rounded-full text-sm">
                  {job.location}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none mb-12">
                  <h2 className="text-2xl font-bold mb-4">Job Description</h2>
                  <p>{job.description}</p>
                  
                  <h2 className="text-2xl font-bold mt-12 mb-4">Responsibilities</h2>
                  <ul>
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-12 mb-4">Requirements</h2>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                  
                  <h2 className="text-2xl font-bold mt-12 mb-4">Benefits</h2>
                  <ul>
                    <li>Competitive salary and equity package</li>
                    <li>Health, dental, and vision insurance</li>
                    <li>Flexible working hours and remote work options</li>
                    <li>Professional development budget</li>
                    <li>Unlimited vacation policy</li>
                    <li>Regular team events and offsites</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-[--radius] p-6 shadow-md sticky top-24">
                  <h2 className="text-2xl font-bold mb-6">Apply for this Position</h2>
                  <JobApplicationForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}