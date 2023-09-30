import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

export const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  const autoplayInterval = 3000;

  useEffect(() => {
    const autoplayTimer = setInterval(nextSlide, autoplayInterval);
    return () => {
      clearInterval(autoplayTimer);
    };
    // eslint-disable-next-line
  }, [currentIndex]);

  const handlePointClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative">
      <button
        className="absolute z-20 top-1/2 left-[4px] xl:left-[64px] rounded-[90px] bg-[#FFFFFF] bg-opacity-20 p-[6px] xl:p-[12px] transform -translate-y-1/2 text-3xl text-gray-500 focus:outline-none"
        onClick={prevSlide}
      >
        
        <div className="w-3 md:w-5">
        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="ep:arrow-up-bold">
            <path id="Vector" d="M10.707 14.364C10.8945 14.1765 10.9998 13.9222 10.9998 13.657C10.9998 13.3918 10.8945 13.1375 10.707 12.95L5.757 8.00001L10.707 3.05001C10.8892 2.86141 10.99 2.60881 10.9877 2.34661C10.9854 2.08442 10.8802 1.8336 10.6948 1.64819C10.5094 1.46279 10.2586 1.35762 9.9964 1.35534C9.73421 1.35306 9.48161 1.45386 9.293 1.63601L3.636 7.29301C3.44853 7.48054 3.34322 7.73485 3.34322 8.00001C3.34322 8.26518 3.44853 8.51949 3.636 8.70701L9.293 14.364C9.48053 14.5515 9.73484 14.6568 10 14.6568C10.2652 14.6568 10.5195 14.5515 10.707 14.364Z" fill="white"/>
          </g>
        </svg>
        </div>
      </button>
      <div className="absolute z-10 top-1/2 text-[24px] xl:text-[64px] left-[64px] xl:left-[144px] w-[350px] xl:w-[1000px] -translate-y-1/2 font-bold">
        <div className="uppercase text-[#fff]">
        Exploring, Constructing,
        Excelling
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-transparent via-transparent to-blue-900 z-10 w-full h-full"/>
      <div className="relative">
      <div className="flex  justify-center">
      <ul className="absolute z-20 top-[580px] cursor-pointer carousel-points flex space-x-10 justify-center">
          {images.map((_, index) => (
            <li
              key={index}
              className={`carousel-point w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#fff]" : "border"}`}
              onClick={() => handlePointClick(index)}
            ></li>
          ))}
        </ul>
      </div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`w-full h-[400px] -z-10 xl:h-[769px] transition-opacity transition ease-in-out delay-150 duration-300 ${
            index === currentIndex ? "opacity-100" : "opacity-0 absolute top-0 left-0"
          }`}
          
        />
      ))}
      
      <div className="absolute bottom-0 z-20 uppercase text-[#fff] border-t bg-[#fff] backdrop-blur-sm bg-white/10 w-full">
        <div className="flex justify-between h-[60px] xl:h-[140px] divide-x divide-gray-400 items-center">
          <Link to="/mechanical/mining" className="w-full hover:text-[#D0A616] xl:w-[500px] text-center font-[300] text-[8px] xl:text-[21px] xl:py-[39px] sm:px-[58px] border-opacity-25">
                <FormattedMessage id="strip"/>
          </Link>
          <Link to="/mechanical/rent" className="w-full hover:text-[#D0A616] xl:w-[500px] text-center font-[300] text-[8px] xl:text-[21px] py-[18px] xl:py-[53px] px-[40px] xl:pl-[140px] border-opacity-25">
                <FormattedMessage id="miningSup"/>
          </Link>
          <Link to="/mechanical/openings" className="w-full hover:text-[#D0A616] xl:w-[500px] text-center font-[300] text-[8px] xl:text-[21px] xl:text-[21px] py-[18px] px-[23px] xl:px-[100px] border-opacity-25">
          <div className="xl:h-[105px] flex justify-center items-center">
          <FormattedMessage id="rentalEq"/>
          </div>
          </Link>
        </div>
      </div>
      </div>
      <button
        className="absolute z-20 top-1/2 right-[4px] xl:right-[64px] bg-[#FFFFFF] bg-opacity-20  rounded-[90px] p-[6px] xl:p-[12px] transform -translate-y-1/2 text-3xl text-gray-500 focus:outline-none"
        onClick={nextSlide}
      >
        <div className="w-3 md:w-5">
          <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="ep:arrow-up-bold">
              <path id="Vector" d="M5.29295 1.63605C5.10548 1.82358 5.00017 2.07788 5.00017 2.34305C5.00017 2.60821 5.10548 2.86252 5.29295 3.05005L10.243 8.00005L5.29295 12.95C5.11079 13.1387 5.01 13.3913 5.01228 13.6535C5.01456 13.9156 5.11973 14.1665 5.30513 14.3519C5.49054 14.5373 5.74135 14.6424 6.00355 14.6447C6.26575 14.647 6.51835 14.5462 6.70695 14.364L12.364 8.70705C12.5514 8.51952 12.6567 8.26521 12.6567 8.00005C12.6567 7.73488 12.5514 7.48058 12.364 7.29305L6.70695 1.63605C6.51942 1.44858 6.26512 1.34326 5.99995 1.34326C5.73479 1.34326 5.48048 1.44858 5.29295 1.63605Z" fill="white"/>
            </g>
          </svg>
        </div>
      </button>
      </div>
  );
};


