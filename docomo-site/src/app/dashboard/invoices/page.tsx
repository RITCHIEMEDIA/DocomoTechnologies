import Meta from '@/components/seo/Meta';

export default function Invoices() {
  const invoices = [
    { id: 'INV-001', client: 'TechStart Ltd', amount: '₦1,200,000', date: '2023-10-15', dueDate: '2023-11-15', status: 'Paid' },
    { id: 'INV-002', client: 'FinServe Ltd', amount: '₦800,000', date: '2023-10-20', dueDate: '2023-11-20', status: 'Pending' },
    { id: 'INV-003', client: 'MediCare Inc', amount: '₦1,500,000', date: '2023-10-25', dueDate: '2023-11-25', status: 'Overdue' },
    { id: 'INV-004', client: 'TransGlobal', amount: '₦600,000', date: '2023-11-01', dueDate: '2023-12-01', status: 'Sent' },
  ];

  return (
    <>
      <Meta 
        title="Invoices" 
        description="Manage invoices in the Docomo Technologies admin dashboard" 
      />
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Invoices</h1>
          <button className="bg-[--color-brand] text-white px-4 py-2 rounded-[--radius] hover:bg-[--color-brand-dark] transition-colors">
            Create Invoice
          </button>
        </div>
        
        <div className="bg-white rounded-[--radius] p-6 shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[--neutral-200]">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Invoice</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Due Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[--muted] uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[--neutral-200]">
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[--text]">{invoice.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[--muted]">{invoice.client}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[--text]">{invoice.amount}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[--muted]">{invoice.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[--muted]">{invoice.dueDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        invoice.status === 'Paid' ? 'bg-[--success] text-white' :
                        invoice.status === 'Pending' ? 'bg-[--warning] text-white' :
                        invoice.status === 'Overdue' ? 'bg-[--danger] text-white' :
                        'bg-[--neutral-200] text-[--text]'
                      }`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-[--color-brand] hover:text-[--color-brand-dark] mr-3">
                        View
                      </button>
                      <button className="text-[--muted] hover:text-[--text]">
                        Download
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