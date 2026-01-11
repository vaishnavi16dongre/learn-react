import React from 'react';

const Chevron = ({ label, status, first }) => {
  const colors = {
    completed: 'bg-[#1e293b] text-white',
    upcoming: 'bg-[#e2e5e9] text-[#3b5484]'
  };

  const shapeStyle = {
    clipPath: 'polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%, 8% 50%)',
    marginLeft: '0px' 
  };

  if (first) shapeStyle.clipPath = 'polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)';

  return (
    <div 
      className={`flex-1 flex items-center justify-center text-[10px] font-bold uppercase transition-colors duration-200 h-10 ${colors[status] || colors.upcoming}`}
      style={shapeStyle}
    >
      <span className={first ? 'pl-0' : 'pl-4'}>{label}</span>
    </div>
  );
};

export default Chevron;
