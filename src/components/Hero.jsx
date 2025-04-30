import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto ">
        <div>
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="text-3xl font-bold">Cloud Management</h1>
          <p className="text-xl">This is our Tech brand</p>
          <button className="px-15 py-1">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
