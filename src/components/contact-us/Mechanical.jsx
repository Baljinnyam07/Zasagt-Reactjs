import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import { Link, useLocation, useParams } from 'react-router-dom';
import AppContainer from '../AppContainer';

const Mechanical = () => {
  const location = useLocation();
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    if (location.pathname === '/mechanical/mining') {
      setShow1(true);
      setShow2(false);
      setShow3(false);
    } else if (location.pathname === '/mechanical/rent') {
      setShow1(false);
      setShow2(true);
      setShow3(false);
    } else if (location.pathname === '/mechanical/openings') {
      setShow1(false);
      setShow2(false);
      setShow3(true);
    }
  }, [location.pathname]);

  return (
    <AppContainer>
      <div className="flex">
      <div className="text-[14px] mt-[40px] uppercase xl:block hidden">
        <div
          className="text-black w-[226px] mb-[79px] font-medium mb-5 cursor-pointer"
        >
          <Link className={`${location.pathname.startsWith('/mechanical/mining')  ? 'text-[#D0A616]' : 'text-[#000]'}`} to='/mechanical/mining'>ил уурхайн хөрс хуулалт, олборлолтын ажил</Link>
        </div>
        <div
          className="text-black w-[226px] mb-[69px] font-medium mb-5 cursor-pointer"
        >
          <Link className={`${location.pathname.startsWith('/mechanical/rent')  ? 'text-[#D0A616]' : 'text-[#000]'}`} to='/mechanical/rent'>уул уурхайн туслах ажил</Link>
        </div>
        <div
          className="text-black w-[246px] mr-[102px] font-medium mb-5 cursor-pointer"
        >
          <a className={`${location.pathname.startsWith('/mechanical/openings')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/mechanical/openings'>тоног төхөөрөмж түрээс</a>
        </div>
      </div>
      <div className='sm:'>
        
        <div className='border mt-10'>
          <div className={`mx-[24px] xl:mx-0 ${show1 ? '' : 'hidden'}`}>
            <div className='w-full flex gap-20'>
                <div className='border mt-10 p-2 bg-[#D0A616] text-[#fff]'>1000,0 - 3000,0 m3/жил жил гүйцэтгэх</div>
                <div className='border mt-10 p-2 bg-[#D0A616] text-[#fff]'>2000,0 - 7000,0 m3/жил жил гүйцэтгэх</div>
            </div>
        </div>
        <div className={`mx-[24px] xl:mx-0 ${show2 ? '' : 'hidden'}`}>
          <div className='w-full flex'>
                <div className='p-2'>Нүүрс ачилтын ажил </div>
                <div className='p-2'>Туслах жил</div>
            </div>
        </div>
        </div>
        <div className={`${show3 ? '' : 'hidden'}`}>
          <Posts type={`${type}`} urlType='mechanical'/>
        </div>
      </div>
    </div>
    </AppContainer>
  );
};

export default Mechanical;