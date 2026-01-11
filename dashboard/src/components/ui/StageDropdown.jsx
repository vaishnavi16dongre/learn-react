import React from 'react';
import { ChevronRight } from 'lucide-react';

const StageDropdown = ({ label, count }) => (
  <div className="flex flex-col items-center">
    <div className="flex items-center gap-1 text-[11px] font-bold text-blue-900">
      <span className="bg-blue-900 text-white w-4 h-4 rounded-full flex items-center justify-center text-[9px] mb-1">{count}</span>
      {label} <ChevronRight size={12} className="rotate-90 ml-1" />
    </div>
  </div>
);

export default StageDropdown;
