import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import humanity1 from './humanity1.png'
import humanity2 from './humanity2.png'
import humanity3 from './humanity3.png'

import Posts from '../Posts/Posts';

function Humanity() {
  const [showOvooTolgoi, setShowOvooTolgoi] = useState(true);
  const [showAltanTsagaanOvoo, setShowAltanTsagaanOvoo] = useState(false);
  const [showUurkhainNuurs, setShowUurkhainNuurs] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/humanity/resource-policy') {
      setShowOvooTolgoi(true);
      setShowAltanTsagaanOvoo(false);
      setShowUurkhainNuurs(false);
    } else if (location.pathname === '/humanity/curriculum') {
      setShowOvooTolgoi(false);
      setShowAltanTsagaanOvoo(true);
      setShowUurkhainNuurs(false);
    } else if (location.pathname === '/humanity/hire') {
      setShowOvooTolgoi(false);
      setShowAltanTsagaanOvoo(false);
      setShowUurkhainNuurs(true);
    }
  }, [location.pathname]);

  const handleOvooTolgoiClick = () => {
    navigate('/humanity/resource-policy');
  };

  const handleAltanTsagaanOvooClick = () => {
    navigate('/humanity/curriculum');
  };

  const handleUurkhainNuursClick = () => {
    navigate('/humanity/hire');
  };

  return (
      <div className="xl:flex inline-block divide-x">
      <div className="text-[14px] uppercase xl:block hidden">
        
        <div
          className="text-[#454655] w-[480px] font-medium mb-5 cursor-pointer py-[40px] border-b"
          onClick={handleOvooTolgoiClick}
        >
          <Link className={`flex pl-[130px] gap-2 ${location.pathname === '/humanity/resource-policy' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/project/ovooTolgoi">хүний нөөцийн бодлого
          {location.pathname === '/humanity/resource-policy' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
          
        </div>
        <div
          className="text-[#454655] w-[480px] font-medium mb-5 cursor-pointer py-[40px] border-b"
          onClick={handleAltanTsagaanOvooClick}
        >
          <Link className={`flex pl-[130px] gap-2 ${location.pathname === '/humanity/curriculum' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/project/tsagaanOvoo">сургалтын хөтөлбөр{location.pathname === '/humanity/curriculum' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>


        <div
          className="text-[#454655] w-[480px] font-medium mb-5 cursor-pointer py-[40px] border-b"
          onClick={handleUurkhainNuursClick}
        >
          <a className={`flex pl-[130px] gap-2 ${location.pathname === '/humanity/hire' ? 'text-[#D0A616]' : 'text-[#000]'}`} href="/humanity/hire">нээлттэй ажлын байр{location.pathname === '/humanity/hire' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
        
      </div>
      <div className="pt-[40px] pb-[121px]">
        <div className={`px-[24px] xl:mx-0 ${showOvooTolgoi ? '' : 'hidden'}`}>
          <div className="w-full">
            <div className='flex flex-col-reverse lg:flex-row mb-[80px]'>
              <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">
                  <img className='w-full xl:w-[384px] h-[262px] ' src={humanity1} alt="humanityPhoto" />
              </div>
              <div className="text-[#454655] text-justify align-center mt-[50px] font-normal leading-8 mb-5 w-full xl:w-[604px] sm:pl-[24px]">
                <h1 className='text-[32px] uppercase'>бодлого</h1>
                <div className='py-[24px] leading-[24px] sm:pr-[45px] w-full'>
                Бид “Засагт Хаан” компанийн үнэт зүйлс болон ёс зүйн зан төлвийг зохистойгоор баримтлан ажиллахыг хичээдэг. Манай ажилтнуудын соёл нь аюулгүй осолгүй ажиллагаа, ёс зүй, хамтын ажиллагаа, хариуцлага гэсэн үндсэн 3 тулгуур багана дээр суурилдаг.
                </div>
              </div>
            </div>
            <div className='lg:flex  mb-[80px]'>
              <div className="text-[#454655] text-justify align-center h-max mt-[50px] font-normal leading-8 mb-5 w-full xl:w-[604px]">
                <h1 className='text-[32px] uppercase'>зорилго, зорилт</h1>
                <div className='py-[24px] leading-[24px] mr-[45px]'>
                  Байгууллага доторх ажиллах хүчийг бүрдүүлж, чадварлаг, мэргэшсэн ажил горилогчийг сонгон шалгаруулж , тогтвор суурьшилтай ажиллуулах, хөгжүүлэх, дэмжлэг туслалцаа үзүүлэх зорилготой.
                </div>                
              </div>
              <div className="text-black text-[32px] mr-[45px] font-500 font-sans mb-5 uppercase">
                  <img className='w-full xl:w-[384px] h-[262px]' src={humanity2} alt="humanityPhoto" />
              </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row'>
              <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">
                  <img className='w-full xl:w-[384px] h-[262px]' src={humanity3} alt="humanityPhoto" />
              </div>
              <div className="text-[#454655] text-start xl:text-justify align-center h-max mt-[50px] font-normal leading-8 mb-5 w-full xl:w-[604px] sm:pl-[24px]">
                <h1 className='text-[32px] uppercase'>Ажилд авах журам</h1>
                <div className='py-[24px] leading-[24px] sm:pr-[45px]'>Бид ажилд орох хүсэлт гаргасан иргэн бүрд адил, тэгш боломж олгож, ажилтан сонгон шалгаруулалтаа шударга, ил тодоор явуулдаг.</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`px-[24px] xl:mx-0 ${showAltanTsagaanOvoo ? '' : 'hidden'}`}>
        <div className='w-[800px] h-[800px]'></div>

        </div>
        <div className={`px-[24px] ${showUurkhainNuurs ? '' : 'hidden'}`}>
          <div className="">
            <div className="">
            <Posts urlType='humanity'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Humanity