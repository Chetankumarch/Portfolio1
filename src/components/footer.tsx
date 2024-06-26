"use client";
import React, { useState } from 'react';
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import emailjs from '@emailjs/browser';
import { cn } from "@/utils/cn";
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';

interface EmailJSResponse {
    status: number;
    text: string;
}

function CombinedComponent() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        comments: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const serviceID = 'service_vvzbaka';
        const templateID = 'template_t12jr9h';
        const publicKey = 'df5vKoNLOFh1E9TEH';

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((response: EmailJSResponse) => {
                console.log('Email successfully sent!', response);
                alert('Message successfully sent!');
                setFormData({
                    fullName: '',
                    email: '',
                    comments: ''
                });
            })
            .catch((err: Error) => {
                console.error('Failed to send email. Error: ', err);
                alert('Failed to send message.');
            });
    };

    const words = [
        { text: "Built", },
        { text: "with", },
        { text: "love", },
        { text: "by", },
        { text: "Chetan Kumar.", className: "text-blue-500 dark:text-blue-500", },
    ];

    return (
        <div  className="top-[12rem] relative flex flex-col items-center justify-center h-[36rem]">
          <h1  id="contact" className="text-4xl pb-2 pt-28 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Get In Touch</h1>
          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      {/* <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Aceternity
      </h2> */}
      {/* <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p> */}

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" placeholder="Enter your full name" type="text" value={formData.fullName} onChange={handleChange} required />
        </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" placeholder="Enter your email" type="email" value={formData.email} onChange={handleChange} required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
            <Label htmlFor="comments">Comments</Label>
            <Input id="comments" name="comments" placeholder="Enter your comments here" type="text" value={formData.comments} onChange={handleChange} required />
        </LabelInputContainer>


        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
            onClick={() => window.open("https://github.com/Chetankumarch", "target=_blank", "rel= noopener noreferrer")}
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
            onClick={() => window.open("https://www.linkedin.com/in/chetan-kumar-ch", "target=_blank", "rel= noopener noreferrer")}
          >
            <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              LinkedIn
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
                
                <TypewriterEffectSmooth words={words} />
                <p>© 2024 Chetan Kumar. All rights reserved.</p>
          
      </div>
    );
  
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default CombinedComponent;
