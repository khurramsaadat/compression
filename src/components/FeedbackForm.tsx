'use client';

import React, { useState } from 'react';

const FeedbackForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md text-center transition-colors duration-300">
        <h2 className="text-2xl font-bold text-green-600 dark:text-green-300 mb-2 transition-colors duration-300">Thank you!</h2>
        <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Your feedback has been received.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300 text-center transition-colors duration-300">Feedback</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-900 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors duration-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-900 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors duration-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1 font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-900 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors duration-300"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-900 dark:hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm; 