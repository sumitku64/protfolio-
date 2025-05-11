// Skills.jsx
import { motion } from "framer-motion";
import {
  SiJavascript, SiPython, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql, SiHtml5, SiCss3, SiPostman,
  SiJsonwebtokens, SiGit, SiGithub
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandRedux } from "react-icons/tb";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
  { name: "React.js", icon: <SiReact className="text-blue-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "REST APIs", icon: <SiPostman className="text-orange-500" /> },
  { name: "JWT Auth", icon: <SiJsonwebtokens className="text-green-500" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
  { name: "Redux", icon: <TbBrandRedux  className="text-blue-500" /> },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="text-center max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-white">
          Skills
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              className="relative flex flex-col items-center p-4 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              {/* Glow Effect (Now Positioned Properly) */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-400 to-purple-500 blur-md z-10 pointer-events-none"></div>
              
              <div className="relative z-20 text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="relative z-20 text-sm font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
