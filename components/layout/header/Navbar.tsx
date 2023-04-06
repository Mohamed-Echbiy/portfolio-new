import { context } from "@/pages";
import Link from "next/link";
import React, { useContext } from "react";
import { AiFillPhone } from "react-icons/ai";
import { FaSlackHash } from "react-icons/fa";

function Navbar() {
  const { whatProject } = useContext(context);
  return (
    <nav className='flex-grow '>
      <ul className='flex items-center justify-end gap-4 w-full'>
        <li className='project-1 flex items-center gap-2 group'>
          <FaSlackHash className='group-hover:text-accent ease-in-out duration-300 transition-colors w-5 h-5' />
          <Link
            className='group-hover:text-accent ease-in-out duration-300 transition-colors '
            href='#Project 1'
          >
            Project 1
          </Link>
        </li>
        <li className='project-2 flex items-center gap-2 group'>
          <FaSlackHash className='group-hover:text-accent ease-in-out duration-300 transition-colors w-5 h-5' />
          <Link
            className='group-hover:text-accent ease-in-out duration-300 transition-colors'
            href='#Project 2'
          >
            Project 2
          </Link>
        </li>
        <li className='project-3 group flex items-center gap-2 group'>
          <FaSlackHash className='group-hover:text-accent ease-in-out duration-300 transition-colors w-5 h-5' />
          <Link
            className='group-hover:text-accent ease-in-out duration-300 transition-colors '
            href='#Project-3'
          >
            Project 3
          </Link>
        </li>
        <li className='contact-me flex items-center gap-2 w-fit group'>
          <AiFillPhone className=' rotate-90 w-5 h-5 group-hover:text-accent ease-in-out duration-300 transition-colors' />
          <Link
            className='group-hover:text-accent ease-in-out duration-300 transition-colors'
            href='#Contact-me'
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
