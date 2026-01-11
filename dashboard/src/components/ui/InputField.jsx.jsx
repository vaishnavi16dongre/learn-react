import React from 'react';
import { Edit2 } from 'lucide-react';

const InputField = ({ label, icon }) => (
  <div className="flex items-center gap-2 border-b border-slate-200 py-1.5 group">
    <label className="text-[11px] text-blue-900 font-bold w-32 flex-shrink-0">{label}:</label>
    <div className="flex-1 flex items-center justify-between">
      <div className="h-4 w-32 border-b border-dotted border-blue-900"></div>
      <div className="flex gap-2 items-center">
        {icon && <span className="text-blue-900">{icon}</span>}
        <Edit2 size={12} className="text-blue-900 cursor-pointer" />
      </div>
    </div>
  </div>
);

export default InputField;
