import React from 'react';
import { Edit2 } from 'lucide-react';
import StageDropdown from '../ui/StageDropdown';
import Chevron from '../ui/Chevron';

const StageWizard = () => (
  <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
    <div className="flex justify-between mb-6 px-2">
      <StageDropdown label="Inquiry Received" count="1" />
      <StageDropdown label="Lead Acknowledgment" count="2" />
      <StageDropdown label="Product Sourcing" count="3" />
      <StageDropdown label="Price Shared" count="3" />
      <StageDropdown label="Quotation Shared" count="3" />
      <StageDropdown label="Follow Up" count="3" />
      <StageDropdown label="Victory Stage" count="3" />
    </div>

    <div className="flex h-10 mb-6 gap-1">
      <Chevron label="Inquiry Received" status="completed" first />
      <Chevron label="Lead Acknowledgment" status="completed" />
      <Chevron label="Product Sourcing" status="completed" />
      <Chevron label="Price Shared" status="upcoming" />
      <Chevron label="Quotation Shared" status="upcoming" />
      <Chevron label="Victory Stage" status="upcoming" />
    </div>

    <div className="flex flex-wrap gap-x-8 gap-y-2 mb-4 text-[11px] text-blue-900 font-bold">
      {['Customer Details','Contact Person','Contact Directory','Consignee Details','Consignee Directory','Feedback form','Complaint form'].map(link => (
        <span key={link} className="flex items-center gap-1 cursor-pointer hover:underline">
          {link} <Edit2 size={12} className="text-blue-900" />
        </span>
      ))}
    </div>

    <div className="text-[11px] text-blue-900 flex flex-wrap gap-x-4 gap-y-1 mb-6 pt-2 font-medium italic">
        <span>Opportunity ID: 673273474</span>
        <span className="text-slate-300 font-normal not-italic">|</span>
        <span>Date: 11/09/2024</span>
    </div>
  </section>
);

export default StageWizard;
