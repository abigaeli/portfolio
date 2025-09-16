import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-12 border-t border-gray-300 dark:border-gray-700">
      <p className="text-gray-700 dark:text-gray-300">
        Made with <span className="text-red-500">❤️</span> by Abigaeli Macharia
      </p>
      <p className="text-gray-600 dark:text-gray-400 mt-1">
        Contact: 0114669439
      </p>
      <p className="text-gray-600 dark:text-gray-400 mt-1">
        GitHub: <a href="https://github.com/Gael123abby" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Gael123abby</a> and <a href="https://github.com/abigaeli" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">abigaeli</a>
      </p>
      <p className="text-gray-600 dark:text-gray-400 mt-1">
        &copy; 2025 All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
