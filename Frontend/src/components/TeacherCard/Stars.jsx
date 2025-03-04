import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating,size }) => {
    // Total number of stars
    const totalStars = 5;

    // Calculate the number of full, half, and empty stars
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className={`flex items-center text-[${size}px]`}>
            {/* Render full stars */}
            {Array.from({ length: fullStars }, (_, index) => (
                <FaStar key={`full-${index}`} className="mr-[4px] text-blue-600" />
            ))}

            {/* Render half star if needed */}
            {hasHalfStar && <FaStarHalfAlt key="half" className="mr-[4px] text-blue-600" />}

            {/* Render empty stars */}
            {Array.from({ length: emptyStars }, (_, index) => (
                <FaRegStar key={`empty-${index}`} className="mr-[4px] text-[#ccc]" />
            ))}
        </div>
    );
};

export default StarRating;