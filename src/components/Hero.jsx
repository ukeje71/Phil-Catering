import React from "react";
import bgImg from "../assets/cybernetwork.jpg";
import {
  CloudUploadIcon,
  DatabaseIcon,
  SendIcon,
  ServerIcon,
} from "lucide-react";
const Hero = () => {
  return (
    <section className="w-full h-screen  bg-zinc-200 flex flex-col justify-between ">
      <div className="grid  md:grid-cols-2 max-w-[1240px] m-auto  ">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-2">
          <p
            className="font-bold text-xl  md:text-2xl"
            style={{ marginTop: "6rem" }}
          >
            Unique Sequencing & Production
          </p>
          <h1 className=" py-3 text-3xl text-center">Cloud Management</h1>
          <p className="text-xl text-center">This is our Tech brand</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get started</button>
        </div>
        <div className=" md:flex items-center">
          <img className="w-full md:my-20 h-2/4 " src={bgImg} alt="Cake" />
        </div>
        <div className="m-5 absolute flex flex-col py-4  text-[2px] w-[300px]  md:min-w-[700px]  bottom-[-5%] left-0 mx-3 md:left-1/2 md:text-[15px] transform md:-translate-x-1/2 bg-zinc-100 border-slate-300 rounded-xl text-center shadow-2xl">
          <p>Data Services</p>
          <div className="grid grid-cols-2 md:grid-cols-3 px-4 lg:grid-cols-4">
            <p className=" flex px-4 py-2 text-slate-500">
              <CloudUploadIcon />
              App Data
            </p>
            <p className=" flex px-4 py-2 text-slate-500">
              <DatabaseIcon />
              Dashboard Designs
            </p>
            <p className=" flex px-4 py-2 text-slate-500">
              <SendIcon />
              API Services
            </p>
            <p className=" flex px-4 py-2 text-slate-500">
              <ServerIcon />
              Cloud Data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
