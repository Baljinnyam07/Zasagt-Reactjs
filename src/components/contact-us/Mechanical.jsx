import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import { Link, useLocation, useParams } from 'react-router-dom';

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
      <div className="flex divide-x">
      <div className="text-[14px] uppercase xl:block hidden">
        <div
          className="text-[#454655] w-[480px] font-medium cursor-pointer border-b py-[40px]"
        >
          <Link className={`pl-[130px] flex gap-2 ${location.pathname.startsWith('/mechanical/mining')  ? 'text-[#D0A616]' : 'text-[#000]'}`} to='/mechanical/mining'><div className='w-[210px]'>ил уурхайн хөрс хуулалт, олборлолтын ажил</div>{location.pathname === '/mechanical/mining' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
        <div
          className="text-[#454655] w-[480px] font-medium cursor-pointer border-b py-[40px]"
        >
          <Link className={`pl-[130px] flex gap-2 ${location.pathname.startsWith('/mechanical/rent')  ? 'text-[#D0A616]' : 'text-[#000]'}`} to='/mechanical/rent'>уул уурхайн туслах ажил{location.pathname === '/mechanical/rent' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
        <div
          className="text-[#454655] w-[480px] font-medium cursor-pointer border-b py-[40px]"
        >
          <a className={`pl-[130px] flex gap-2 ${location.pathname.startsWith('/mechanical/openings')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/mechanical/openings'>тоног төхөөрөмж түрээс{location.pathname === '/mechanical/openings' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
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
  );
};

export default Mechanical;