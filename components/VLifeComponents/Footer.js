"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FaPhoneVolume, FaGlobe, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import NewsLettreFormVlife from "../../utils/NewsLetterFormVLife"
const Footer = () => {
  const phoneNumber = "+91-9945972835";
  const footeremail = "krishnamurthy.n@catalysts.com";
  const website = "https://www.cms.org.in";
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new URLSearchParams(); 
      formData.append("email", newsletterEmail);
  
      const response = await axios.post(
        "https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10708/feedback",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
  
      if (response.status === 200) {
        setMessage("Thank you for subscribing!");
        setNewsletterEmail("");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting newsletter:", error);
      setMessage("An error occurred. Please try again.");
    }
  };
  

  return (
    <>
      <div className="bg-[#F2F2F2]">
        <div className="text-center">
          <h2 className="text-[#363636] lg:text-[34px] text-[25px] pt-5">
            For more information, contact
          </h2>
        </div>
        <div className="lg:px-0 px-10 flex flex-col lg:flex-row lg:justify-center lg:space-x-10 lg:py-16 py-5 text-center lg:text-left items-start lg:items-center space-y-5 lg:space-y-0">
          {phoneNumber && (
            <span className="flex items-center gap-3">
              <FaPhoneVolume className="text-[#7F3F97] text-xl" />
              <Link href={`tel:${phoneNumber}`} className="text-xl hover:text-[#7F3F97]">
                {phoneNumber}
              </Link>
            </span>
          )}
          {footeremail && (
            <span className="flex items-center gap-3">
              <IoMdMail className="text-[#7F3F97] text-xl" />
              <Link href={`mailto:${footeremail}`} className="text-xl hover:text-[#7F3F97]">
                {footeremail}
              </Link>
            </span>
          )}
          {website && (
            <span className="flex items-center gap-3">
              <FaGlobe className="text-[#7F3F97] text-xl" />
              <Link href="/" className="text-xl hover:text-[#7F3F97]" target="_blank" rel="noopener noreferrer">
                {website}
              </Link>
            </span>
          )}
        </div>
      </div>

      <footer className="bg-[#7F3F97] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto lg:flex gap-80 container justify-center">
          {/* Address Section */}
          <div>
            <h2 className="text-xl font-light mb-4">Address</h2>
            <div className="mb-4">
              <h3 className="font-semibold text-xl border-b border-[#995baf] pb-1">Bengaluru:</h3>
              <p className="pt-2">#25, 1st Main, AECS Layout, Ashwath Nagar,</p>
              <p>Bengaluru, 560094</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl border-b border-[#995baf] pb-1">Delhi:</h3>
              <p className="pt-2">A-10, Second Floor, Green Park,</p>
              <p className="mb-5">New Delhi, 110016</p>
            </div>
          </div>

          {/* Newsletter and Social Links Section */}
          <div>
            <p className="border-t mb-5 border-[#6cbcad] lg:hidden"></p>
            <h2 className="text-xl font-light mb-4">Subscribe to the Newsletter</h2>
            <NewsLettreFormVlife/>
            <div className="flex space-x-4 mt-14">
              <h2 className="text-xl font-light mb-2">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="#" aria-label="X (Twitter)" className="hover:opacity-80">
                  <RiTwitterXFill className="text-3xl" />
                </a>
                <a href="#" aria-label="Instagram" className="hover:opacity-80">
                  <FaInstagram className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
