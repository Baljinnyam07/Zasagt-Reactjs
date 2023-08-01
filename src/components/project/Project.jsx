import React, { useState } from 'react';
import steppe from './steppe.png'
import erdenes from './erdenestolgoi.png'
import gobi from './southgobi.png'

const Project=()=> {
  const [showMandchilgee, setShowMandchilgee] = useState(true);
  const [showTaniulgu, setShowTaniulgu] = useState(false);
  const [showUnit, setShowUnit] = useState(false);

  const handleMandchilgeeClick = () => {
    setShowMandchilgee(true);
    setShowTaniulgu(false);
    setShowUnit(false);
  };

  const handleTaniulguClick = () => {
    setShowMandchilgee(false);
    setShowTaniulgu(true);
    setShowUnit(false);
  };

  const handleUnetZuylClick = () => {
    setShowMandchilgee(false);
    setShowTaniulgu(false);
    setShowUnit(true);
  };
  return (
      <div className="flex">
        <div className="text-[14px] mt-[40px] uppercase">
          <div className="text-black w-[226px] mb-[79px] font-medium mb-5 cursor-pointer" onClick={handleMandchilgeeClick}>овоо толгой</div>
          <div className="text-black w-[226px] mb-[69px] font-medium mb-5 cursor-pointer" onClick={handleTaniulguClick}>алтан цагаан овоо</div>
          <div className="text-black w-[246px] mr-[102px] font-medium mb-5 cursor-pointer" onClick={handleUnetZuylClick}>цанхийн баруун уурхаЙН НҮҮРС АЧИЛТ</div>
        </div>
        <div className='mt-[80px]'>
        <div className={`${showMandchilgee ? '' : 'hidden'}`}>
                <div className='flex'>
                    <div>
                        <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">төслийн тухай</div>
                        <div className="text-black text-base font-normal leading-8 mb-5 w-[604px] ">
                                “Степ Голд” ХХК нь Монголын уул уурхайн салбарт алт, мөнгө үйлдвэрлэлээр
                                тэргүүлэгч аж ахуйн нэгжүүдийн нэг болох зорилтын хүрээнд жилд 60,000
                                унц алт гарган авах төлөвлөгөө тавин ажиллаж байгаа ба Торонтогийн
                                хөрөнгийн бирж (TSX:STGO) дээр олон нийтэд нээлттэй арилжаалагддаг.
                        </div>
                    </div>
                    <div className='flex items-center mt-12 ml-[52px]'>
                    <image 
                        src={steppe}
                        width={236}
                        height={147}
                        alt="Picture of the author"
                    />
                    </div>
                </div> 
                <div>
                        <div className="text-black text-[32px] font-500 font-sans mb-[24px] mt-[80px] uppercase">Төслийн хүчин чадал</div>
                        <div className="text-black text-base font-normal leading-8 mb-5 w-[480px] ">
                        Одоогийн байдлаар жилийн 1.8 сая.тн хүдэр олборлох хүчин
                        чадалтай.</div>
                        <div className="text-black text-base font-normal leading-8 mb-5 w-[480px] ">
                        Степ Голд ХК-ийн хоёрдугаар шатны ил уурхайн төсөл
                        эхэлснээр хүчин чадал нь 4.0 сая.тн хүдэр олборлох, хөрс
                        хуулалт 2.0 сая м3 болж өснө.
                        </div>
                </div>
            </div>
            <div className={`${showTaniulgu ? '' : 'hidden'}`}>
                <div className='flex'>
                    <div>
                        <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">төслийн тухай</div>
                        <div className="text-black text-base font-normal leading-8 mb-5 w-[604px] ">
                        Саусгоби Ресурс Лимитед (Саусгоби) нь Торонто болон Хонконгийн
                        Хөрөнгийн Биржид (TSX: SGQ, HK: 1878) бүртгэлтэй олон нийтэд
                        нээлттэй нүүрс нийлүүлэгч компани бөгөөд Саусгоби компани нь
                        логистикийн дэд бүтэцтэй, арилжааны чадамж бүхий стратегийн ач 
                        холбогдолтой нүүрсний орд эзэмшдэг болно.
                        </div>
                    </div>
                    <div className='flex items-center mt-12 ml-[52px]'>
                    <image 
                        src={erdenes}
                        width={236}
                        height={147}
                        alt="Picture of the author"
                    />
                    </div>
                </div> 
                <div>
                        <div className="text-black text-[32px] font-500 font-sans mb-[24px] mt-[80px] uppercase">Төслийн хүчин чадал</div>
                        <div className="text-black text-base font-normal leading-8 mb-5 w-[480px] ">
                        Одоогоор 4.0 сая м3 уулын цулын ажил гүйцэтгэх хүчин
                        чадалтай.</div>
                        <div className="text-black text-base font-normal leading-8 w-[480px] ">
                        Шинээр тоног төхөөрөмж худалдаж авсны дараа:
                        </div>
                        <div className="text-black text-base font-normal leading-8 mb-5 w-[480px] ">
                        6.0 сая м3 уулын цулын ажил хийх хүчин чадалтай болно.
                        </div>
                </div>
            </div>
            <div className={`${showUnit ? '' : 'hidden'}`}>
            <div className='flex'>
                    <div>
                        <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">төслийн тухай</div>
                        <div className="text-black text-base font-normal leading-8 mb-5 w-[520px] ">
                        Монголын өмнөд хэсэгт орших Өмнөговь аймагт 
                        оршдог дэлхийн хамгийн том ашиглагдаагүй коксжих
                        болон эрчим хүчний нүүрсний ордуудын нэг бөгөөд
                        нийт 6.4 тэрбум тонн нөөцтэй ба үүний дөрөвний нэг нь
                        сайн чанарын коксжих нүүрс бүхий стратегийн орд юм.
                        </div>
                    </div>
                    <div className='flex items-center mt-12 ml-[52px]'>
                    <image 
                        src={gobi}
                        width={536}
                        height={347}
                        alt="Picture of the author"
                    />
                    </div>
                </div> 
                <div>
                        <div className="text-black text-[32px] font-500 font-sans mb-[24px] mt-[80px] uppercase">Төслийн хүчин чадал</div>
                        <div className="text-black text-base font-normal leading-8 mb-5 w-[480px] ">
                        Одоогоор 4.0 сая м3 уулын цулын ажил гүйцэтгэх хүчин
                        чадалтай.</div>
                        <div className="text-black text-base font-normal leading-8 w-[480px] ">
                        Шинээр тоног төхөөрөмж худалдаж авсны дараа:
                        </div>
                        <div className="text-black text-base font-normal leading-8 mb-5 w-[480px] ">
                        6.0 сая м3 уулын цулын ажил хийх хүчин чадалтай болно.
                        </div>
                </div>
            </div>

        </div>
        </div>
  );
}

export default Project