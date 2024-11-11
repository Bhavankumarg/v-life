// Contact.js
"use client";
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!re.test(String(email).toLowerCase())) {
      return false;
    }
    const domain = email.split("@")[1].toLowerCase();
    const typos = {
      "gamil.com": "gmail.com",
      "gmil.com": "gmail.com",
      "gmial.com": "gmail.com",
      "yaho.com": "yahoo.com",
      "yahooo.com": "yahoo.com",
      "yhoo.com": "yahoo.com",
      "hotnail.com": "hotmail.com",
      "hotmails.com": "hotmail.com",
      "outlok.com": "outlook.com",
    };
    if (typos[domain]) {
      return `Did you mean ${typos[domain]}?`;
    }
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`;
      }
    });

    const emailValidationResult = validateEmail(formData.email);
    if (formData.email && emailValidationResult !== true) {
      newErrors.email =
        typeof emailValidationResult === "string"
          ? emailValidationResult
          : "Invalid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await axios.post(
        "https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10708/feedback",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form data sent:", formDataToSend);
      setSuccessMessage("Thank you for Subscribing");
      setFormData({
        email: "",
      });
      setErrors({});
      console.log("Form submitted successfully", response.data);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const renderError = (field) => {
    return errors[field] ? (
      <span className="text-red-500 text-sm">{errors[field]}</span>
    ) : null;
  };

  return (
    <div className="flex ">
      <form className="" onSubmit={handleFormSubmit}>
        <div className="flex flex-wrap mb-6 relative">
          {/* Email ID */} 
          <div className="md:w-[40vh] 2xl:w-[35vh] w-72 flex">
            <input 
              className="appearance-none block w-full bg-white text-[#7F3F97] border border-[#7F3F97] rounded-l py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#7F3F97]"
              id="email"
              type="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="">
              <button
                type="submit"
                className="bg-[#7F3F97] text-white  font-bold px-8 rounded-r absolute lg:right-2 right-2  bottom-2 top-2"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
          {renderError("email")}
        </div>

        {/* Message */}
        {successMessage && (
          <div
            className="mb-4 text-lg rounded-lg bg-green-100 p-2 text-green-500 text-center mt-4"
            role="alert"
          >
            <span className="font-medium">Subscribed!</span> {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
