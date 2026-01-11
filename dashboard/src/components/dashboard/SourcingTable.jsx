import React from 'react';
import Tab from '../ui/Tab';
import TableRow from '../ui/TableRow';

const SourcingTable = () => {
  return (
    <div className="col-span-8 bg-white rounded-2xl shadow-sm border-2 border-purple-400 overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex justify-center border-b">
        <Tab label="Product Details" />
        <Tab label="Product Sourcing Required" active />
        <Tab label="Product Sourcing Not Required" />
      </div>

      <div className="p-4">
        <table className="w-full text-left border-collapse">
          {/* table header */}
          <thead className="bg-[#1e293b] text-white text-[10px]">
            <tr>
              <th className="p-3 font-bold text-center w-12">Sr.No</th>
              <th className="p-3 font-bold">Product Name</th>
              <th className="p-3 font-bold">Make</th>
              <th className="p-3 font-bold">Model</th>
              <th className="p-3 font-bold text-center">Quality</th>
              <th className="p-3 font-bold">Target Price</th>
              <th className="p-3 font-bold text-center leading-tight">
                Select Product For Procurement
              </th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className="text-[11px] text-blue-900">
            <TableRow 
              id="1" 
              name="Non-Contact Infrared Forehead Temperature Measuring Device" 
              make="Thermo Fisher Scientific" 
              model="MA02" 
              qty="10" 
              price="$ 75000.00" 
            />
            <TableRow 
              id="2" 
              name="RT-PCR Machine" 
              make="Thermo Fisher" 
              model="QuantStudio 5" 
              qty="2" 
              price="$ 14,520.00" 
            />
            <TableRow 
              id="3" 
              name="Digital ECG Machine" 
              make="BPL Medical" 
              model="Cardiart 9108D" 
              qty="5" 
              price="$ 544.00" 
            />
          </tbody>
        </table>

        {/* action button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-900 text-white px-10 py-2 rounded-lg font-bold text-xs shadow-md uppercase transition-transform hover:scale-105">
            Create Procurement
          </button>
        </div>
      </div>
    </div>
  );
};

export default SourcingTable;
