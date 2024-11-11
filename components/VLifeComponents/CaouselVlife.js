import Image from "next/image";
import React from "react";
import FourCarouselSlider from "../../components/VLifeComponents/FourCarousel"
const CaouselVlife = () => {
  return (
    <>
      <div>
        <div>
          <p className="text-[#00AF8B] text-center lg:p-5 lg:pl-36 lg:pr-36 text-xl mt-10 lg:mt-0">
            V-Life is driven by a set of core objectives aimed at fostering{" "}
            <br />
            sustainable development and financial inclusion:
          </p>
        </div>
        {/* card section */}
        <div className="hidden lg:block">
        <div className="flex container mx-auto gap-5 justify-center">
          <div class="w-64 p-5 bg-[#7F3F97] border text-white rounded-3xl mt-10">
            <h2 className="text-[25px]">Empowering Rural Communities:</h2>
            <p class="mt-4 font-light">
              We aim to enhance the economic resilience of rural households by
              providing access to tailored financial products that meet their
              unique needs.
            </p>
          </div>
          <div>
            <div class="w-64 p-5 bg-[#7F3F97] border text-white rounded-3xl">
              <h2 className="text-[25px]">Empowering Rural Communities:</h2>
              <p class="mt-4 font-light">
                We aim to enhance the economic resilience of rural households by
                providing access to tailored financial products that meet their
                unique needs.
              </p>
            </div>
          </div>
          <div>
            <div class="w-64 p-5 bg-[#7F3F97] border text-white rounded-3xl mt-10">
              <h2 className="text-[25px]">Empowering Rural Communities:</h2>
              <p class="mt-4 font-light">
                We aim to enhance the economic resilience of rural households by
                providing access to tailored financial products that meet their
                unique needs.
              </p>
            </div>
          </div>
          <div>
            <div class="w-64 p-5 bg-[#7F3F97] border text-white rounded-3xl">
              <h2 className="text-[25px]">Empowering Rural Communities:</h2>
              <p class="mt-4 font-light">
                We aim to enhance the economic resilience of rural households by
                providing access to tailored financial products that meet their
                unique needs.
              </p>
            </div>
          </div>
        </div>
        </div>

      <FourCarouselSlider />
        {/* card section end */}

        <div className="lg:py-14">
          <button className="bg-[#00AF8B] m-auto text-white flex p-3 rounded-xl font-bold lg:-mt-0 -mt-10">
            Learn How We Make an Impact
          </button>
        </div>

        <div className="lg:flex container mx-auto justify-center">
         <div className="lg:w-72 lg:mt-44 p-3 lg:p-0">
         <h2 className="text-[#00AF8B] text-[40px] mt-4">How Does It Work?</h2>
          <p className="text-[25px]">V-Life operates through a <br /> comprehensive, community centric approach:</p>
          <button className="bg-[#7F3F97] text-white p-2 my-3 rounded-xl w-52">Explore Our Services</button>
         </div>
         <Image src="/Vlife/info1.png" width={700} height={500} className="lg:w-[50%] p-3"/>
        </div>
      </div>
    </>
  );
};

export default CaouselVlife;
