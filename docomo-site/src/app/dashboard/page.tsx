import Meta from '@/components/seo/Meta';

export default function Dashboard() {
  const stats = [
    { name: 'Total Projects', value: '24', change: '+4%' },
    { name: 'Active Clients', value: '18', change: '+2%' },
    { name: 'Pending Invoices', value: '7', change: '-1%' },
    { name: 'Revenue', value: '₦2.4M', change: '+12%' },
  ];

  const recentProjects = [
    { id: '1', name: 'E-commerce Platform', client: 'TechStart Ltd', status: 'In Progress', progress: 75 },
    { id: '2', name: 'Banking App', client: 'FinServe Ltd', status: 'Review', progress: 90 },
    { id: '3', name: 'Healthcare System', client: 'MediCare Inc', status: 'Completed', progress: 100 },
  ];

  return (
    <>
      <Meta 
        title="Dashboard" 
        description="Admin dashboard for Docomo Technologies Ltd" 
      />
      <div>
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-[--radius] p-6 shadow-md">
              <h3 className="text-[--muted] text-sm font-medium mb-1">{stat.name}</h3>
              <div className="flex items-baseline">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="ml-2 text-sm text-[--success]">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-[--radius] p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Recent Projects</h2>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div key={project.id} className="border-b border-[--neutral-200] pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{project.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      project.status === 'Completed' ? 'bg-[--success] text-white' :
                      project.status === 'In Progress' ? 'bg-[--warning] text-white' :
                      'bg-[--neutral-200] text-[--text]'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-[--muted] mb-2">{project.client}</p>
                  <div className="w-full bg-[--neutral-200] rounded-full h-2">
                    <div 
                      className="bg-[--color-brand] h-2 rounded-full" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-[--radius] p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-[--neutral-100] hover:bg-[--neutral-200] rounded-[--radius] p-4 text-center transition-colors">
                <div className="bg-[--color-brand] text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="font-medium">New Project</p>
              </button>
              <button className="bg-[--neutral-100] hover:bg-[--neutral-200] rounded-[--radius] p-4 text-center transition-colors">
                <div className="bg-[--accent] text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="font-medium">Add Client</p>
              </button>
              <button className="bg-[--neutral-100] hover:bg-[--neutral-200] rounded-[--radius] p-4 text-center transition-colors">
                <div className="bg-[--success] text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="font-medium">Create Invoice</p>
              </button>
              <button className="bg-[--neutral-100] hover:bg-[--neutral-200] rounded-[--radius] p-4 text-center transition-colors">
                <div className="bg-[--danger] text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-medium">Schedule Meeting</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}