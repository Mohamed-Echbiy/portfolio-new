import React from "react";
import Navbar from "./Navbar";
import { GiBatWing } from "react-icons/gi";

function Header() {
  return (
    <header className='w-full flex items-center gap-4 py-4 mt-5'>
      <div className='logo max-w-fit text-accent text-2xl uppercase flex items-center gap-1'>
        <GiBatWing />
        <span>Mohamed</span>
        <GiBatWing className=' rotate-90' />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
