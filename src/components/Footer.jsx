// Footer.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" border-none bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white py-8 mt-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
        >
          {/* Personal Branding */}
          

          {/* Social Links */}
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com/sumitku64" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/sumit-kumar-7b631b29a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a href="mailto:sk64sumit@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
            © 2025 Sumit Kumar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
