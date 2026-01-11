import React from 'react';

const TableRow = ({ id, name, make, model, qty, price }) => (
  <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
    <td className="p-4 text-center font-bold">{id}</td>
    <td className="p-4 font-bold leading-tight max-w-[200px]">{name}</td>
    <td className="p-4 font-medium">{make}</td>
    <td className="p-4 font-medium">{model}</td>
    <td className="p-4 text-center font-bold">{qty}</td>
    <td className="p-4 font-bold">{price}</td>
    <td className="p-4 text-center">
      <input type="checkbox" className="w-4 h-4 accent-blue-900 border-slate-300 rounded cursor-pointer" />
    </td>
  </tr>
);

export default TableRow;
