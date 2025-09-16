import React from 'react';

function Contact() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">Feel free to reach out to me!</p>
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </form>
      <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
        Or contact me directly at: +254114669439
      </p>
    </section>
  );
}

export default Contact;
