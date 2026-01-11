import React from 'react';
import { 
  LayoutDashboard, Activity, Map, Brain, Users, TrendingUp, 
  ShoppingCart, BarChart3, Wallet, Box, Eye, FileText, Settings 
} from 'lucide-react';
import SidebarLink from '../ui/SidebarLink';

const Sidebar = () => {
  return (
    <aside className="w-52 bg-white border-r border-slate-200 flex flex-col">
      <nav className="flex-1 overflow-y-auto py-2 mt-10">
        <SidebarLink icon={<LayoutDashboard size={16}/>} label="Dashboard" />
        <SidebarLink icon={<Activity size={16}/>} label="Activity Login" />
        <SidebarLink icon={<Map size={16}/>} label="Project Navigator" />
        <SidebarLink icon={<Brain size={16}/>} label="Inhpl Mindmap" />
        <SidebarLink icon={<Users size={16}/>} label="Human Resource" />
        <SidebarLink icon={<TrendingUp size={16}/>} label="Sales" />
        <SidebarLink icon={<ShoppingCart size={16}/>} label="Purchase" />
        <SidebarLink icon={<BarChart3 size={16}/>} label="Productivity" />
        <SidebarLink icon={<Wallet size={16}/>} label="Accounts" />
        <SidebarLink icon={<Box size={16}/>} label="WMS" />
        <SidebarLink icon={<Eye size={16}/>} label="Smart View" />
        <SidebarLink icon={<FileText size={16}/>} label="Record Management" />
        <SidebarLink icon={<Settings size={16}/>} label="Master" />
      </nav>
    </aside>
  );
};

export default Sidebar;