
import React from 'react';

interface TestimonialCardProps {
  name: string;
  text: string;
  location?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  location
}) => {
  return (
    <div className="garden-card p-6">
      <div className="mb-4">
        <svg 
          className="h-8 w-8 text-garden-medium-green opacity-50" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-4">{text}</p>
      <div>
        <p className="font-bold text-garden-dark-green">{name}</p>
        {location && <p className="text-sm text-gray-500">{location}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
