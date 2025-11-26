import React from 'react';
import Logo from '../ui/Logo';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header 
      className="bg-gradient-to-b from-primary to-primary/90 shadow-sm fixed w-full z-50 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Logo size="sm" />
            <span className="ml-2 text-xl font-bold text-white font-poppins">HabitVault</span>
          </motion.div>

          {/* Auth Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/login"
                className="text-white/90 hover:text-white px-3 lg:px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                Login
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/signup"
                className="bg-white text-primary px-4 lg:px-6 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:bg-white/95"
              >
                Sign Up
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/signup"
                className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              >
                Join
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;