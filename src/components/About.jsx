import React from "react";

const About = () => {
  return (
    // fragment
    <div className="my-32 w-full">
      {/* Cover */}
      <div className="max-w-[1240px] m-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Trusted by developers across the world</h2>
          <p className="text-xl py-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit vitae
            iusto officiis nesciunt voluptates quia dolore velit perspiciatis
            totam dolor fugit pariatur quod itaque ratione debitis, mollitia
            nemo. Quisquam, omnis.
          </p>
        </div>

        {/* competitors */}
        <div className="grid md:grid-cols-3 gap-2 px-2 text-center py-6">
          <div className="border-t-1 border-gray-950 py-8 rounded-2xl shadow-2xl">
            <p className="text-indigo-500 font-extrabold text-2xl">100%</p>
            <p className="text-gray-500">Completion</p>
          </div>
          <div className="border-t-2 border-gray-950 py-8 rounded-2xl shadow-2xl">
            <p className="text-indigo-500 font-extrabold text-2xl">24/7</p>
            <p className="text-gray-500">Delivery</p>
          </div>
          <div className="border-t-2 border-gray-950 py-8 rounded-2xl shadow-2xl">
            <p className="text-indigo-500 font-extrabold text-2xl">100K</p>
            <p className="text-gray-500">Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
