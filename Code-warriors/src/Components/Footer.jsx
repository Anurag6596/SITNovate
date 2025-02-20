import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <Phone size={16} />
                <span>1800-111-139</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail size={16} />
                <span>care@irctc.co.in</span>
              </p>
              <p className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>New Delhi, India</span>
              </p>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Train Time Table</a></li>
              <li><a href="#" className="hover:text-blue-400">Book Meals</a></li>
              <li><a href="#" className="hover:text-blue-400">Cancel Ticket</a></li>
              <li><a href="#" className="hover:text-blue-400">PNR Status</a></li>
            </ul>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Refund Policy</a></li>
            </ul>
          </motion.div>

          {/* Connect With Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin size={24} /></a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p>&copy; 2024 IRCTC. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};