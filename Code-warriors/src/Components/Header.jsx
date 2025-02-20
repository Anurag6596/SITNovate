import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Train, Phone, Info, Home } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
            >
              <Phone size={18} />
              <span>Contact</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
            >
              <Info size={18} />
              <span>About</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 text-blue-700">
            <Train size={20} />
            <span className="font-semibold">Indian Railways</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
};