import Meta from '@/components/seo/Meta';

export default function Projects() {
  const projects = [
    { id: '1', name: 'E-commerce Platform', client: 'TechStart Ltd', status: 'In Progress', progress: 75 },
    { id: '2', name: 'Banking App', client: 'FinServe Ltd', status: 'Review', progress: 90 },
    { id: '3', name: 'Healthcare System', client: 'MediCare Inc', status: 'Completed', progress: 100 },
    { id: '4', name: 'Logistics Tracker', client: 'TransGlobal', status: 'Planning', progress: 10 },
  ];

  return (
    <>
      <Meta 
        title="Projects" 
        description="Manage projects in the Docomo Technologies admin dashboard" 
      />
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <button className="bg-[--color-brand] text-white px-4 py-2 rounded-[--radius] hover:bg-[--color-brand-dark] transition-colors">
            New Project
          </button>
        </div>
        
        <div className="bg-white rounded-[--radius] p-6 shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[--neutral-200]">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Project</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[--neutral-200]">
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[--text]">{project.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[--muted]">{project.client}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        project.status === 'Completed' ? 'bg-[--success] text-white' :
                        project.status === 'In Progress' ? 'bg-[--warning] text-white' :
                        project.status === 'Review' ? 'bg-[--accent] text-white' :
                        'bg-[--neutral-200] text-[--text]'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-[--neutral-200] rounded-full h-2">
                        <div 
                          className="bg-[--color-brand] h-2 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-[--muted] mt-1">{project.progress}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-[--color-brand] hover:text-[--color-brand-dark] mr-3">
                        Edit
                      </button>
                      <button className="text-[--danger] hover:text-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}