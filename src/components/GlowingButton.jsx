// Mock 3:
import React from "react";
import "./GlowingButton.css";

const colorMap = {
  moon: "neon-cyan",
  aurora: "neon-green",
  cosmic: "neon-purple",
  // fallback
  default: "neon-cyan"
};

export default function GlowingButton({
  href,
  children,
  color = "moon",
  target = "_self",
}) {
  const neonClass = colorMap[color] || colorMap.default;
  
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`neon-button ${neonClass}`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
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
