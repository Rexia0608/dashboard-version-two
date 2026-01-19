// pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          The dashboard you're looking for doesn't exist.
        </p>
        <div className="mt-6 space-x-4">
          <Link
            to="/admin"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Go to Admin Dashboard
          </Link>
          <Link
            to="/faculty"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Faculty Dashboard
          </Link>
          <Link
            to="/student"
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Student Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
