"use client";
import Link from "next/link"
import Image from "next/image";
import { Tabs } from "../components/ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Git Bot",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl text-justify">An AI-enhanced platform offering an interactive chat application for GIT documentation, a robust text retrieval system, and a sophisticated conversation management system to optimize user interactions and information retrieval.</p>
          <Link className="text-xl text-cyan-500" href={"https://github.com/Chetankumarch/git_bot"}>
                                    Learn More
          </Link>
          <Image
          src="/personal/preciew.jpeg"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-center h-[60%]  md:h-[100%] relative -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Audio Room Cloud Service",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl text-justify">A dynamic audio room application designed to facilitate scalable and robust content management, leveraging React.js, Spring Boot, and DynamoDB, with enhanced performance and cost efficiency through Amazon Fargate and Load Balancer integration.
          </p>
          <Link className="text-xl text-cyan-500" href={"https://github.com/Chetankumarch/Audio-Rooms-Cloud-Computing"}>
                                    Learn More
          </Link>
          <Image
          src="/personal/audio.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-center h-[60%]  md:h-[100%] relative -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Multi-Modal Chat Application",
      value: "playground",
      content: (
<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl text-justify">
A multimodal AI chat application that enhances user experience by seamlessly integrating audio, image, and PDF processing, equipped with advanced voice-to-text transcription and optimized for efficient multimedia handling across various devices.
          </p>
          {/* <Link className="text-xl text-cyan-500" href={"#"}>
                                    Learn More
          </Link> */}
          <Image
          src="/personal/multimodal.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-center h-[60%]  md:h-[100%] relative -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
    {
      title: "Flight data analysis with MongoDB",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl text-justify">
          This project aims at analyzing 6.2 million records of US domestic flights to optimize travel schedules and reduce delays, using MongoDB for data aggregation and D3 for intuitive visualizations, thereby enhancing flight scheduling and reliability.
          </p>
          {/* <Link className="text-xl text-cyan-500" href={"#"}>
                                    Learn More
          </Link> */}
          <Image
          src="/personal/mongo.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-center h-[60%]  md:h-[100%] relative -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
        </div>
      ),
    },
  ];

  return (
    <div id="projects">
    <h2 className="text-white text-4xl text-center pt-24 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Projects</h2>
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-5">
      <Tabs tabs={tabs} />
    </div>
    </div>
  );
}

