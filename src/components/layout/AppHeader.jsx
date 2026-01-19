// components/layout/AppHeader.jsx
import React from "react";
import { Bell, Menu, Search, User } from "lucide-react";

function AppHeader({ title, role, onMenuClick }) {
  const getRoleColor = () => {
    switch (role) {
      case "admin":
        return "bg-red-600";
      case "faculty":
        return "bg-green-600";
      case "student":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 rounded-lg ${getRoleColor()} flex items-center justify-center`}
            >
              <span className="text-white font-semibold text-sm">
                {role.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">EnrollPlus</h1>
              <p className="text-sm text-gray-600 capitalize">
                {role} Dashboard
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="hidden md:flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium">Profile</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
