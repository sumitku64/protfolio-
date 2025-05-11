// Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center pt-20 
        bg-gradient-to-b from-blue-50 via-white to-blue-100 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl font-bold 
          text-blue-600 dark:text-blue-400 transition-colors duration-300"
      >
        Hi, I'm Sumit Kumar
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg sm:text-xl max-w-xl 
          text-gray-700 dark:text-gray-300 transition-colors duration-300"
      >
        A passionate Full Stack Developer crafting clean, modern, and scalable full-stack web applications with real-world impact.
      </motion.p>
      <div className="mt-6 flex gap-4 flex-wrap justify-center">
        <a
          href="/Sumit_Kumar.pdf"
          download
          className="px-6 py-2 rounded 
            bg-blue-600 text-white hover:bg-blue-700 
            dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
        >
          Download Resume
        </a>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="px-6 py-2 rounded 
            border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white 
            dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 
            transition-colors duration-300 cursor-pointer"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
};
