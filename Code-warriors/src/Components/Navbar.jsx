import { Link } from 'react-router-dom';
import { Train, UserCircle } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xl font-bold"
        >
          <Train size={24} />
          <span>IRCTC Clone</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link 
                to="/profile" 
                className="flex items-center space-x-1"
              >
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
              <Link
                to="/login"
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-800 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};