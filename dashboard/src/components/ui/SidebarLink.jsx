import React from 'react';

const SidebarLink = ({ icon, label }) => (
  <div className="flex items-center gap-3 px-4 py-2.5 text-blue-900">
    <span className="opacity-100">{icon}</span>
    <span className="text-[12px] font-medium">{label}</span>
  </div>
);

export default SidebarLink;