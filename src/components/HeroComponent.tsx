import React from "react";
import { Vortex } from "../components/ui/vortex";
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { Button } from "../components/ui/moving-border";

export default function VortexDemo() {
  return (
    <div className="w-auto mx-auto rounded-md  h-[46rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <img
          src="personal/myphoto.jpeg" // Replace with your image path
          alt="Descriptive Text"
          className="mt-20 w-32 h-32 md:w-52 md:h-52 rounded-full object-cover"
        />
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Chetan Kumar Nageshwarrao Chitturi
        </h2>
        <p className="text-cyan-300 text-sm md:text-2xl w-full mt-6 text-center text-justify">
        Empowering technological transformation and crafting cutting-edge solutions, I am a dedicated Software Developer with over three years of professional experience and a robust educational background from Binghamton University. My expertise spans full-stack development, where I have actively engaged in creating dynamic web applications, AI-driven enhancements, and system optimizations. This experience reflects a deep commitment to elevating user experiences and enhancing operational efficiencies. Skilled in adapting advanced technologies and with a proven track record of boosting performance metrics, I am passionate about leveraging my skills in a forward-thinking environment that challenges conventional norms and values innovative problem-solving.
        </p>
        <p className="text-slate-400 text-sm md:text-2xl w-full mt-2 text-center">
        Let's connect and explore how we can drive the future of technology together.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-8 mt-6">
          <a href="https://github.com/Chetankumarch" target="_blank" rel="noopener noreferrer" className="text-white text-4xl">
            <FaGithub />
          </a>
          {/* LinkedIn icon with a link */}
          <a href="https://www.linkedin.com/in/chetan-kumar-ch" target="_blank" rel="noopener noreferrer" className="text-white text-4xl">
            <FaLinkedin />
          </a>
          <a href="personal/Chetan_Kumar_resume.pdf" download="Chetan_Kumar_Resume.pdf" className="flex items-center px-4 py-2 bg-slate-600 hover:bg-slate-800 transition duration-200 rounded-lg text-white text-2xl">
            <FaDownload className="mr-2"/>Resume
          </a>
        </div>
      </Vortex>
    </div>
  );
}
