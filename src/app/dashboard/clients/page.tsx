import Meta from '@/components/seo/Meta';

export default function Clients() {
  const clients = [
    { id: '1', name: 'TechStart Ltd', email: 'contact@techstart.com', projects: 3, status: 'Active' },
    { id: '2', name: 'FinServe Ltd', email: 'info@finserve.com', projects: 1, status: 'Active' },
    { id: '3', name: 'MediCare Inc', email: 'support@medicare.com', projects: 2, status: 'Active' },
    { id: '4', name: 'TransGlobal', email: 'hello@transglobal.com', projects: 1, status: 'Inactive' },
  ];

  return (
    <>
      <Meta 
        title="Clients" 
        description="Manage clients in the Docomo Technologies admin dashboard" 
      />
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Clients</h1>
          <button className="bg-[--color-brand] text-white px-4 py-2 rounded-[--radius] hover:bg-[--color-brand-dark] transition-colors">
            Add Client
          </button>
        </div>
        
        <div className="bg-white rounded-[--radius] p-6 shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[--neutral-200]">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Projects</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[--neutral-200]">
                {clients.map((client) => (
                  <tr key={client.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[--text]">{client.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[--muted]">{client.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[--text]">{client.projects}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        client.status === 'Active' ? 'bg-[--success] text-white' : 'bg-[--neutral-200] text-[--text]'
                      }`}>
                        {client.status}
                      </span>
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