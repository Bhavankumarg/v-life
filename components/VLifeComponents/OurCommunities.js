import React from "react";
import CarouselGroups from "./CarouselGroups";
const OurCommunities = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center text-[40px] text-[#7F3F97] font-bold mt-8 py">
          Our communities
        </h2>
        <p className="text-center text-xl mb-10 mt-2">
          Our work is deeply rooted in the communities we serve. We engage with:
        </p>
      </div>

      <div className="lg:flex hidden lg:block justify-center items-center lg:space-x-2 lg:p-0 p-3 lg:space-y-0 space-y-3 container mx-auto mt-4">
        {/* Block 1 */}
        <div>
          <div className="bg-[#46146C] mb-5 text-white p-6 lg:w-64 hover:bg-[#9258BC] transition duration-500 ease-in-out h-28 rounded-full flex items-center justify-center transform hover:scale-105">
            <p className="text-center">Small & Marginal Farmers</p>
          </div>
          <div>
            <p className="">
              Supporting them with the resources and knowledge needed to improve
              agricultural productivity and income stability
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div>
          <div className="bg-[#541484] mb-5 text-white p-6 lg:w-64 hover:bg-[#7944A0] transition duration-500 ease-in-out h-28 rounded-full flex items-center justify-center transform hover:scale-105">
            <p className="text-center">Women Entrepreneurs</p>
          </div>
          <div>
            <p>
              Empowering women to take charge of their economic futures through
              financial independence and entrepreneurship
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div>
          <div className="bg-[#622F88] mb-5 text-white p-6 lg:w-64 hover:bg-[#7944A0] transition duration-500 ease-in-out h-28 rounded-full flex items-center justify-center transform hover:scale-105">
            <p className="text-center">Youth</p>
          </div>
          <div>
            <p>
              Providing young people with the skills and opportunities needed to
              secure sustainable livelihoods in their communities
            </p>
          </div>
        </div>

        {/* Block 4 */}
        <div>
          <div className="bg-[#7944A0] mb-5 text-white p-6 lg:w-64 hover:bg-[#541484] transition duration-500 ease-in-out h-28 rounded-full flex items-center justify-center transform hover:scale-105">
            <p className="text-center">Artisans and Small Businesses</p>
          </div>
          <div>
            <p>
              Enabling local artisans and small enterprises to grow and thrive{" "}
              <br /> in an increasingly competitive market
            </p>
          </div>
        </div>

        {/* Block 5 */}
        <div>
          <div className="bg-[#9258BC] mb-5 text-white p-6 lg:w-64 hover:bg-[#46146C] transition duration-500 ease-in-out h-28 rounded-full flex items-center justify-center transform hover:scale-105">
            <p className="text-center">Marginalised Communities</p>
          </div>
          <div>
            <p>
              Fostering economic independence and enabling sex worker, queer,
              and transgender communities to invest in essential services
            </p>
          </div>
        </div>
      </div>
      <CarouselGroups />
      <div>
        <button className="bg-[#7F3F97] flex m-auto rounded-xl p-3 my-8 w-52 justify-center text-white">
          Meet Our Communities
        </button>
      </div>

      <div className="bg-[#00AF8B] text-center text-white">
        <div className="container mx-auto">
          <h2 className="text-[40px] font-bold pt-10">
            Enabling Credit to Farmers: Retail Loan
          </h2>
          <p className="text-xl font-light lg:pl-36 lg:pr-36 p-5 pb-10">
            Individual farmers, particularly small and marginal farmers, often
            struggle with financial barriers that limit their ability to invest
            in their farms. These barriers include a lack of collateral, limited
            credit history, and complex banking processes. Without access to
            affordable credit, farmers face difficulties in purchasing seeds,
            fertilizers, equipment, and other essential inputs, leading to
            reduced productivity and income instability.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurCommunities;
