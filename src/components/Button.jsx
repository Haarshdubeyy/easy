import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-md
                 border border-transparent hover:border-gray-600
                 transition-all duration-200 ease-in-out
                 shadow-sm hover:shadow-md
                 tracking-wide text-sm uppercase"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;