// Education.jsx
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section
      id="education"
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
          Education
        </h2>

        {/* Reusable Education Card */}
        {[
          {
            title: "Master of Computer Applications (MCA)",
            subtitle: "Sri Balaji University, Pune • 2023 – 2025 • CGPA: 7.61",
          },
          {
            title: "Bachelor of Business Administration in Computer Applications (BBA-CA)",
            subtitle: "Sinhgad College, Pune • 2020 – 2023 • CGPA: 8.67",
          },
          {
            title: "12th Grade (CBSE)",
            subtitle: "ST Paul Birsinghpur, Bihar • 2019 – 2020 • 70.6%",
          },
          {
            title: "10th Grade (CBSE)",
            subtitle: "Campus Public School, Bihar • 2017 – 2018 • 59%",
          },
        ].map((edu, index) => (
          <div
            key={index}
            className="mb-6 bg-blue-50 dark:bg-gray-900 shadow-md rounded-2xl p-6 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {edu.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{edu.subtitle}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
