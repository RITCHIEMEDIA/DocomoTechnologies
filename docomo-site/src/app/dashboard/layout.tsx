import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: 'Overview', href: '/dashboard' },
    { name: 'Projects', href: '/dashboard/projects' },
    { name: 'Clients', href: '/dashboard/clients' },
    { name: 'Invoices', href: '/dashboard/invoices' },
    { name: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[--neutral-900] text-white">
        <div className="p-6 border-b border-[--neutral-800]">
          <Link href="/dashboard" className="text-2xl font-bold text-[--accent]">
            Docomo Admin
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 px-4 rounded-[--radius] hover:bg-[--neutral-800] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="bg-white border-b border-[--neutral-200] p-4">
          <div className="container flex justify-between items-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="text-[--muted] hover:text-[--text]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="flex items-center space-x-2">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-8 h-8" />
                <span className="text-[--text]">Admin User</span>
              </div>
            </div>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}