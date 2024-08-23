import { ModeToggle } from "@/components/ui/mode-toggle";
import React from "react";

const Header = () => {
  return (
    <div className="h-14 grid grid-cols-3 px-2">
      <div></div>
      <h1 className="flex justify-center items-center">Tattoo Hub</h1>
      <section className="flex justify-end items-center">
        <ModeToggle />
      </section>
    </div>
  );
};

export default Header;
