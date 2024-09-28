import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-300 to-purple-400 border-b border-red-500 font-semibold'
    : 'text-transparent text-white font-semibold';
  
  return (
    <button onClick={selectTab} className={`mr-3 font-bold ${buttonClasses}`}>
      {children}
    </button>
  );
};

export default TabButton;
