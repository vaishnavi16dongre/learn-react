import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import StageWizard from './components/dashboard/StageWizard';
import SourcingTable from './components/dashboard/SourcingTable';
import TaskManager from './components/dashboard/TaskManager';

const App = () => {
  return (
    <div className="flex h-screen bg-[#f1f5f9] font-sans text-sm text-blue-900">
   
      <Sidebar />

      {/* 2. Main Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
      
        <Header />

        {/* 4. Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {/* Top Progress Section */}
          <StageWizard />

          {/* Bottom Grid: Table (Left) and Tasks (Right) */}
          <div className="grid grid-cols-12 gap-4">
            <SourcingTable />
            <TaskManager />
          </div>

          {/* 5. Sticky/Bottom Footer */}
          <footer className="bg-white p-3 rounded-xl border border-slate-200 flex justify-between items-center mt-2">
            <p className="text-[11px] text-slate-400 font-medium italic">
              Note: Once you done with procurement, you can move forward
            </p>
            <div className="flex gap-2">
              <button className="px-10 py-2 bg-slate-200 text-blue-900 rounded-md font-bold text-xs uppercase hover:bg-slate-300 transition-colors">
                Previous
              </button>
              <button className="px-10 py-2 bg-blue-900 text-white rounded-md font-bold text-xs uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-md">
                Submit & Next
              </button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;

