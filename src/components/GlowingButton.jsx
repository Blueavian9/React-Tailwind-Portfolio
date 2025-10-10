import React from "react";
import "./GlowingButton.css";

const colorMap = {
  moon: "neon-cyan",
  aurora: "neon-green",
  cosmic: "neon-purple",
  default: "neon-cyan",
};

export default function GlowingButton({
  href,
  children,
  color = "moon",
  target = "_self",
  "aria-label": ariaLabel,
  ...props
}) {
  const neonClass = colorMap[color] || colorMap.default;

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`neon-button ${neonClass}`}
      aria-label={ariaLabel}
      {...props}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </a>
  );
}
