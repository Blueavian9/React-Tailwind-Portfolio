const NeonButton = ({ children, color = "pink" }) => {
  const neonColor = {
    pink: "hsl(var(--neon-pink))",
    green: "hsl(var(--neon-green))",
    orange: "hsl(var(--neon-orange))",
  }[color];

  return (
    <a
      href="#"
      className="neon-button inline-block px-4 py-2 rounded font-bold text-white text-xl"
      style={{ color: neonColor, borderColor: neonColor }}
    >
      {children}
    </a>
  );
};

export default NeonButton;