export const ProjectCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const autoplayInterval = 5000;

  useEffect(() => {
    const autoplayTimer = setInterval(nextItem, autoplayInterval);
    return () => {
      clearInterval(autoplayTimer);
    };
    // eslint-disable-next-line
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`lg:flex-row relative flex border-b flex-col-reverse carousel-item transition-opacity duration-500 ${index === currentIndex ?  "opacity-100" : "opacity-0 absolute z-0 top-0 left-0 hidden"}`}
          >
            <div className="px-[20px] xl:px-[0px] xl:pl-[11.4%] pt-[40px] h-[430px] xl:h-[400px] border-r">
            <h1 className='uppercase mb-[16px] text-[#23356B] text-[24px] xl:text-[32px] xl:px-0 font-[600]'><FormattedMessage id={item.proLan}/></h1>
              <div className=" w-full xl:w-[54.8vw] mb-[14px]">
                <div className="carousel-caption w-full xl:w-[800px] text-justify font-[400] text-[#454655] text-[14px] md:text-[16px]"><FormattedMessage id={item.lan1}/></div>
              </div>
              <div className="w-full xl:w-[54.8vw]">
                <div className="carousel-caption w-full xl:w-[800px] text-justify font-[400] text-[#454655] text-[14px] md:text-[16px]"><FormattedMessage id={item.lan2}/></div>
              </div>
              <div className="flex items-end absolute bottom-0">
              <button
                className="border rounded-[90px] mt-[24px] xl:mt-[66px] w-[40px] mr-[16px] h-[40px] bg-opacity-20 p-[12px] transform -translate-y-1/2 text-3xl text-gray-500 focus:outline-none"
                onClick={prevItem}
              >
                <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="ep:arrow-up-bold">
                <path id="Vector" d="M10.707 14.364C10.8945 14.1765 10.9998 13.9222 10.9998 13.657C10.9998 13.3918 10.8945 13.1375 10.707 12.95L5.757 8.00001L10.707 3.05001C10.8892 2.86141 10.99 2.60881 10.9877 2.34661C10.9854 2.08442 10.8802 1.8336 10.6948 1.64819C10.5094 1.46279 10.2586 1.35762 9.9964 1.35534C9.73421 1.35306 9.48161 1.45386 9.293 1.63601L3.636 7.29301C3.44853 7.48054 3.34322 7.73485 3.34322 8.00001C3.34322 8.26518 3.44853 8.51949 3.636 8.70701L9.293 14.364C9.48053 14.5515 9.73484 14.6568 10 14.6568C10.2652 14.6568 10.5195 14.5515 10.707 14.364Z" fill="#23356B"/>
                </g>
                </svg>
              </button>
              <button
                className="border rounded-[90px] mt-[24px] xl:mt-[66px] w-[40px] mr-[16px] h-[40px] bg-opacity-20 p-[12px] transform -translate-y-1/2 text-3xl text-gray-500 focus:outline-none"
                onClick={nextItem}
              >
                <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="ep:arrow-up-bold">
                <path id="Vector" d="M5.29295 1.63605C5.10548 1.82358 5.00017 2.07788 5.00017 2.34305C5.00017 2.60821 5.10548 2.86252 5.29295 3.05005L10.243 8.00005L5.29295 12.95C5.11079 13.1387 5.01 13.3913 5.01228 13.6535C5.01456 13.9156 5.11973 14.1665 5.30513 14.3519C5.49054 14.5373 5.74135 14.6424 6.00355 14.6447C6.26575 14.647 6.51835 14.5462 6.70695 14.364L12.364 8.70705C12.5514 8.51952 12.6567 8.26521 12.6567 8.00005C12.6567 7.73488 12.5514 7.48058 12.364 7.29305L6.70695 1.63605C6.51942 1.44858 6.26512 1.34326 5.99995 1.34326C5.73479 1.34326 5.48048 1.44858 5.29295 1.63605Z" fill="#23356B"/>
                </g>
                </svg>
              </button>
              </div>
            </div>
            <div className="w-full">
            <img className="w-full xl:w-[100%] h-full xl:h-[400px]" src={item.image} alt={`Carousel Item ${index}`} />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};



