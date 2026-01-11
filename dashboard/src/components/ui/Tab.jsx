import React from 'react';

const Tab = ({ label, active }) => (
  <div className={`px-6 py-3 text-[11px] font-bold cursor-pointer transition-colors ${active ? 'text-blue-900 border-b-2 border-blue-900' : 'text-blue-900 opacity-40 hover:opacity-100'}`}>
    {label}
  </div>
);

export default Tab;
