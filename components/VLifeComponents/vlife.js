import Image from "next/image";
import React from "react";

const vlife = () => {
  return (
    <>
      <div className="pb-10">
        <div className="shadow-md z-50 bg-white shadow-gray-200 fixed top-0 left-0 w-full">
          <h2 className="text-[40px] sm:text-[50px] text-[#7F3F97] text-center font-bold ">
            V-Life
          </h2>
        </div>
      </div>

      <div className="lg:bg-[url('/Vlife/v-life-banner.png')] bg-[url('/Vlife/mobile-banner1.png')] bg-cover bg-center h-[100vh] w-full z-0">
        <p className="lg:text-[50px] text-[30px] text-[#00AF8B] text-center z-0 font-bold mt-10">
          Empowering Rural Communities <br /> for a Sustainable Future
        </p>
      </div>

      <div>
        <p className="text-center lg:pl-32 lg:pr-32 p-5 text-xl">
          India’s rural landscape is rich with potential, but many communities
          face significant challenges in achieving sustainable livelihoods.
          Dependence on agriculture, limited economic opportunities, financial
          exclusion, and the impacts of climate change are just some of the
          hurdles. These challenges have led to instability, poverty, and a
          trend of migration to urban areas in search of better prospects.
        </p>
        <button className="bg-[#7F3F97] m-auto flex text-white p-3 w-40 justify-center rounded-xl mb-4 font-bold">
          Join Us
        </button>
      </div>

      <div className="lg:flex justify-center lg:mt-20">
        <div>
          <p className="text-[#7F3F97] text-[40px] lg:-rotate-90 lg:mt-36 mt-8 mb-4 font-bold text-center">
            What is V-Life
          </p>
        </div>
        <div className="hidden lg:block">
          <Image
            width={800}
            height={500}
            src="/Vlife/desktop-info.jpg"
            className="w-[100%]"
          />
        </div>
        <div className="justify-center flex">
          <Image
            width={350}
            height={400}
            src="/Vlife/mobile-info.jpg"
            className="lg:hidden block"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#00AF8B] text-white p-2 rounded-xl w-60 lg:my-10 mt-10 font-bold">
          Discover Our Mission
        </button>
      </div>

      <div className="lg:bg-[url('/Vlife/Banner2.png')] bg-[url('/Vlife/mobile-banner-2.png')] bg-cover bg-center h-[50vh] w-full z-0 relative">
  <div className="absolute bottom-0 w-full text-center">
    <p className="lg:text-[150px] lg:-mb-14 -mb-5 text-[54px] text-white font-bold">
      Goals of V-Life
    </p>
  </div>
</div>

    </>
  );
};

export default vlife;
