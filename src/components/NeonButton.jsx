const NeonButton = ({
  children,
  color = "pink",
  href = "#",
  target = "_self",
}) => {
  const neonColors = {
    pink: "hsl(var(--neon-pink))",
    green: "hsl(var(--neon-green))",
    orange: "hsl(var(--neon-orange))",
  };

  const neonColor = neonColors[color] || neonColors.pink;

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="neon-button inline-block px-4 py-2 rounded font-bold text-white text-xl"
      style={{ color: neonColor, borderColor: neonColor }}
    >
      {children}
    </a>
  );
};

export default NeonButton;













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
