import React from "react";
import "./NeonButton.css"; // we'll define custom styles here if needed

const NeonButton = ({ children, color = "pink" }) => {
  return (
    <a
      href="#"
      className={`neon-button-${color} relative inline-block text-4xl cursor-pointer no-underline px-4 py-1 rounded border-[0.125em] 
        text-[hsl(var(--neon))] border-[hsl(var(--neon))] font-bold transition duration-150
        shadow-[inset_0_0_0.5em_0_hsl(var(--neon)),_0_0_0.5em_0_hsl(var(--neon))] 
        before:content-[''] before:absolute before:top-[120%] before:left-0 before:w-full before:h-full 
        before:transform before:perspective-[1em] before:rotate-x-[40deg] before:scale-[1_0.35] before:filter blur before:opacity-70 
        after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 
        after:shadow-[0_0_2em_0.5em_hsl(var(--neon))] after:opacity-0 after:bg-[hsl(var(--neon))] after:z-[-1]
        hover:text-[#2a0927] hover:shadow-none hover:before:opacity-100 hover:after:opacity-100
      `}
    >
      {children}
    </a>
  );
};

export default NeonButton;
