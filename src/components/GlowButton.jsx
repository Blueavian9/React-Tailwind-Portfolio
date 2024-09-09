import React from 'react';

const GlowButton = ({ children }) => {
  return (
    <button className="relative inline-block px-8 py-4 border border-transparent text-white font-bold text-lg uppercase tracking-wide transition-all hover:bg-green-600 hover:shadow-lg overflow-hidden">
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-blue-500 animate-[btn-anim1_1s_linear_infinite]"></span>
      <span className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-green-500 to-blue-500 animate-[btn-anim2_1s_linear_infinite_0.25s]"></span>
      <span className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-green-500 to-blue-500 animate-[btn-anim3_1s_linear_infinite_0.5s]"></span>
      <span className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-green-500 to-blue-500 animate-[btn-anim4_1s_linear_infinite_0.75s]"></span>
    </button>
  );
};

export default GlowButton;