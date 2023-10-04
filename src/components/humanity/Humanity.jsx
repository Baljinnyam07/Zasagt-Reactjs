import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import humanity1 from './humanity1.png'
import humanity2 from './humanity2.png'
import humanity3 from './humanity3.png'

import Posts from '../Posts/Posts';
import { FormattedMessage, useIntl } from 'react-intl';

function Humanity() {
  const [showOvooTolgoi, setShowOvooTolgoi] = useState(true);
  const [showAltanTsagaanOvoo, setShowAltanTsagaanOvoo] = useState(false);
  const [showUurkhainNuurs, setShowUurkhainNuurs] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const intl = useIntl();

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
      <div className="text-[10px] xl:text-[14px] uppercase xl:block flex divide-x">
        
        <div
          className="text-[#454655] w-1/3 xl:w-[480px] text-center xl:text-start font-medium mb-5 cursor-pointer py-[20px] xl:py-[40px] border-b"
          onClick={handleOvooTolgoiClick}
        >
          <Link className={`flex xl:pl-[130px] flex justify-center xl:justify-normal items-center xl:items-start xl:px-[0px] px-[10px] gap-2 ${location.pathname === '/humanity/resource-policy' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/project/ovooTolgoi"><FormattedMessage id='humanPolicy'/>
          {location.pathname === '/humanity/resource-policy' && <div className='w-[8px] h-[2px] flex-shrink-0 xl:block hidden bg-[#D0A616] mt-[9px]'></div>}</Link>
          
        </div>
        <div
          className="text-[#454655] w-1/3 xl:w-[480px] flex justify-center xl:justify-normal items-center xl:items-start text-center xl:text-start font-medium mb-5 cursor-pointer py-[20px] xl:py-[40px] border-b"
          onClick={handleAltanTsagaanOvooClick}
        >
          <Link className={`flex xl:pl-[130px] px-[20px] xl:px-[0px] gap-2 ${location.pathname === '/humanity/curriculum' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/project/tsagaanOvoo"><FormattedMessage id='curriculum'/>{location.pathname === '/humanity/curriculum' && <div className='w-[8px] hidden xl:block h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>


        <div
          className="text-[#454655] w-1/3 xl:w-[480px] flex justify-center xl:justify-normal items-center xl:items-start text-center xl:text-start font-medium mb-5 cursor-pointer py-[20px] xl:py-[40px] border-b"
          onClick={handleUurkhainNuursClick}
        >
          <a className={`flex xl:pl-[130px] px-[20px] xl:px-[0px] gap-2 ${location.pathname === '/humanity/hire' ? 'text-[#D0A616]' : 'text-[#000]'}`} href="/humanity/hire"><FormattedMessage id='availavleJob'/>{location.pathname === '/humanity/hire' && <div className='w-[8px] h-[2px] xl:block hidden flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
        
      </div>
      <div className="xl:pt-[40px] pb-[121px]">
        <div className={`px-[20px] xl:mx-0 ${showOvooTolgoi ? '' : 'hidden'}`}>
          <div className="w-full">
            <div className='flex flex-col-reverse lg:flex-row mb-[80px]'>
              <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">
                  <img className='w-full xl:w-[384px] h-[262px] ' src={humanity1} alt="humanityPhoto" />
              </div>
              <div className="text-[#454655] text-start xl:text-justify align-center xl:mt-[50px] font-normal leading-8 mb-5 w-full xl:w-[604px] sm:pl-[24px]">
                <h1 className='text-[24px] xl:text-[32px]'><FormattedMessage id='policy'/></h1>
                <div className='py-[24px] leading-[24px] sm:pr-[45px] w-full'>
                  <FormattedMessage id='title1'/>
                </div>
              </div>
            </div>
            <div className='lg:flex mb-[80px]'>
              <div className="text-[#454655] text-justify align-center h-max xl:mt-[50px] font-normal leading-8 mb-5 w-full xl:w-[604px]">
                <h1 className='text-[24px] xl:text-[32px]'><FormattedMessage id='purpose'/></h1>
                <div className='py-[24px] ml-4 leading-[24px] xl:mr-[45px]'>
                  <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "title2"}) }} />
                </div>                
              </div>
              <div className="text-black text-[32px] xl:mr-[45px] font-500 font-sans mb-5 uppercase">
                  <img className='w-full xl:w-[384px] h-[262px]' src={humanity2} alt="humanityPhoto" />
              </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row'>
              <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">
                  <img className='w-full xl:w-[384px] h-[262px]' src={humanity3} alt="humanityPhoto" />
              </div>
              <div className="text-[#454655] text-start xl:text-justify align-center h-max xl:mt-[50px] font-normal leading-8 mb-5 w-full xl:w-[604px] sm:pl-[24px]">
                <h1 className='text-[24px] xl:text-[32px]'><FormattedMessage id='procedure'/></h1>
                <div className='py-[24px] text-justify leading-[24px] sm:pr-[45px]'><FormattedMessage id='title3'/></div>
              </div>
            </div>
          </div>
        </div>
        <div className={` xl:mx-0 ${showAltanTsagaanOvoo ? '' : 'hidden'}`}>

        </div>
        <div className={`xl:px-[20px] ${showUurkhainNuurs ? '' : 'hidden'}`}>
          <div className="w-full">
            <div className="w-full">
            <Posts urlType='humanity'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Humanity