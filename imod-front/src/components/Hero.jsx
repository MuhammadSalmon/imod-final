import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img1.jpg';
import { Link } from 'react-router-dom';
import AnimatedLink from './Button';

const HeroSection = () => {
  const [showText, setShowText] = useState(false);
  const news = [
    { id: 1, title: 'News for rest of life1', img: img1 },
    { id: 2, title: 'News for rest of life2', img: img2 },
    { id: 3, title: 'News for rest of life3', img: img3 },
    { id: 4, title: 'News for rest of life4', img: img4 },
  ];
  // Animation for text and button
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  
  // Trigger text animation on load
  useEffect(() => {
    setTimeout(() => setShowText(true), 500);
  }, [])

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Slows down the slide change interval
    pauseOnHover: true,
    cssEase: "ease-in-out", // Creates a smoother ease effect
    speed: 2000,// Slows down the transition itself
    arrows: false 
  };
  

  return (
    <Slider {...settings}>
      {news.map((item, index) => 
      (<div key={index}>
        <div
      className="parallax relative flex items-center justify-start  md:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${item.img})`,  backgroundRepeat: 'no-repeat', height: '30vh' }}
      >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-left px-4 md:px-10 max-w-2xl">
        {/* Animated text */}
      
        <motion.h1
          initial="hidden"
          animate={showText ? 'visible' : 'hidden'}
          variants={textVariants}
          className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl ml-40 font-bold mb-4 md:mb-6 leading-snug"
          >
          {item.title}
        </motion.h1>
        
        {/* Animated button */}
        <motion.div
          initial="hidden"
          animate={showText ? 'visible' : 'hidden'}
          variants={buttonVariants}
          className='ml-40'
          >
         <AnimatedLink link='/history' />
        </motion.div>
      </div>
    </div>
    </div>
      ))}
    
      </Slider>
  );
};

export default HeroSection;
