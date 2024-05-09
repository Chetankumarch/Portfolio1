'use client'
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/utils/cn";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  // Specifying the type of the ref as HTMLDivElement
  const ref = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Updated to check if ref.current exists and contains the target
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);  // No need to destructure ref here since it does not change

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50  text-2xl bg-slate-800 shadow-md rounded-2xl", className)} ref={ref}>
      <div className="{`flex justify-between items-center p-2 ${isOpen ? 'bg-slate-800' : 'bg-transparent sm:bg-slate-800'}`}">
        <div className="block sm:hidden">
          {/* Toggle button for mobile view */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-xl text-black bg-cyan-200 p-2 rounded">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        {/* Navigation links, hidden on mobile initially, shown when menu is open or on larger screens */}
        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col sm:flex sm:flex-row sm:items-center sm:justify-between w-full`}>
          <a href="#" className="p-2 hover:text-cyan-800">Home</a>
          <a href="#workexp" className="p-2 hover:text-cyan-800">Experience</a>
          <a href="#skills" className="p-2 hover:text-cyan-800">Skills</a>
          <a href="#projects" className="p-2 hover:text-cyan-800">Projects</a>
          <a href="#contact" className="p-2 hover:text-cyan-800">Contact</a>
        </div>
      </div>
    </div>
  );
}
