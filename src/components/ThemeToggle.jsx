import { FaSun, FaMoon } from "react-icons/fa6";
const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200/80 text-slate-900 shadow-sm shadow-slate-900/5 transition-all duration-200 hover:bg-slate-300 dark:bg-slate-800/80 dark:text-yellow-300 dark:hover:bg-slate-700/80"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;
