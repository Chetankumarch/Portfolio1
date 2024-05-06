'use client'
import { HoverEffect } from "../components/ui/card-hover-effect";
// import { FaReact, FaNextjs } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiJavascript, SiSpringboot, SiMongodb, SiNodedotjs, SiAmazonaws,
    SiStreamlit, SiDocker, SiTailwindcss, SiMysql, SiTypescript } from 'react-icons/si';

export default function CardHoverEffectDemo() {
  return (
    <div id="skills" className="w-full mx-auto px-8">
        <h2 className="text-white text-4xl text-center pt-24 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Skills</h2>
      <HoverEffect items={skills} />
    </div>
  );
}
export const skills = [
  {
    title: "React",
    Icon: SiReact
  },
  {
    title: "NextJS",
    Icon: SiNextdotjs
  },
  {
    title: "NodeJS",
    Icon: SiNodedotjs
  },
  {
    title: "Springboot",
    Icon: SiSpringboot
  },
  {
    title: "Mongodb",
    Icon: SiMongodb
  },
  {
    title: "AWS",
    Icon: SiAmazonaws
  },
  {
    title: "Streamlit",
    Icon: SiStreamlit
  },
  {
    title: "Docker",
    Icon: SiDocker
  },
  {
    title: "TailwindCSS",
    Icon: SiTailwindcss
  },
  {
    title: "MySQL",
    Icon: SiMysql
  },
  {
    title: "Javascript",
    Icon: SiJavascript
  },
  {
    title: "Typescript",
    Icon: SiTypescript
  },

];
