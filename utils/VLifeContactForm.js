// Contact.js
'use client'
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    organisationName: "",
    messageBox: "",
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
        "https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10682/feedback",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Form data sent:", formDataToSend);
      setSuccessMessage("Thank you for contacting us.");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        organisationName: "",
        messageBox: "",
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
    <div className="flex justify-center items-center container mx-auto">
      <form className="w-full p-6 bg-white" onSubmit={handleFormSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6 ">
          {/* First Name */}
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-[#7F3F97] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#7F3F97]"
              id="firstname"
              type="text"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
            />
            {renderError("firstname")}
          </div>

          {/* Organization Name */}
          <div className="w-full md:w-1/2 px-3">
        
          <input
              className="appearance-none block w-full bg-white text-gray-700 border border-[#7F3F97] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#7F3F97]"
              id="lastname"
              type="text"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
            />
            {renderError("lastname")}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6 -mt-2 lg:-mt-0">
          {/* Last Name */}
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            
            
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-[#7F3F97] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#7F3F97]"
              id="organisationName"
              type="text"
              placeholder="Organisation Name"
              value={formData.organisationName}
              onChange={handleChange}
            />
            {renderError("organisationName")}
          </div>

          {/* Email ID */}
          <div className="w-full md:w-1/2 px-3">
           
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-[#7F3F97] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#7F3F97]"
              id="email"
              type="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
            />
            {renderError("email")}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
           
            <textarea
              className="appearance-none block w-full bg-white text-gray-700 border border-[#7F3F97] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#7F3F97]"
              id="messageBox"
              rows="4"
              placeholder="Message"
              value={formData.messageBox}
              onChange={handleChange}
            />
            {renderError("messageBox")}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#7F3F97] text-white font-bold py-2 px-8 rounded-xl w-44"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {successMessage && (
          <div className="mb-4 text-lg rounded-lg bg-green-100 p-4 text-green-500 text-center mt-4" role="alert">
            <span className="font-medium">Submitted!</span> {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
