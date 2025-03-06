import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating,size }) => {
    
    const totalStars = 5;

   
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className={`flex items-center text-[${size}px]`}>
           
            {Array.from({ length: fullStars }, (_, index) => (
                <FaStar key={`full-${index}`} className="mr-[4px] text-blue-600" />
            ))}

           
            {hasHalfStar && <FaStarHalfAlt key="half" className="mr-[4px] text-blue-600" />}

            
            {Array.from({ length: emptyStars }, (_, index) => (
                <FaRegStar key={`empty-${index}`} className="mr-[4px] text-[#ccc]" />
            ))}
        </div>
    );
};

export default StarRating;