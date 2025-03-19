import { Sun, Moon, User } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-900 shadow-md py-3 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold dark:text-white">My App</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
        <button className="p-2 rounded-full bg-gray-300 dark:bg-gray-700">
          <User />
        </button>
      </div>
    </nav>
  );
}
