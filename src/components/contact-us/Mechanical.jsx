import React from 'react';
import Posts from '../Posts/Posts';
import { useLocation, useParams } from 'react-router-dom';
import AppContainer from '../AppContainer';

const Mechanical = () => {
  const location = useLocation();
  const { type } = useParams();
  return (
    <AppContainer>
      <div className="flex">
      <div className="text-[14px] mt-[40px] uppercase xl:block hidden">
        <div
          className="text-black w-[226px] mb-[79px] font-medium mb-5 cursor-pointer"
        >
          <a className={`${location.pathname.startsWith('/mechanical/mining')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/mechanical/mining'>ил уурхайн хөрс хуулалт, олборлолтын ажил</a>
        </div>
        <div
          className="text-black w-[226px] mb-[69px] font-medium mb-5 cursor-pointer"
        >
          <a className={`${location.pathname.startsWith('/mechanical/openings')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/mechanical/openings'>уул уурхайн туслах ажил</a>
        </div>
        <div
          className="text-black w-[246px] mr-[102px] font-medium mb-5 cursor-pointer"
        >
          <a className={`${location.pathname.startsWith('/mechanical/rent')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/mechanical/rent'>тоног төхөөрөмж түрээс</a>
        </div>
      </div>
      <div className='mx-[20px] sm:mx-auto'>
        <Posts type={`${type}`} urlType='mechanical'/>
      </div>
    </div>
    </AppContainer>
  );
};

export default Mechanical;