import { useState } from 'react';
import { FaCode } from 'react-icons/fa6';
import { CiMenuBurger } from 'react-icons/ci';

const NavBar = () => {
  const navheadings: { name: string; id: string }[] = [
    { name: 'skills', id: 'skills' },
    { name: 'experience', id: 'experience' },
    { name: 'projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hover, setHover] = useState(false);

  const handleToggle = () => {
    if (!isOpen) {
      setIsAnimating(true);
    }
    setIsOpen(!isOpen);
  };

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
    }
  };

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/portfolio/Prakash_Raaj_Resume.pdf';
    link.download = 'Prakash_Raaj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id: string) => {
    if (id === 'resume') {
      downloadFile();
      setIsOpen(false);
      setIsAnimating(false);
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setIsAnimating(false);
  };

  return (
    <>
      <div className="sticky top-0 backdrop-blur bg-white/70 border-b border-gray-100 md:flex w-full items-center flex justify-between">
        <div
          className="flex gap-1.5 cursor-pointer"
          onClick={() => scrollToSection('main')}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <FaCode size={20} className="text-2xl" />
          <span className="text-primary transition-all duration-900 hover:text-accent hover:text-bold hover:text-2xl">
            {hover ? 'பிரகாஷ் ராஜ்' : 'Prakash Raaj'}
          </span>
        </div>
        <div className="md:hidden">
          <CiMenuBurger
            className={`text-2xl cursor-pointer ${isOpen ? 'rotate-90 duration-800' : 'duration-800'}`}
            onClick={handleToggle}
          />
        </div>

        <div className="flex flex-row flex-grow items-center justify-end gap-4 hidden md:flex">
          {navheadings.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-mono font-bold relative cursor-pointer 
            after:block after:h-[2px] after:bg-current after:scale-x-0 
            after:origin-left after:transition-transform after:duration-300 
            after:ease-out hover:after:scale-x-100"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      {(isOpen || isAnimating) && (
        <div
          className={`flex justify-center mt-5 ${
            isOpen ? 'animate-fade-in' : 'animate-fade-out'
          }`}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className="flex flex-col justify-center gap-2">
            {navheadings.map((item) => (
              <div
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
