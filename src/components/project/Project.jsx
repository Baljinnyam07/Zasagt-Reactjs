import React, { useEffect, useState } from 'react';
import steppe from './erdenestolgoi.png';
import gobi from './SouthGove.png';
import proImage1 from './project1.png';
import proImage2 from './project2.png'
import { FormattedMessage } from 'react-intl';

import { Link, useLocation, useNavigate } from 'react-router-dom';

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
    
      <div className="xl:flex block divide-x">
      <div className="text-[10px] xl:text-[14px] uppercase grid grid-cols-2 xl:block divide-x">
        <div
          className="text-[#454655] xl:w-[480px] font-medium cursor-pointer  xl:py-[40px] border-b"
          onClick={handleOvooTolgoiClick}
        >
          <Link className={`flex xl:pl-[130px] pl-[70px] py-4 gap-2 text-center xl:text-start ${location.pathname === '/project/ovooTolgoi' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/project/ovooTolgoi"><FormattedMessage id="OvootHeader"/>{location.pathname === '/project/ovooTolgoi' && <div className='w-[8px] h-[2px] hidden xl:block flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
        <div
          className="text-[#454655] xl:w-[480px] font-medium cursor-pointer border-b xl:py-[40px]"
          onClick={handleUurkhainNuursClick}
        >
          <Link className={`flex xl:pl-[130px] px-2 p-2  text-center xl:text-start ${location.pathname === '/project/UurhaiNvvrs' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/project/UurhaiNvvrs"><span className='w-[215px]'><FormattedMessage id='tsankhi'/></span>{location.pathname === '/project/UurhaiNvvrs' && <div className='w-[8px] hidden xl:block h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
      </div>
      <div className="xl:pl-[24px] pt-[40px]">
        <div className={`mx-[24px] xl:mx-0 ${showOvooTolgoi ? '' : 'hidden'}`}>
        <div className="text-[#454655] text-[32px] font-[500] font-sans mb-5 uppercase">төслийн тухай</div>
          <div className="">
            <div>
              <div className="text-[#454655] text-justify font-[400] leading-8 mb-5 sm:w-[894px]">
              Саусгоби Ресурс Лимитед (Саусгоби) нь Торонто болон Хонконгийн Хөрөнгийн Биржид (TSX: SGQ, HK: 1878) бүртгэлтэй олон нийтэд нээлттэй нүүрс нийлүүлэгч компани бөгөөд Саусгоби компани нь логистикийн дэд бүтэцтэй, арилжааны чадамж бүхий стратегийн ач холбогдолтой нүүрсний орд эзэмшдэг болно. Тус орд нь Өмнөговь аймгийн Гурван тэс суманд орших бөгөөд 9,283 га бүхий талбайд 2037 он хүртэл олборлолт хийх ашиглалтын тусгай зөвшөөрөлтэй.
              </div>
              <div className="text-[#454655] text-justify font-normal leading-8 mb-5 sm:w-[894px]">
              Манай компани 2022 оноос эхлэн Саусгоби Сэндс компанитай хамтран ажиллаж эхэлсэн бөгөөд Овоот Толгой дахь Нармандах болон Наржаргах уурхайд хөрс хуулалт, нүүрс олборлолтын ажлыг хийж гүйцэтгэж байна.              </div>
            </div>
            <div className='relative'>
              <div className="flex p-[16px] absolute">
                <img src={gobi} width={120} height={76} alt="Steppe" />
              </div>
              <div className='xl:w-[894px]'>
                <img className='bg-cover' src={proImage1} alt="Steppe" />
              </div>
            </div>
          </div>
          <div className='mb-[120px]'>
            <div className="text-[#454655] text-[32px] font-[500] font-sans mb-[24px] mt-[80px] uppercase">
              Төслийн одоогийн хүчин чадал
            </div>
            <div className="text-[#454655] text-base font-normal leading-8 mb-5 sm:w-[894px]">
            Засагт Хаан ХХК нь Овоот толгойн ил уурхайд 200 орчим ажилтантай жилийн 7.5 сая.м3 уулын цул олборлох хүчин чадал бүхий утгуурт ачигч болон өөрөө буулгагч машинуудаар үйл ажиллагаа явуулж байна.
            </div>
          </div>
        </div>
        <div className={`mx-[24px] xl:mx-0 ${showUurkhainNuurs ? '' : 'hidden'}`}>
        <div className="text-[#454655] text-[32px] font-[500] font-sans mb-5 uppercase">төслийн тухай</div>
          <div className="">
            <div>
              <div className="text-[#454655] text-base font-normal leading-8 mb-5 sm:w-[920px]">
              Монголын өмнөд хэсэгт орших Өмнөговь аймагт оршдог дэлхийн хамгийн том ашиглагдаагүй коксжих болон эрчим хүчний нүүрсний ордуудын нэг бөгөөд нийт 2.9 тэрбум тонн нөөцтэй ба үүний дөрөвний нэг нь сайн чанарын коксжих нүүрс бүхий ордтой стратегийн гол орд юм.
              </div>
            </div>
            <div className='relative'>
              <div className="flex absolute p-[16px]">
                <img src={steppe} width={121} height={44} alt="SouthGobi" />
              </div>
              <div className="xl:w-[894px]">
                <img className='bg-cover' src={proImage2} alt="SouthGobi" />
              </div>
            </div>
          </div>
          <div className='mb-[120px]'>
            <div className="text-[#454655] text-[32px] font-[500] font-sans mb-[24px] mt-[80px] uppercase">
            Төслийн одоогийн хүчин чадал
            </div>
            <div className="text-[#454655] text-base font-normal leading-8 mb-5 sm:w-[894px]">
            Эрдэнэс Таван Толгой ХХК-ийн баруун цанхийн уурхайн нүүрс ачилтын ажилд 2020 оноос эхлэн одоог хүртэл ажиллаж баялаг бүтээлцэж байгаа бөгөөд жилийн 4.8 сая.тн нүүрс ачилт хийх хүчин чадалтай.            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;