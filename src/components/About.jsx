// About.jsx
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-white">About Me</h2>
       <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
  I'm a dedicated <strong className="text-blue-600 dark:text-blue-400">Full Stack Developer</strong> with a strong background in creating scalable, user-friendly web applications. My journey began with a Bachelor’s in Business Administration (Computer Applications) and advanced with a Master’s in Computer Applications at Sri Balaji University, Pune. This academic blend has sharpened both my problem-solving skills and creative thinking.
</p>
<p className="text-gray-700 dark:text-gray-300 text-lg">
  I specialize in <strong className="text-blue-600 dark:text-blue-400">MERN stack development</strong>, seamlessly integrating APIs, and designing intuitive user interfaces. I am passionate about transforming complex challenges into efficient, maintainable code that delivers real-world value.
</p>

      </motion.div>
    </section>
  );
};
