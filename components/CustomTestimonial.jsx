import React from 'react';

const CustomTestimonial = ({ avatar, testimonial, name, position }) => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center">
      <img
        src={avatar}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <p className="text-gray-700 mb-4">
        {testimonial}
      </p>
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <span className="text-gray-600 text-sm">{position}</span>
    </div>
  );
};

export default CustomTestimonial;
