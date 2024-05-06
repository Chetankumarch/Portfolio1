"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "../../node_modules/next/link";

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
      <Link href={"#"}>
                <MenuItem setActive={setActive} active={active}
                item="Home">
                </MenuItem>
                </Link>
                <Link href={"#workexp"}>
                <MenuItem setActive={setActive} active={active}
                item="Experience">
                </MenuItem>
                </Link>
                <Link href={"#skills"}>
                <MenuItem setActive={setActive} active={active}
                item="Skills">
                </MenuItem>
                </Link>
                <Link href={"#projects"}>
                <MenuItem setActive={setActive} active={active}
                item="Projects">
                </MenuItem>
                </Link>
                <Link href={"#contact"}>
                <MenuItem setActive={setActive} active={active}
                item="Contact"></MenuItem>
                </Link>
      </Menu>
    </div>
  );
}
