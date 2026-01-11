import React from 'react';
import { Sun, Bell, UserCircle } from 'lucide-react';

const Header = () => (
  <header className="h-14 bg-white border-b-2 flex items-center justify-between px-6 shadow-sm relative">
    <div className="w-32"></div> 
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <h1 className="text-xl font-medium text-blue-900 pointer-events-auto">Welcome to idms pro</h1>
    </div>
    <div className="flex items-center gap-4 text-blue-900 z-10">
      <Sun size={18} className="cursor-pointer hover:text-blue-700" />
      <Bell size={18} className="cursor-pointer hover:text-blue-700" />
      <div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden border border-slate-400 cursor-pointer">
        <UserCircle size={32} className="text-slate-600 -ml-0.5 -mt-0.5" />
      </div>
    </div>
  </header>
);

export default Header;
