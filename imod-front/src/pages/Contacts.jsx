import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <form
          className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full mx-auto lg:mx-0"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
          </p>

          <div className="mb-6">
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Please enter first name..."
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please enter email..."
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Please enter phone number..."
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="query" className="block text-gray-700 font-medium mb-2">
              What Do You Have in Mind?
            </label>
            <textarea
              id="query"
              name="query"
              placeholder="Please enter query..."
              value={formData.query}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>

        {/* Google Map */}
        <div className="flex-1">
  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center lg:text-left">Find us here</h3>
  <div className="w-full h-[70vh] rounded-lg overflow-hidden shadow-md">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3119.9066726882943!2d68.72025700000002!3d38.558964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d1b1655a5a33%3A0xc6a7f6aa567da896!2z0J7QntCeIMKr0JjQnNCe0JTCuw!5e0!3m2!1sen!2sus!4v1731699468928!5m2!1sen!2sus" 
    width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Google Map with Marker"
    ></iframe>

  </div>
</div>


      </div>
    </div>
  );
};

export default ContactUs;
