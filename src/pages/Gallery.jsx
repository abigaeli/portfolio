import React from 'react';

function Gallery() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p className="text-gray-700 dark:text-gray-300">A peek into my design and illustration work.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg">Artwork 1</div>
        <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg">Artwork 2</div>
        <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-lg">Artwork 3</div>
      </div>
    </section>
  );
}

export default Gallery;
