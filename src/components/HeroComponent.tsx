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
          src="personal/myImage.jpeg" // Replace with your image path
          alt="Descriptive Text"
          className="mt-16 w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
        />
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Chetan Kumar Nageshwarrao Chitturi
        </h2>
        <p className="text-cyan-300 text-sm md:text-2xl w-full mt-6 text-center text-justify">
Iam a recent graduate with a Master’s in Computer Science from Binghamton University, State University of New York, and a background in Computer Science and Engineering from Visvesvaraya Technological University, India. With over three years of professional experience in the tech industry, I am passionate about creating innovative software solutions that enhance user interaction and operational efficiency.
        </p>
        <p className="text-cyan-300 text-sm md:text-2xl w-full mt-6 text-center text-justify">
          Currently, I am seeking full-time opportunities that allow me to apply my software development and engineering skills in a dynamic team environment.If you find my profile suitable, please reach out through my GitHub or LinkedIn.</p>
        <div className="flex flex-col sm:flex-row items-center gap-8 mt-6">
          <a href="https://github.com/Chetankumarch" target="_blank" rel="noopener noreferrer" className="text-white text-4xl">
            <FaGithub />
          </a>
          {/* LinkedIn icon with a link */}
          <a href="www.linkedin.com/in/ chetan-kumar-ch" target="_blank" rel="noopener noreferrer" className="text-white text-4xl">
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
