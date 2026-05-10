import { IoLocationOutline } from 'react-icons/io5';
import { CiMail } from 'react-icons/ci';
import { MdWorkOutline } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import illustration from '../assets/illustration.png';

interface MainProps {
  id?: string;
}

const Main = ({ id }: MainProps) => {
  return (
    <div id={id} className="flex items-center min-h-screen w-full">
      {/* left part should be an image and right part should be name and title */}

      <div className="hidden lg:block w-1/2 h-screen">
        <img
          src={illustration}
          alt="illustration of a boy coding"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col grow w-full lg:w-1/2">
        <div className="text-slate-900 tracking-wide">
          <h1 className="font-mono  tex-primary text-2xl md:text-4xl wrap-break-word pb-2 inline-block border-b-2">
            Hi, I'm{' '}
            <span className="text-accent">
              Prakash Raaj Vasudevan
            </span>
          </h1>
          <div>
            <p className="italic text-secondary font-bold p-1">
              I turn complex problems into clean, performant web
              experiences
            </p>
            {/* <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-1 bg-gray-400 border-1 text-red-900 font-mono text-sm font-semibold rounded-md hover:bg-red-400 transition-colors duration-200"
            >
              See what I've built
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a> */}
          </div>
          {/* <hr className="w-full border-t-2 border-slate-400 mt-1" /> */}
        </div>
        <div className="py-3 intro flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <MdWorkOutline />3 years of experience as Web developer
          </li>
          <li className="flex items-center gap-2">
            <IoLocationOutline />
            Toronto, Canada
          </li>
          <li className="flex items-center gap-2 hover:text-accent hover:text-xl transition-all duration-300 cursor-pointer">
            <CiMail />
            <a href="mailto:prakashraaj7996@gmail.com">
              prakashraaj7996@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-2  hover:text-accent hover:text-xl transition-all duration-300 cursor-pointer">
            <FaGithub />
            <a href="https://github.com/Prakash-Raaj" target="_blank">
              Prakash-raaj
            </a>
          </li>
        </div>
        {/* <p className="italic text-indigo-600">
          Building scalable web applications with React & Node.js
        </p> */}
      </div>
    </div>
  );
};

export default Main;
