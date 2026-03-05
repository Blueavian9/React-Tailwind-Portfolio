import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
      aria-label="Toggle dark/light mode"
    >
      {theme === "dark" ? (
        <FiSun className="w-6 h-6 text-yellow-300" />
      ) : (
        <FiMoon className="w-6 h-6 text-indigo-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
