import Image from "next/image";
import React from "react";

const OurRegion = () => {
  return (
    <>
      <div className="lg:flex container mx-auto my-20 hidden lg:block">
        {/* Left side with text content */}
        <div className="bg-[#00AF8B] p-8 text-white w-1/2 h-auto">
          <h2 className="text-3xl font-bold mb-4">Our Regions</h2>
          <p className="mb-6 text-[25px]">
            V-Life is committed to making a lasting impact across various
            regions in India, particularly in areas where the need is greatest
            by focusing on:
          </p>
          <ul className="space-y-4 list-disc px-3 mt-10 text-[18px]">
            <li>
              Diverse agricultural landscapes and addressing challenges related
              to harsh climates and financial exclusion.
            </li>
            <li>
              Supporting communities with access to natural resources, helping
              them diversify their income sources and enhance sustainability.
            </li>
            <li>
              Empowering coastal and inland communities through financial
              inclusion and sustainable livelihood practices.
            </li>
            <li>
              Promoting resilience in areas prone to natural disasters and
              fostering economic growth through innovative livelihood solutions.
            </li>
          </ul>
        </div>

        {/* Right side with image */}
        <div className="w-1/2">
          <Image
            src="/Vlife/region.jpg"
            width={600}
            height={400}
            alt="Family in rural India"
          />
        </div>
      </div>



      <div className="lg:hidden block">
      <div className="lg:flex container mx-auto mt-10 ">
      <div className="">
          <Image
            src="/Vlife/region-mobile.jpg"
            width={600}
            height={400}
            alt="Family in rural India"
          />
        </div>
        {/* Left side with text content */}
        <div className="bg-[#00AF8B] p-8 text-white -mt-5">
          <h2 className="text-3xl font-bold mb-4">Our Regions</h2>
          <p className="mb-6 text-[25px]">
            V-Life is committed to making a lasting impact across various
            regions in India, particularly in areas where the need is greatest
            by focusing on:
          </p>
          <ul className="space-y-4 list-disc px-3 mt-10 text-[18px]">
            <li>
              Diverse agricultural landscapes and addressing challenges related
              to harsh climates and financial exclusion.
            </li>
            <li>
              Supporting communities with access to natural resources, helping
              them diversify their income sources and enhance sustainability.
            </li>
            <li>
              Empowering coastal and inland communities through financial
              inclusion and sustainable livelihood practices.
            </li>
            <li>
              Promoting resilience in areas prone to natural disasters and
              fostering economic growth through innovative livelihood solutions.
            </li>
          </ul>
        </div>
        </div>

        {/* Right side with image */}
       
      </div>
    </>
  );
};

export default OurRegion;
