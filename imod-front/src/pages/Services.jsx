import React from "react";
import img from '../assets/logo.png'
const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-user",
      title: "Service 1",
      description:
        "With the idea of imparting programming knowledge, Mr. Sandeep Jain, an IIT Roorkee alumnus started a dream, GeeksforGeeks. Whether programming excites you or you feel stifled, how to ace data structures and algorithms, GeeksforGeeks is a one-stop solution.",
    },
    {
      icon: "fa-solid fa-cart-shopping",
      title: "Service 2",
      description:
        "With the idea of imparting programming  sadsafd[aod sfsdif diposf u09sduknowledge, Mr. Sandeep Jain, an IIT Roorkee alumnus started a dream, GeeksforGeeks. Whether programming excites you or you feel stifled, how to ace data structures and algorithms, GeeksforGeeks is a one-stop solution.",
    },
    {
      icon: "fa-solid fa-toolbox",
      title: "Service 3",
      description:
        "With the idea of imparting programming knowledge, Mr. Sandeep Jain, an IIT Roorkee alumnus started a dream, GeeksforGeeks. Whether programming excites you or you feel stifled, how to ace data structures and algorithms, GeeksforGeeks is a one-stop solution.",
    },
    {
      icon: "fa-brands fa-android",
      title: "Service 4",
      description:
        "With the idea of imparting programming knowledge, Mr. Sandeep Jain, an IIT Roorkee alumnus started a dream, GeeksforGeeks. Whether programming excites you or you feel stifled, how to ace data structures and algorithms, GeeksforGeeks is a one-stop solution.",
    },
    {
      icon: "fa-solid fa-database",
      title: "Service 5",
      description:
        "With the idea of imparting programming knowledge, Mr. Sandeep Jain, an IIT Roorkee alumnus started a dream, GeeksforGeeks. Whether programming excites you or you feel stifled, how to ace data structures and algorithms, GeeksforGeeks is a one-stop solution.",
    },
    {
      icon: "fa-solid fa-pen",
      title: "Service 6",
      description:
        "With the idea of imparting programming knowledge, Mr. Sandeep Jain, an IIT Roorkee alumnus started a dream, GeeksforGeeks. Whether programming excites you or you feel stifled, how to ace data structures and algorithms, GeeksforGeeks is a one-stop solution.",
    },
  ];

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center justify-center uppercase mt-8 relative ">
        Our Services
        <hr className="absolute bottom-[-0.5rem]  w-full h-1 bg-blue-800" />
      </h1>
      <div className="max-w-7xl mx-auto p-8 flex flex-wrap justify-around">
        {services.map((service, index) => (
          <div
            key={index}
            className=" rounded-lg shadow-lg p-6 text-center hover:scale-105 hover:shadow-blue-950 transition-transform duration-300 m-4 w-80"
          >
           <div>
            <img src={img} alt="" />
           </div>
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className=" mb-4">{service.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
