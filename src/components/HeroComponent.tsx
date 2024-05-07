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
          className="mt-16 w-32 h-32 md:w-52 md:h-52 rounded-full object-cover"
        />
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Chetan Kumar Nageshwarrao Chitturi
        </h2>
        <p className="text-cyan-300 text-sm md:text-2xl w-full mt-6 text-center text-justify">
        Empowering technological transformation and crafting cutting-edge solutions, I am a dedicated Software Developer with a robust educational background from Binghamton University and hands-on experience across global tech landscapes. Specializing in full-stack development, my journey through dynamic web applications, AI-driven enhancements, and system optimizations reflects a commitment to elevating user experiences and operational efficiencies. With a knack for adapting advanced technologies and a proven track record of boosting performance metrics, I am passionate about leveraging my skills in a forward-thinking environment that challenges the norm and values innovative problem-solving. Let's connect and explore how we can drive the future of technology together.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-8 mt-6">
          <a href="https://github.com/Chetankumarch" target="_blank" rel="noopener noreferrer" className="text-white text-4xl">
            <FaGithub />
          </a>
          {/* LinkedIn icon with a link */}
          <a href="https://www.linkedin.com/in/chetan-kumar-ch" target="_blank" rel="noopener noreferrer" className="text-white text-4xl">
            <FaLinkedin />
          </a>
          {/* <a href="personal/Chetan_Kumar_resume.pdf" download="Chetan_Kumar_Resume.pdf" className="flex items-center px-4 py-2 bg-grey-500 hover:bg-grey-600 transition duration-200 rounded-lg text-white text-2xl">
            <FaDownload className="mr-2"/>Resume
          </a> */}
          <Button 
          borderRadius="1.75rem" href="personal/Chetan_Kumar_resume.pdf" download="Chetan_Kumar_Resume.pdf"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-2xl"
        >
        <FaDownload className="mr-2"/>Resume
        </Button>
        </div>
      </Vortex>
    </div>
  );
}
