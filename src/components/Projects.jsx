import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-600 dark:text-white">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
            Explore my technical creations built with modern web technologies.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 mb-4 rounded-lg bg-gray-300 dark:bg-blue-900/30 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-red-400 dark:text-blue-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <ul className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-1">
                  {project.description.map((line, idx) => (
                    <li key={idx} className="mb-2 flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1"></span>
                      {line}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 border-t pt-4 border-gray-100 dark:border-gray-700">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-sm"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 transition-colors text-sm"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};