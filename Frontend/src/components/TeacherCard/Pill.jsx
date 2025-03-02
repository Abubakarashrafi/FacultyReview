import React from 'react';

const Pill = ({ text }) => {
  return (
    <div className="inline-flex items-center justify-center bg-blue-600/10  text-xs font-medium px-4 py-0.5 rounded-full whitespace-normal break-words max-w-full hover:bg-blue-200 transition-colors">
      {text}
    </div>
  );
};

export default Pill;