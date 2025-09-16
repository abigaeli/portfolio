import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Navbar() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-gray-800 dark:text-white tracking-wide">
          Abigaeli Macharia
        </div>
        <div className="flex items-center space-x-6">
          {['/', '/about', '/projects', '/gallery', '/blog', '/contact'].map((path, idx) => {
            const names = ['Home', 'About', 'Projects', 'Gallery', 'Blog', 'Contact'];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400 pb-1'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200'
                }
              >
                {names[idx]}
              </NavLink>
            );
          })}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
