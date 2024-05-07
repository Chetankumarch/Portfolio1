"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";


export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-2xl", className)}
    >
      <Menu setActive={setActive}>
      
                <a href={"#"}>Home</a>
                <a href={"#workexp"}>Experience</a>
                <a href={"#skills"}>Skills</a>
                <a href={"#projects"}>Projects</a>
                <a href={"#contact"}>Contact</a>
      </Menu>
    </div>
  );
}
