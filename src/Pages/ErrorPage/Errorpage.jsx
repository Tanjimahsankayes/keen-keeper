import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-800 text-white px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-extrabold mb-4 animate-pulse">404</h1>
        <h2 className="text-3xl font-bold mb-3">Oops! Page Not Found</h2>
        <p className="text-lg opacity-90 mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:scale-105 transition duration-300"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-indigo-600 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
