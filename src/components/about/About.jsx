import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Ceo from './ceoImage.jpeg';
import CeoC from './ceoCeo.png';
import Assets from './assets.png';
import HistoryComp from './history.png';

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
      <div className="flex">
        <div className="text-[14px] mt-[40px] uppercase">
          <div className="text-black w-[226px] mb-[79px] font-medium mb-5 cursor-pointer" onClick={handleMandchilgeeClick}><Link to="/about/ceo">Захирлын мэндчилгээ</Link></div>
          <div className="text-black w-[226px] mb-[69px] font-medium mb-5 cursor-pointer" onClick={handleTaniulguClick}><Link to="/about/about-us">компанийн танилцуулга</Link></div>
          <div className="text-black w-[246px] mr-[102px] font-medium mb-5 cursor-pointer" onClick={handleUnetZuylClick}><Link to="/about/our">алсын хараа, эрхэм зорилго, үнэт зүйл</Link></div>
        </div>
        <div className='mt-[60px]'>
        <div className={`flex my-10 ${showMandchilgee ? '' : 'hidden'}`}>
        <div>
        <img 
          src={Ceo}
          width={384}
          height={576}
          alt="Portrait of the company's CEO, John Doe, standing confidently."
        /> 
        </div>
        <div className='w-[487px] ml-[24px] '>
          <div className="text-black text-[32px] font-500 font-sans mb-5">мэндчилгээ</div>
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
          <img src={CeoC} width={186} height={104} alt="Ceo" />
          </div>
        </div>
        </div>

        <div className={`my-10 ${showTaniulgu ? '' : 'hidden'}`}>
          <div>
          <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">танилцуулга</div>
            <div className="text-black text-base font-normal leading-8 mb-5 w-[894px] ">
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
              <div className='ml-[100px]'>
              <img
                  src={HistoryComp}
                  width={1236}
                  height={1070}
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
  );
}

export default About