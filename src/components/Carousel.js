import React, { useEffect, useState } from "react";

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

  return (
    <div className="relative">
      <button
        className="absolute z-10 top-1/2 left-[64px] rounded-[90px] bg-[#FFFFFF] bg-opacity-20 p-[12px] transform -translate-y-1/2 text-3xl text-gray-500 focus:outline-none"
        onClick={prevSlide}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="ep:arrow-up-bold">
        <path id="Vector" d="M10.707 14.364C10.8945 14.1765 10.9998 13.9222 10.9998 13.657C10.9998 13.3918 10.8945 13.1375 10.707 12.95L5.757 8.00001L10.707 3.05001C10.8892 2.86141 10.99 2.60881 10.9877 2.34661C10.9854 2.08442 10.8802 1.8336 10.6948 1.64819C10.5094 1.46279 10.2586 1.35762 9.9964 1.35534C9.73421 1.35306 9.48161 1.45386 9.293 1.63601L3.636 7.29301C3.44853 7.48054 3.34322 7.73485 3.34322 8.00001C3.34322 8.26518 3.44853 8.51949 3.636 8.70701L9.293 14.364C9.48053 14.5515 9.73484 14.6568 10 14.6568C10.2652 14.6568 10.5195 14.5515 10.707 14.364Z" fill="white"/>
        </g>
        </svg>
      </button>
      <div className="absolute z-20 top-1/2 text-[64px] left-[144px] w-[900px] -translate-y-1/2 font-bold">
        <div className="uppercase text-[#fff]">
        Exploring, Constructing,
        Excelling
        </div>
      </div>
      <div className="relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`w-full h-[769px] object-cover transition-opacity ${
            index === currentIndex ? "opacity-100" : "opacity-0 absolute top-0 left-0"
          }`}
        />
      ))}
      <div className="absolute bottom-0 uppercase text-[#fff] border-t bg-[#fff] bg-opacity-10 border-opacity-75 w-full">
        <div className="flex justify-between h-[140px] divide-x divide-gray-400 items-center">
          <div className="w-[510px] text-center  font-[300] text-[21px] py-[39px] px-[100px] border-opacity-75">
                ил уурхайн хөрс хуулалт,
                олборлолтын ажил
          </div>
          <div className="w-[500px] font-[300] text-[21px] py-[53px] pl-[140px] border-opacity-75">
                уул уурхайн туслах ажил
          </div>
          <div className="w-[500px] font-[300] text-[21px] py-[53px] px-[100px] border-opacity-75">
                тоног төхөөрөмж түрээс
          </div>
        </div>
      </div>
      </div>
      <button
        className="absolute top-1/2 right-[64px] bg-[#FFFFFF] bg-opacity-20  rounded-[90px] p-[12px] transform -translate-y-1/2 text-3xl text-gray-500 focus:outline-none"
        onClick={nextSlide}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="ep:arrow-up-bold">
        <path id="Vector" d="M5.29295 1.63605C5.10548 1.82358 5.00017 2.07788 5.00017 2.34305C5.00017 2.60821 5.10548 2.86252 5.29295 3.05005L10.243 8.00005L5.29295 12.95C5.11079 13.1387 5.01 13.3913 5.01228 13.6535C5.01456 13.9156 5.11973 14.1665 5.30513 14.3519C5.49054 14.5373 5.74135 14.6424 6.00355 14.6447C6.26575 14.647 6.51835 14.5462 6.70695 14.364L12.364 8.70705C12.5514 8.51952 12.6567 8.26521 12.6567 8.00005C12.6567 7.73488 12.5514 7.48058 12.364 7.29305L6.70695 1.63605C6.51942 1.44858 6.26512 1.34326 5.99995 1.34326C5.73479 1.34326 5.48048 1.44858 5.29295 1.63605Z" fill="white"/>
        </g>
        </svg>
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

  const autoplayInterval = 3000;

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
            className={`flex gap-[200px] h-[180px] items-center carousel-item transition-opacity duration-500 ${index === currentIndex ?  "opacity-100" : "opacity-0 absolute z-0 top-0 left-0 hidden"}`}
          >
            <div className="carousel-caption w-max py-[42px]">{item.caption}</div>
            <img className="w-max h-max p-[26px] left" src={item.image} alt={`Carousel Item ${index}`} />
          </div>
        ))}
      </div>
      <button
        className="border rounded-[90px] mt-[66px] w-[40px] mr-[16px] h-[40px] bg-opacity-20 p-[12px] transform -translate-y-1/2 text-3xl text-gray-500 focus:outline-none"
        onClick={prevItem}
      >
        <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="ep:arrow-up-bold">
        <path id="Vector" d="M10.707 14.364C10.8945 14.1765 10.9998 13.9222 10.9998 13.657C10.9998 13.3918 10.8945 13.1375 10.707 12.95L5.757 8.00001L10.707 3.05001C10.8892 2.86141 10.99 2.60881 10.9877 2.34661C10.9854 2.08442 10.8802 1.8336 10.6948 1.64819C10.5094 1.46279 10.2586 1.35762 9.9964 1.35534C9.73421 1.35306 9.48161 1.45386 9.293 1.63601L3.636 7.29301C3.44853 7.48054 3.34322 7.73485 3.34322 8.00001C3.34322 8.26518 3.44853 8.51949 3.636 8.70701L9.293 14.364C9.48053 14.5515 9.73484 14.6568 10 14.6568C10.2652 14.6568 10.5195 14.5515 10.707 14.364Z" fill="#23356B"/>
        </g>
        </svg>
      </button>
      <button
        className="border bg-opacity-20 w-[40px] h-[40px] rounded-[90px] p-[12px] transform -translate-y-1/2 text-3xl text-gray-500 focus:outline-none"
        onClick={nextItem}
      >
        <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="ep:arrow-up-bold">
        <path id="Vector" d="M5.29295 1.63605C5.10548 1.82358 5.00017 2.07788 5.00017 2.34305C5.00017 2.60821 5.10548 2.86252 5.29295 3.05005L10.243 8.00005L5.29295 12.95C5.11079 13.1387 5.01 13.3913 5.01228 13.6535C5.01456 13.9156 5.11973 14.1665 5.30513 14.3519C5.49054 14.5373 5.74135 14.6424 6.00355 14.6447C6.26575 14.647 6.51835 14.5462 6.70695 14.364L12.364 8.70705C12.5514 8.51952 12.6567 8.26521 12.6567 8.00005C12.6567 7.73488 12.5514 7.48058 12.364 7.29305L6.70695 1.63605C6.51942 1.44858 6.26512 1.34326 5.99995 1.34326C5.73479 1.34326 5.48048 1.44858 5.29295 1.63605Z" fill="#23356B"/>
        </g>
        </svg>
      </button>
    </div>
  );
};



