import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../components/header/Navbar";
import { FaLocationDot, FaSquareFacebook } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";




const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    subject: "General Inquiry",
    file: null,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Message sent successfully!");
      console.log(formData); //  remove latter
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        phone: "",
        subject: "General Inquiry",
        file: null,
        message: "",
      });
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-center ">
        <img
          className="w-full h-full object-cover absolute  "
          src="/images/solutionsImages/airportpageposter.png"
          alt=""
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white  relative z-[2]">
          Contact Us
        </h1>
      </div>

      <div className="flex max-md:flex-col  p-[5vw] gap-6">
        {/* Left Section */}
        <div className="w-1/2 max-md:w-full  text-white  rounded-lg shadow-lg">
          <div className="w-full min-h-[150px] bg-blue-500 rounded-lg p-[30px]">
            <h1 className="text-4xl font-semibold">Headquater Address</h1>
            <div className="flex items-center justify-center mt-5  gap-10">
              <FaLocationDot className="w-6 h-6" />
              <h1>36-A, Devraj Industrial Park, Pipalaj-Pirana Road, Ahmedabad-382405, Gujarat, India.</h1>
            </div>
          </div>

          <div className="flex justify-between mt-5 text-black  gap-5">
            <div className="w-1/2 min-h-[100px] p-[20px] bg-blue-300 rounded-lg">
             <h1 className="font-semibold text-lg mb-2">Domestic inquiry</h1>
             <div className="flex items-center gap-2">
                <MdCall />
                <h1>+91-9375279778 / 8690779778</h1>
             </div>
             <div className="flex items-center gap-2">
                <MdEmail />
                <h1>sales@nessa.in</h1>
             </div>
            </div>
            <div className="w-1/2 min-h-[100px] p-[20px] bg-blue-300 rounded-lg">
            <h1 className="font-semibold text-lg mb-2">International inquiry</h1>
            <div className="flex items-center gap-2">
                <MdCall />
                <h1>+91-9375279778</h1>
             </div>
             <div className="flex items-center gap-2">
                <MdEmail />
                <h1>sales@nessa.in</h1>
             </div>
            </div>
          </div>
          <div className="flex justify-between mt-5 text-black  gap-5">
            <div className="w-1/2 min-h-[100px] p-[20px] bg-blue-300 rounded-lg">
             <h1 className="font-semibold text-lg mb-2">Service inquiry</h1>
             <div className="flex items-center gap-2">
                <MdCall />
                <h1>+91-9375279778</h1>
             </div>
             <div className="flex items-center gap-2">
                <MdEmail />
                <h1>sales@nessa.in</h1>
             </div>
            </div>
            <div className="w-1/2 min-h-[100px] p-[20px] bg-blue-300 rounded-lg">
            <h1 className="font-semibold text-lg mb-2">Career inquiry</h1>
            <div className="flex items-center gap-2">
                <MdCall />
                <h1>+91-9375279778</h1>
             </div>
             <div className="flex items-center gap-2">
                <MdEmail />
                <h1>sales@nessa.in</h1>
             </div>
            </div>
          </div>
          <div className="flex justify-between mt-5 text-black  gap-5">
            <div className="w-1/2 min-h-[100px] p-[20px] bg-blue-300 rounded-lg">
             <h1 className="font-semibold text-lg mb-2">CSR inquiry</h1>
             <div className="flex items-center gap-2">
                <MdCall />
                <h1>+91-9375279778</h1>
             </div>
             <div className="flex items-center gap-2">
                <MdEmail />
                <h1>sales@nessa.in</h1>
             </div>
            </div>
            <div className="w-1/2 min-h-[100px] flex gap-5 p-[20px] text-3xl bg-blue-300 rounded-lg">
               <AiFillInstagram/>
               <FaSquareXTwitter/>
               <FaDiscord />
               <FaSquareFacebook />


            </div>
          </div>

         
        </div>

        {/* Right Section */}
        <form
          className="w-1/2 max-md:w-full bg-white p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Full Name
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full p-2 border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">{errors.fullName}</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Email ID
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Phone Number
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full p-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-bold mb-2">
              Select Subject
            </label>
            {[
              "General Inquiry",
              "Domestic Inquiry",
              "Service Inquiry",
              "International Inquiry",
              "CSR Inquiry",
              "Career Inquiry",
            ].map((subject, index) => (
              <label key={index} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="subject"
                  value={subject}
                  checked={formData.subject === subject}
                  onChange={handleInputChange}
                  className="form-radio"
                />
                <span className="ml-2">{subject}</span>
              </label>
            ))}
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-bold mb-2">
              File Upload
            </label>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files[0].size > 1000000) {
                  e.target.value = null;
                  alert("File size exceeds 100KB.");
                } else {
                  handleFileChange(e);
                }
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full p-2 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded`}
              placeholder="Write your message..."
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="w-full h-[400px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7348.649409568016!2d72.54749124151411!3d22.938265850794643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e859f9e9ee219%3A0x4762594d909ba9f2!2sNessa%20Illumination%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1734817362201!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
