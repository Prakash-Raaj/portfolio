// import React from 'react';
import { FaCode } from 'react-icons/fa6';

const NavBar = () => {
  const navheadings: string[] = [
    'skills',
    'experience',
    'projects',
    'Contact',
  ];
  return (
    <div className="sticky top-0 backdrop-blur bg-white/70 border-b border-gray-100 flex w-full items-center">
      <div className="flex gap-1.5">
        <FaCode size={20} className="text-2xl" />
        <span>Prakash</span>
      </div>

      <div className="flex flex-row flex-grow items-center justify-end gap-4">
        {navheadings.map((h: string) => (
          <div
            className="font-mono font-bold relative cursor-pointer 
            after:block after:h-[2px] after:bg-current after:scale-x-0 
            after:origin-left after:transition-transform after:duration-300 
            after:ease-out hover:after:scale-x-100"
          >
            {h}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
