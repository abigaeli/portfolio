import React from 'react';

function Projects() {
  return (
    <section className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
        Welcome to my projects showcase! Here you will find some of the cool things I've built, combining creativity and technology to solve real-world problems.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-4">
          <img src="/assets/project1.png" alt="Project 1" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project 1</h2>
          <p className="text-gray-700 dark:text-gray-300">Description of project 1 highlighting key features and technologies used.</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-4">
          <img src="/assets/project2.png" alt="Project 2" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project 2</h2>
          <p className="text-gray-700 dark:text-gray-300">Description of project 2 highlighting key features and technologies used.</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-4">
          <img src="/assets/project3.png" alt="Project 3" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Project 3</h2>
          <p className="text-gray-700 dark:text-gray-300">Description of project 3 highlighting key features and technologies used.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
