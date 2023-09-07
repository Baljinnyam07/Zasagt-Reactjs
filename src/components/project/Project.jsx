import React, { useEffect, useState } from 'react';
import steppe from './steppe.png';
import gobi from './southgobi.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AppContainer from '../AppContainer';

const Project = () => {
  const [showOvooTolgoi, setShowOvooTolgoi] = useState(true);
  const [showUurkhainNuurs, setShowUurkhainNuurs] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/project/ovooTolgoi') {
      setShowOvooTolgoi(true);
      setShowUurkhainNuurs(false);
    } else if (location.pathname === '/project/tsagaanOvoo') {
      setShowOvooTolgoi(false);
      setShowUurkhainNuurs(false);
    } else if (location.pathname === '/project/UurhaiNvvrs') {
      setShowOvooTolgoi(false);
      setShowUurkhainNuurs(true);
    }
  }, [location.pathname]);

  const handleOvooTolgoiClick = () => {
    navigate('/project/ovooTolgoi');
  };

  const handleUurkhainNuursClick = () => {
    navigate('/project/UurhaiNvvrs');
  };

  return (
    <AppContainer>
      <div className="xl:flex block">
      <div className="text-[14px] mt-[40px] uppercase xl:block hidden">
        <div
          className="text-black w-[226px] mb-[79px] font-medium mb-5 cursor-pointer"
          onClick={handleOvooTolgoiClick}
        >
          <Link className={`flex gap-2 ${location.pathname === '/project/ovooTolgoi' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/project/ovooTolgoi">овоо толгой{location.pathname === '/project/ovooTolgoi' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
        <div
          className="text-black w-[246px] mr-[102px] font-medium mb-5 cursor-pointer"
          onClick={handleUurkhainNuursClick}
        >
          <Link className={`flex ${location.pathname === '/project/UurhaiNvvrs' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/project/UurhaiNvvrs"><span className='w-[215px]'>цанхийн баруун уурхайн НҮҮРС АЧИЛТ</span>{location.pathname === '/project/UurhaiNvvrs' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
      </div>
      <div className="mt-[80px]">
        <div className={`mx-[24px] xl:mx-0 ${showOvooTolgoi ? '' : 'hidden'}`}>
        <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">төслийн тухай</div>

          <div className="flex flex-col-reverse md:flex-row">
            <div>
              <div className="text-black text-base font-normal leading-8 mb-5 sm:w-[578px]">
                “Степ Голд” ХХК нь Монголын уул уурхайн салбарт алт, мөнгө үйлдвэрлэлээр
                тэргүүлэгч аж ахуйн нэгжүүдийн нэг болох зорилтын хүрээнд жилд 60,000
                унц алт гарган авах төлөвлөгөө тавин ажиллаж байгаа ба Торонтогийн
                хөрөнгийн бирж (TSX:STGO) дээр олон нийтэд нээлттэй арилжаалагддаг.
              </div>
            </div>
            <div className="flex items-center ml-[52px] my-10 sm:my-0 justify-center">
              <img src={steppe} width={236} height={147} alt="Steppe" />
            </div>
          </div>
          <div className=''>
            <div className="text-black text-[32px] font-500 font-sans mb-[24px] mt-[80px] uppercase">
              Төслийн хүчин чадал
            </div>
            <div className="text-black text-base font-normal leading-8 mb-5 w-full sm:w-[480px]">
              Одоогийн байдлаар жилийн 1.8 сая.тн хүдэр олборлох хүчин чадалтай.
            </div>
            <div className="text-black text-base font-normal leading-8 mb-5 sm:w-[480px]">
              Степ Голд ХК-ийн хоёрдугаар шатны ил уурхайн төсөл эхэлснээр хүчин чадал нь 4.0 сая.тн хүдэр
              олборлох, хөрс хуулалт 2.0 сая м3 болж өснө.
            </div>
          </div>
        </div>
        <div className={`mx-[24px] xl:mx-0 ${showUurkhainNuurs ? '' : 'hidden'}`}>
        <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">төслийн тухай</div>
          <div className="flex flex-col-reverse md:flex-row">
            <div>
              <div className="text-black text-base font-normal leading-8 mb-5 sm:w-[520px]">
                Монголын өмнөд хэсэгт орших Өмнөговь аймагт оршдог дэлхийн хамгийн том
                ашиглагдаагүй коксжих болон эрчим хүчний нүүрсний ордуудын нэг бөгөөд нийт 6.4 тэрбум
                тонн нөөцтэй ба үүний дөрөвний нэг нь сайн чанарын коксжих нүүрс бүхий стратегийн орд юм.
              </div>
            </div>
            <div className="flex items-center mt-12 my-10 ml-[52px]">
              <img src={gobi} width={536} height={347} alt="SouthGobi" />
            </div>
          </div>
          <div>
            <div className="text-black text-[32px] font-500 font-sans mb-[24px] mt-[80px] uppercase">
              Төслийн хүчин чадал
            </div>
            <div className="text-black text-base font-normal leading-8 mb-5 sm:w-[480px]">
              Одоогоор 4.0 сая м3 уулын цулын ажил гүйцэтгэх хүчин чадалтай.
            </div>
            <div className="text-black text-base font-normal leading-8 sm:w-[480px]">
              Шинээр тоног төхөөрөмж худалдаж авсны дараа:
            </div>
            <div className="text-black text-base font-normal leading-8 mb-5 sm:w-[480px]">
              6.0 сая м3 уулын цулын ажил хийх хүчин чадалтай болно.
            </div>
          </div>
        </div>
      </div>
    </div>
    </AppContainer>
  );
};

export default Project;