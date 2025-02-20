import React from "react";
import { Link } from "react-router-dom";
import { Train, UserCircle } from "lucide-react";
import { useAuthStore } from "../store/authStore";

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-purple-200 font-semibold text-2xl text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Home Link */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Train size={24} />
          <span>IRCTC Clone</span>
        </Link>

        {/* Authentication Section */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="flex items-center space-x-1">
                <UserCircle size={20} />
                <span>Profile</span>
              </Link>

              <button
                onClick={logout}
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-600 px-4 py-2 rounded">
                Login
              </Link>

              <Link to="/register" className="text-green-600 px-4 py-2 rounded">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
