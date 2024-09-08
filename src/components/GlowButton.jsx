import * as React from "react";


const GlowButton = ({ children }) => {
  return (
    <div className="relative inline-block">
      <a 
        href="#" 
        className="
          relative inline-block px-5 py-2.5 
          text-[#03e9f4] text-base uppercase no-underline
          overflow-hidden transition-all duration-500 ease-in-out
          mt-10 tracking-wider
          hover:bg-[#03e9f4] hover:text-white hover:rounded-md
          hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_100px_#03e9f4]
        "
      >
        <span className="absolute top-0 left-[-100%] w-full h-0.5 bg-gradient-to-r from-transparent to-[#03e9f4] animate-[btn-anim1_1s_linear_infinite]"></span>
        <span className="absolute top-[-100%] right-0 w-0.5 h-full bg-gradient-to-b from-transparent to-[#03e9f4] animate-[btn-anim2_1s_linear_infinite_0.25s]"></span>
        <span className="absolute bottom-0 right-[-100%] w-full h-0.5 bg-gradient-to-l from-transparent to-[#03e9f4] animate-[btn-anim3_1s_linear_infinite_0.5s]"></span>
        <span className="absolute bottom-[-100%] left-0 w-0.5 h-full bg-gradient-to-t from-transparent to-[#03e9f4] animate-[btn-anim4_1s_linear_infinite_0.75s]"></span>
        {children}
      </a>
    </div>
  );
};

export default GlowButton;