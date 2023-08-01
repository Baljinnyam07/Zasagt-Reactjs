import React, { useState } from 'react';
import Posts from '../Posts/Posts';
import { IntlProvider } from 'react-intl';

const News = () => {
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
          <div className="text-black w-[226px] mb-[79px] font-medium mb-5 cursor-pointer" onClick={handleMandchilgeeClick}>цаг үеийн мэдээлэл</div>
          <div className="text-black w-[226px] mb-[69px] font-medium mb-5 cursor-pointer" onClick={handleTaniulguClick}>байгууллагын мэдээ</div>
          <div className="text-black w-[246px] mr-[102px] font-medium mb-5 cursor-pointer" onClick={handleUnetZuylClick}>нийгмийн хариуцлага</div>
        </div>
        <div className='mt-[60px]'>
        <div className={`flex my-10 ${showMandchilgee ? '' : 'hidden'}`}>
        <IntlProvider>
      <Posts />
      {/* Other components in your app */}
    </IntlProvider>
        </div>
        <div className={`my-10 ${showTaniulgu ? '' : 'hidden'}`}>
        <ul>
        
        </ul>
        </div>
        <div className={`flex my-10 ${showUnit ? '' : 'hidden'}`}>
               
        </div>
        </div>
      </div>
  );
}

export default News