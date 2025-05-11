import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export const Contact = () => {
  const formRef = useRef(null);
  const [state, handleSubmit] = useForm("xeoglqaj");

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-8 lg:px-0 bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-600 dark:text-white">
          Contact Me
        </h2>
        
        {/* Success Message */}
        {state.succeeded && (
          <p className="text-green-500 mb-4 text-base sm:text-lg">
            Thanks for your message!
          </p>
        )}
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 max-w-full">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
          >
            {state.submitting ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};
