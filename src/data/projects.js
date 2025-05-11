// src/data/projects.js
import { FaVideo, FaGavel } from 'react-icons/fa';  // Import the icons

export const projects = [
  {
    icon: FaVideo,  // Assign the icon as the component
    title: "AI Video Summarization Tool",
    description: [
      "A web app that summarizes video content using AI by extracting transcripts and generating key points. Built with React, Node.js, AssemblyAI, and Gemini API.",
      
    ],
    tech: ["React", "Node", "Express", "FFmpeg", "AssemblyAI", "Gemini API"],
    liveLink: "https://front-ai-liart.vercel.app/",
    github: "https://github.com/sumitku64"
  },
  {
    icon: FaGavel,  // Assign the icon as the component
    title: "NexusLaw – MERN Stack Legal Blog",
    description: [
      "A MERN stack platform for publishing and managing legal blogs with image uploads, user authentication, and responsive UI using Tailwind CSS.",
      
    ],
    tech: ["MongoDB", "Express", "React", "Node", "Cloudinary", "Multer"],
    liveLink: "https://nexuslaw.in/",
    github: "https://github.com/sumitku64"
  }
];
