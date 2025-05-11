// Navbar.jsx
import { Link } from "react-scroll";
import { Moon, Sun } from "lucide-react";

export const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 shadow-md transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className={`text-2xl font-bold cursor-pointer ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
          Sumit Kumar
        </h1>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className={`cursor-pointer ${darkMode ? "hover:text-blue-400" : "hover:text-blue-600"}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors duration-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </header>
  );
};
