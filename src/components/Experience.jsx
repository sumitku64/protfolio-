// Experience.jsx
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-white text-center">
          Experience
        </h2>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            MERN Stack Developer Intern
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            BrainyBeam Info-Tech Pvt. Ltd. &middot; Jan 2025 – April 2025
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
            <li>Designed and developed responsive full-stack web applications using the MERN stack.</li>
            <li>Created and integrated secure RESTful APIs using Node.js and Express.js.</li>
            <li>Implemented JWT-based authentication and role-based authorization.</li>
            <li>Deployed applications using cloud platforms like Render and Vercel.</li>
          </ul>
       
      </motion.div>
    </section>
  );
};
