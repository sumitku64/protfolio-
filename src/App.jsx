// App.jsx
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    scroll.scrollToTop();
    // Apply dark mode to HTML
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="space-y-16 px-4 sm:px-8 max-w-5xl mx-auto">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
