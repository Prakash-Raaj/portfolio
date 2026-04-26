import React from 'react';

const Main = () => {
  return (
    <div className="flex items-center min-h-screen w-full">
      {/* left part should be an image and right part should be name and title */}

      <div className="hidden lg:block w-1/2 h-screen">
        <img
          src="../../src/assets/illustration.png"
          alt="illustration of a boy coding"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col grow w-full lg:w-1/2">
        <div className="text-slate-900 tracking-wide">
          <h1 className="font-mono  text-3xl md:text-5xl break-words pb-2 inline-block border-b-2">
            Prakash Raaj Vasudevan
          </h1>
          {/* <hr className="w-full border-t-2 border-slate-400 mt-1" /> */}
          <h2 className="py-3">
            Full Stack Developer
            {/* <span className="text-indigo-600">Developer</span> */}
          </h2>
        </div>

        <p className="italic text-indigo-600">
          Building scalable web applications with React & Node.js
        </p>
      </div>
    </div>
  );
};

export default Main;
