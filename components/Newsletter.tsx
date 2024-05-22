"use client";
import { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission 
    setSubmitted(true);
  };

  return (
    <div className="w-full py-16 bg-gradient-to-r from-gray-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Join Our Newsletter
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Stay updated with the latest news and exclusive offers.
          </p>
        </div>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mt-8 sm:mx-auto sm:max-w-lg sm:flex"
          >
            <div className="min-w-0 flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-3 border border-transparent text-base rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        ) : (
          <p className="mt-4 text-lg leading-6 text-green-200">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
