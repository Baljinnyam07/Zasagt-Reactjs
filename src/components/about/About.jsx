import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Ceo from './ceoImage.jpeg';
import CeoC from './ceoCeo.png';
import Assets from './assets.png';
import HistoryComp from './history.png';
import AppContainer from '../AppContainer';

const About = () => {
  const [showMandchilgee, setShowMandchilgee] = useState(true);
  const [showTaniulgu, setShowTaniulgu] = useState(false);
  const [showUnit, setShowUnit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about/ceo') {
      setShowMandchilgee(true);
      setShowTaniulgu(false);
      setShowUnit(false);
    } else if (location.pathname === '/about/about-us') {
      setShowMandchilgee(false);
      setShowTaniulgu(true);
      setShowUnit(false);
    } else if (location.pathname === '/about/our') {
      setShowMandchilgee(false);
      setShowTaniulgu(false);
      setShowUnit(true);
    }
  }, [location.pathname]);

  const handleMandchilgeeClick = () => {
    navigate('/about/ceo');
  };

  const handleTaniulguClick = () => {
    navigate('/about/about-us');
  };

  const handleUnetZuylClick = () => {
    navigate('/about/our');
  };
  return (
      <AppContainer>
        <div className="xl:flex block">
        <div className="text-[14px] mt-[40px] uppercase xl:block hidden gap-20 justify-center">
          <div
          className="text-black w-max mb-[79px] font-medium mb-5 cursor-pointer"
          onClick={handleMandchilgeeClick}
        >
          <Link className={`flex gap-2 ${location.pathname === '/about/ceo' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/about/ceo">Захирлын мэндчилгээ{location.pathname === '/about/ceo' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
        <div
          className="text-black w-max mb-[69px] font-medium mb-5 cursor-pointer"
          onClick={handleTaniulguClick}
        >
          <Link className={`flex gap-2 ${location.pathname === '/about/about-us' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/about/about-us">компанийн танилцуулга{location.pathname === '/about/about-us' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
        <div
          className="text-black w-mx xl:w-[246px] mr-[102px] font-medium mb-5 cursor-pointer"
          onClick={handleUnetZuylClick}
        >
          <Link className={`flex gap-2 relative ${location.pathname === '/about/our' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/about/our">алсын хараа, эрхэм зорилго, үнэт зүйл{location.pathname === '/about/our' && <div className='w-[8px] h-[2px] absolute left-[250px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
        </div>
        <div className='mt-[60px]'>
        <div className={`grid lg:grid-cols-2 grid-cols-1 justify-center my-10 w-full ${showMandchilgee ? '' : 'hidden'}`}>
          <div className='col-span-1'>
          <img 
            className="animate-fade-up mx-auto w-[250px] md:w-[384px] md:h-[576px] rounded-md xl:rounded-none mb-10"
            src={Ceo}
            width='100%'
            height='100%'
            alt="Portrait of the company's CEO, John Doe, standing confidently."
          />
          </div>
          <div className='w-[487px] px-[24px] xl:px-0 col-span-1 w-full'>
            <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase flex jusftify-center">мэндчилгээ</div>
            <div className="text-black text-base font-normal leading-6 mb-5">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper eget odio sit nam nisl luctus eu dui posuere. Porttitor
              imperdiet quis commodo non id nibh. Quis magna donec pulvinar laoreet orci gravida est pharetra in. Id tortor
              dolor quis amet lorem urna mi. 
            </div>
            <div className="text-black text-base font-normal leading-6 mb-5">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper eget odio sit nam nisl luctus
              eu dui posuere. Porttitor imperdiet quis commodo non id nibh. Quis magna donec pulvinar laoreet orci gravida
              est pharetra in. Id tortor dolor quis amet lorem urna mi. Lorem ipsum dolor sit amet consectetur. Ullamcorper
              eget odio sit nam nisl luctus eu dui posuere. Porttitor imperdiet quis commodo non id nibh. Quis magna donec
              pulvinar laoreet orci gravida est pharetra in. Id tortor dolor quis amet lorem urna mi.
            </div>
            <div className="text-black text-[24px] font-500 font-sans mb-5">Ц. Батбаяр</div>
            <div>“Засагт хаан” ХХК-ийн захирал</div>
            <div>
            <img src={CeoC} width={126} height={104} alt="Ceo" />
            </div>
          </div>
        </div>

        <div className={`my-10 px-[24px] xl:px-0 ${showTaniulgu ? '' : 'hidden'}`}>
          <div className=''>
          <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">танилцуулга</div>
            <div className="text-black text-base font-normal leading-8 mb-5 w-full xl:w-[894px] ">
              Засагт Хаан ХХК нь 2008 онд уул уурхайн хайгуул, олборлолтын чиглэлээр үйл ажиллагаагаа эхэлсэн бөгөөд 2011
              оноос эхлэн орон сууцны болон үйлдвэрийн барилга байгууламжийн угсралт, хүнд машин механизмын түрээсийн
              чиглэлээр үйл ажиллагаагаа өргөтгөсөн өдгөө дараах чиглэлээр үйл ажиллагаа явуулж буй оператор компани юм.
            </div>
          </div>
          <div>
          <div className="text-black text-[32px] font-500 font-sans mb-5 mb-[24px]">Одоогийн үйл ажиллагааны чиглэл</div>
            <div className="text-black text-base font-normal leading-8 mb-5 w-[894px] ">
              <ul>
                <li className='list-disc list-inside mb-[24px]'>Хөрс хуулалт</li>
                <li className='list-disc list-inside mb-[24px]'>Нүүрс олборлолт</li>
                <li className='list-disc list-inside mb-[24px]'>Хүдэр олборлолт</li>
                <li className='list-disc list-inside mb-[24px]'>Нүүрс ачилт</li>
              </ul>
            </div>
          </div>
          <div>
          <div className="text-black text-[32px] font-500 font-sans mb-5 mb-[24px]">Түүхэн замнал</div>
            <div className="text-black text-base font-normal leading-8 mb-5 w-[894px] ">
              <div className='xl:ml-[100px]'>
              <img
                  src={HistoryComp}
                  className='w-max h-[380px] sm:h-[590px] xl:h-[620px]'
                  alt="history"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`flex my-10 ${showUnit ? '' : 'hidden'}`}>
                <img
                  src={Assets}
                  width={1236}
                  height={970}
                  alt="Pict"
                />
        </div>
        </div>
      </div>
      </AppContainer>
  );
}

export default About