// components/SupportBeyondCredit.js
import { supportItems } from "@/utils/data";
import Image from "next/image";
import React from "react";

const SupportBeyondCredit = () => {
  return (
    <>
     <div>
        <div className="container mx-auto">
            <Image src="/Vlife/milk.jpg" width={500} height={400} className="w-[100%] lg:mt-20" />
        </div>
      </div>
      <div className="bg-[#7F3F97] text-white space-y-0 px-6 container mx-auto lg:-mt-10 -mt-1 py-10">
        <div className=" mx-auto">
          <h1 className="text-center text-3xl font-semibold mb-6">
            Support Beyond Credit
          </h1>
          <p className="text-center text-lg mb-8">
            V-Life recognizes that providing credit alone is not enough. To
            ensure that farmers can fully benefit from these financial products,
            V-Life offers a range of support services:
          </p>

          <div className="space-y-6">
            {supportItems.map((item, index) => {
              const [title, ...rest] = item.description.split(":");
              return (
                <div
                  key={index}
                  className="bg-white text-[#7F3F97] p-3 rounded-none shadow-md flex"
                >
                  <ul>
                    <li>
                      <span className="font-bold">{title}:</span>
                      {rest.join(":")}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      <div className="container mx-auto">
        <div>
          <h2 className="text-[40px] text-[#7F3F97] font-bold text-center mt-6 lg:py-10">
            Performance so far
          </h2>
          <Image
            src="/Vlife/12.png"
            width={600}
            height={400}
            className="m-auto p-3"
          />
        </div>
      </div>
    </>
  );
};


export default SupportBeyondCredit;
