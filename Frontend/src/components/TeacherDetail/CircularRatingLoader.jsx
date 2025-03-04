import React from 'react';

const CircularRatingLoader = ({ rating, label, icon }) => {
  
  const getStrokeColor = (rating) => {
    if (rating < 2) return '#EF4444'; 
    if (rating < 4) return '#F59E0B'; 
    return '#10B981'; 
  };

 
  const circumference = 2 * Math.PI * 45; 
  const strokeDashoffset = circumference - (rating / 5) * circumference;

  return (
    <div className="flex flex-col items-center ">
      <div className="relative w-24 h-24 -z-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
        
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#E5E7EB"
            strokeWidth="10"
          />
        
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke={getStrokeColor(rating)}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)" 
          />
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-gray-700">
            {rating}
          </span>
        </div>
      </div>
      
      <div className="mt-2 flex items-center gap-2">
        {icon} 
        <p className="text-sm font-medium text-gray-600">{label}</p>
      </div>
    </div>
  );
};

export default CircularRatingLoader;