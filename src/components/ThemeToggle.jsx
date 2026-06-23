import { FaSun, FaMoon } from "react-icons/fa6";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-200 bg-amber-100 text-amber-500 hover:bg-amber-200 dark:bg-slate-800/80 dark:text-yellow-300 dark:hover:bg-slate-700/80"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <FaSun className="w-6 h-6 text-yellow-300" />
      ) : (
        <FaMoon className="w-6 h-6 text-amber-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
