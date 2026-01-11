import React from 'react';
import { Paperclip, Calendar } from 'lucide-react';
import InputField from "../ui/InputField.jsx"
const TaskManager = () => {
  return (
    <div className="col-span-4 bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
      {/* Header Section */}
      <div className="flex justify-between border-b pb-2 mb-4 text-[11px] font-bold text-blue-900">
        <span className="border-b-2 border-blue-900 pb-2 -mb-[9px] flex items-center gap-1">
          <Paperclip size={14} /> Task Manager
        </span>
        <span className="flex items-center gap-1 opacity-70 cursor-pointer hover:opacity-100 transition-opacity">
          Chat View
        </span>
      </div>

      {/* Input Form Section */}
      <div className="space-y-4">
        <InputField label="Order Value" />
        <InputField label="Buying Plan" icon={<Calendar size={12} />} />
        
        {/* Decision Maker Group */}
        <div className="pt-2">
          <p className="text-[11px] font-bold text-blue-900 mb-2 uppercase tracking-wider">
            Purchase Decision Maker
          </p>
          <InputField label="Name" />
          <InputField label="Mobile Number" />
          <InputField label="E - Mail" />
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
