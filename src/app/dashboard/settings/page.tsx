import Meta from '@/components/seo/Meta';

export default function Settings() {
  return (
    <>
      <Meta 
        title="Settings" 
        description="Manage settings in the Docomo Technologies admin dashboard" 
      />
      <div>
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[--radius] p-6 shadow-md">
              <h2 className="text-lg font-bold mb-4">Settings Menu</h2>
              <ul className="space-y-2">
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-[--radius] bg-[--neutral-100] text-[--color-brand] font-medium">
                    General
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-[--radius] hover:bg-[--neutral-100]">
                    Profile
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-[--radius] hover:bg-[--neutral-100]">
                    Security
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-[--radius] hover:bg-[--neutral-100]">
                    Notifications
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 rounded-[--radius] hover:bg-[--neutral-100]">
                    Billing
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[--radius] p-6 shadow-md">
              <h2 className="text-xl font-bold mb-6">General Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[--text] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Docomo Technologies Ltd"
                    className="w-full px-4 py-2 border border-[--neutral-200] rounded-[--radius] focus:ring-[--color-brand] focus:border-[--color-brand]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[--text] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="info@docomotech.com"
                    className="w-full px-4 py-2 border border-[--neutral-200] rounded-[--radius] focus:ring-[--color-brand] focus:border-[--color-brand]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[--text] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+234 123 456 7890"
                    className="w-full px-4 py-2 border border-[--neutral-200] rounded-[--radius] focus:ring-[--color-brand] focus:border-[--color-brand]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[--text] mb-2">
                    Address
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="123 Tech Street, Lagos, Nigeria"
                    className="w-full px-4 py-2 border border-[--neutral-200] rounded-[--radius] focus:ring-[--color-brand] focus:border-[--color-brand]"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[--text] mb-2">
                    Timezone
                  </label>
                  <select
                    defaultValue="Africa/Lagos"
                    className="w-full px-4 py-2 border border-[--neutral-200] rounded-[--radius] focus:ring-[--color-brand] focus:border-[--color-brand]"
                  >
                    <option value="Africa/Lagos">Africa/Lagos</option>
                    <option value="Africa/Accra">Africa/Accra</option>
                    <option value="Africa/Nairobi">Africa/Nairobi</option>
                    <option value="Africa/Johannesburg">Africa/Johannesburg</option>
                  </select>
                </div>
                
                <div className="pt-4">
                  <button className="bg-[--color-brand] text-white px-6 py-2 rounded-[--radius] hover:bg-[--color-brand-dark] transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}