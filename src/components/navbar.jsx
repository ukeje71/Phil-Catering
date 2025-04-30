import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-300 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Phil's</h1>
          <ul className="hidden md:flex ">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 gap-5.5">
          <button className="bg-transparent border-0 text-black ">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div
          className="border-amber-950 gap-2 flex flex-col md:hidden"
          onClick={handleClick}
        >
          <span className="w-7 h-1 bg-black"></span>
          <span className="w-7 h-1 bg-black"></span>
          <span className="w-7 h-1 bg-black"></span>
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-zinc-300 w-full px-5 md:hidden lg:hidden"
        }
      >
        <li className="border-b-2 border-zinc-400 w-full">Home</li>
        <li className="border-b-2 border-zinc-400 w-full">About</li>
        <li className="border-b-2 border-zinc-400 w-full">Support</li>
        <li className="border-b-2 border-zinc-400 w-full">Platform</li>
        <li className="border-b-2 border-zinc-400 w-full">Pricing</li>
        <div className="flex flex-col my-4 pr-4 gap-5.5">
          <button className="bg-transparent border-indigo-600 py-3 px-5 text-black  mb-3">
            {" "}
            Sign In
          </button>
          <button className="px-5 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
