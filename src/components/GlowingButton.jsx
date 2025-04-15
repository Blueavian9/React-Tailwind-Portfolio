// Mock 3: 
import React from "react";

const colorMap = {
  green: "from-green-300 via-green-600 to-green-900",
  orange: "from-orange-300 via-orange-600 to-orange-900",
  pink: "from-pink-300 via-pink-600 to-pink-900",
};

export default function GlowingButton({ href, children, color = "green", target = "_self" }) {
  const gradient = colorMap[color] || colorMap.green;

  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={`relative inline-block px-6 py-3 rounded-full font-semibold text-white transition-transform transform hover:scale-105 shadow-md group`}
    >
      <span
        className={`absolute inset-0 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-300 ease-in-out bg-gradient-to-r ${gradient}`}
      ></span>
      <span className="relative z-10">{children}</span>
    </a>
  );
}

















//  Mock 2: 
// const GlowingButton = ({
//   children,
//   color = "pink",
//   href = "#",
//   target = "_self",
// }) => {
//   const glowingColors = {
//     pink: "hsl(var(--neon-pink))",
//     green: "hsl(var(--neon-green))",
//     orange: "hsl(var(--neon-orange))",
//   };

//   const glowingColor = glowingColors[color] || glowingColors.pink;

//   return (
//     <a
//       href={href}
//       target={target}
//       rel={target === "_blank" ? "noopener noreferrer" : undefined}
//       className="neon-button inline-block px-4 py-2 rounded font-bold text-white text-xl"
//       style={{ color: glowingColor, borderColor: glowingColor }}
//     >
//       {children}
//     </a>
//   );
// };

// export default GlowingButton;



// Mock 1:
//  const NeonButton = ({ children, color = "pink" }) => {
//   const neonColor = {
//     pink: "hsl(var(--neon-pink))",
//     green: "hsl(var(--neon-green))",
//     orange: "hsl(var(--neon-orange))",
//   }[color];

//   return (
//     <a
//       href="#"
//       className="neon-button inline-block px-4 py-2 rounded font-bold text-white text-xl"
//       style={{ color: neonColor, borderColor: neonColor }}
//     >
//       {children}
//     </a>
//   );
// };

// export default NeonButton;
