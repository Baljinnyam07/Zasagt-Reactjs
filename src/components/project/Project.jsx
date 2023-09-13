import React, { useEffect, useState } from 'react';
import steppe from './steppe.png';
import gobi from './southgobi.png';
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
      <div className="text-[14px] uppercase xl:block hidden">
        <div
          className="text-[#454655] w-[400px] font-medium cursor-pointer py-[40px] border-b"
          onClick={handleOvooTolgoiClick}
        >
          <Link className={`flex pl-[120px] gap-2 ${location.pathname === '/project/ovooTolgoi' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/project/ovooTolgoi">овоот толгой{location.pathname === '/project/ovooTolgoi' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
        <div
          className="text-[#454655] w-[400px] font-medium cursor-pointer border-b py-[40px]"
          onClick={handleUurkhainNuursClick}
        >
          <Link className={`flex pl-[120px] ${location.pathname === '/project/UurhaiNvvrs' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/project/UurhaiNvvrs"><span className='w-[215px]'>цанхийн баруун уурхайн НҮҮРС АЧИЛТ</span>{location.pathname === '/project/UurhaiNvvrs' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
      </div>
      <div className="xl:pl-[80px] pt-[80px]">
        <div className={`mx-[24px] xl:mx-0 ${showOvooTolgoi ? '' : 'hidden'}`}>
        <div className="text-[#454655] text-[32px] font-[500] font-sans mb-5 uppercase">төслийн тухай</div>

          <div className="flex flex-col-reverse md:flex-row">
            <div>
              <div className="text-[#454655] text-base font-normal leading-8 mb-5 sm:w-[578px]">
              Саусгоби Ресурс Лимитед (Саусгоби) нь Торонто болон Хонконгийн Хөрөнгийн Биржид (TSX: SGQ, HK: 1878) бүртгэлтэй олон нийтэд нээлттэй нүүрс нийлүүлэгч компани бөгөөд Саусгоби компани нь логистикийн дэд бүтэцтэй, арилжааны чадамж бүхий стратегийн ач холбогдолтой нүүрсний орд эзэмшдэг болно. Тус орд нь Өмнөговь аймгийн Гурван тэс суманд орших бөгөөд 9,283 га бүхий талбайд 2037 он хүртэл олборлолт хийх ашиглалтын тусгай зөвшөөрөлтэй.
              </div>
              <div className="text-[#454655] text-base font-normal leading-8 mb-5 sm:w-[578px]">
              Манай компани 2022 оноос эхлэн Саусгоби Сэндс компанитай хамтран ажиллаж эхэлсэн бөгөөд Овоот Толгой дахь Нармандах болон Наржаргах уурхайд хөрс хуулалт, нүүрс олборлолтын ажлыг хийж гүйцэтгэж байна.              </div>
            </div>
            <div className="flex items-center ml-[52px] my-10 sm:my-0 justify-center">
              <img src={steppe} width={236} height={147} alt="Steppe" />
            </div>
          </div>
          <div className='mb-[120px]'>
            <div className="text-[#454655] text-[32px] font-[500] font-sans mb-[24px] mt-[80px] uppercase">
              Төслийн одоогийн хүчин чадал
            </div>
            <div className="text-[#454655] text-base font-normal leading-8 mb-5 sm:w-[480px]">
            Засагт Хаан ХХК нь Овоот толгойн ил уурхайд 200 орчим ажилтантай жилийн 7.5 сая.м3 уулын цул олборлох хүчин чадал бүхий утгуурт ачигч болон өөрөө буулгагч машинуудаар үйл ажиллагаа явуулж байна.
            </div>
          </div>
        </div>
        <div className={`mx-[24px] xl:mx-0 ${showUurkhainNuurs ? '' : 'hidden'}`}>
        <div className="text-[#454655] text-[32px] font-[500] font-sans mb-5 uppercase">төслийн тухай</div>
          <div className="flex flex-col-reverse md:flex-row">
            <div>
              <div className="text-[#454655] text-base font-normal leading-8 mb-5 sm:w-[520px]">
              Монголын өмнөд хэсэгт орших Өмнөговь аймагт оршдог дэлхийн хамгийн том ашиглагдаагүй коксжих болон эрчим хүчний нүүрсний ордуудын нэг бөгөөд нийт 2.9 тэрбум тонн нөөцтэй ба үүний дөрөвний нэг нь сайн чанарын коксжих нүүрс бүхий ордтой стратегийн гол орд юм.
              </div>
            </div>
            <div className="flex items-center mt-12 my-10 ml-[52px]">
              <img src={gobi} width={536} height={347} alt="SouthGobi" />
            </div>
          </div>
          <div className='mb-[120px]'>
            <div className="text-[#454655] text-[32px] font-[500] font-sans mb-[24px] mt-[80px] uppercase">
            Төслийн одоогийн хүчин чадал
            </div>
            <div className="text-[#454655] text-base font-normal leading-8 mb-5 sm:w-[480px]">
            Эрдэнэс Таван Толгой ХХК-ийн баруун цанхийн уурхайн нүүрс ачилтын ажилд 2020 оноос эхлэн одоог хүртэл ажиллаж баялаг бүтээлцэж байгаа бөгөөд жилийн 4.8 сая.тн нүүрс ачилт хийх хүчин чадалтай.            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;