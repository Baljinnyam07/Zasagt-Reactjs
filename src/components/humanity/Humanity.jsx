import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import humanity1 from './humanity1.png'
import humanity2 from './humanity2.png'
import humanity3 from './humanity3.png'
import Posts from '../Posts/Posts';
import AppContainer from '../AppContainer';

function Humanity() {
  const [showOvooTolgoi, setShowOvooTolgoi] = useState(true);
  const [showAltanTsagaanOvoo, setShowAltanTsagaanOvoo] = useState(false);
  const [showUurkhainNuurs, setShowUurkhainNuurs] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = useParams();

  useEffect(() => {
    if (location.pathname === '/humanity/resource-policy') {
      setShowOvooTolgoi(true);
      setShowAltanTsagaanOvoo(false);
      setShowUurkhainNuurs(false);
    } else if (location.pathname === '/humanity/curriculum') {
      setShowOvooTolgoi(false);
      setShowAltanTsagaanOvoo(true);
      setShowUurkhainNuurs(false);
    } else if (location.pathname === '/humanity/hire') {
      setShowOvooTolgoi(false);
      setShowAltanTsagaanOvoo(false);
      setShowUurkhainNuurs(true);
    }
  }, [location.pathname]);

  const handleOvooTolgoiClick = () => {
    navigate('/humanity/resource-policy');
  };

  const handleAltanTsagaanOvooClick = () => {
    navigate('/humanity/curriculum');
  };

  const handleUurkhainNuursClick = () => {
    navigate('/humanity/hire');
  };

  return (
    <AppContainer>
      <div className="flex">
      <div className="text-[14px] mt-[40px] uppercase">
        
        <div
          className="text-black w-[226px] mb-[79px] font-medium mb-5 cursor-pointer"
          onClick={handleOvooTolgoiClick}
        >
          <Link className={`flex gap-2 ${location.pathname === '/humanity/resource-policy' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/project/ovooTolgoi">хүний нөөцийн бодлого
          {location.pathname === '/humanity/resource-policy' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
          
        </div>
        <div
          className="text-black w-[226px] mb-[69px] font-medium mb-5 cursor-pointer"
          onClick={handleAltanTsagaanOvooClick}
        >
          <Link className={`flex gap-2 ${location.pathname === '/humanity/curriculum' ? 'text-[#D0A616]' : 'text-[#000]'}`} to="/project/tsagaanOvoo">сургалтын хөтөлбөр{location.pathname === '/humanity/curriculum' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>


        <div
          className="text-black w-[246px] mr-[102px] font-medium mb-5 cursor-pointer"
          onClick={handleUurkhainNuursClick}
        >
          <a className={`flex gap-2 ${location.pathname === '/humanity/hire' ? 'text-[#D0A616]' : 'text-[#000]'}`} href="/humanity/hire">нээлттэй ажлын байр{location.pathname === '/humanity/hire' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
        
      </div>
      <div className="mt-[80px]">
        <div className={`${showOvooTolgoi ? '' : 'hidden'}`}>
          <div className="">
            <div className='flex mb-[80px]'>
              <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">
                  <img className='w-[384px] h-[262px]' src={humanity1} alt="humanityPhoto" />
              </div>
              <div className="text-[#454655] text-justify align-center h-max mt-[50px] font-normal leading-8 mb-5 w-[604px] pl-[24px]">
                <h1 className='text-[32px] uppercase'>бодлого</h1>
                <div className='py-[24px] leading-[24px] pr-[45px]'>Lorem ipsum dolor sit amet consectetur. Ullamcorper eget odio sit nam nisl luctus eu dui posuere. Porttitor imperdiet quis commodo non id nibh. Quis magna donec pulvinar laoreet orci gravida est pharetra in. Id tortor dolor quis amet lorem urna mi.</div>
              </div>
            </div>
            <div className='flex mb-[80px]'>
              <div className="text-[#454655] text-justify align-center h-max mt-[50px] font-normal leading-8 mb-5 w-[604px]">
                <h1 className='text-[32px] uppercase'>зорилго, зорилт</h1>
                <div className='py-[24px] leading-[24px] mr-[45px]'>Lorem ipsum dolor sit amet consectetur. Ullamcorper eget odio sit nam nisl luctus eu dui posuere. Porttitor imperdiet quis commodo non id nibh. Quis magna donec pulvinar laoreet orci gravida est pharetra in. Id tortor dolor quis amet lorem urna mi.</div>
              </div>
              <div className="text-black text-[32px] mr-[45px] font-500 font-sans mb-5 uppercase">
                  <img className='w-[384px] h-[262px]' src={humanity2} alt="humanityPhoto" />
              </div>
            </div>
            <div className='flex'>
              <div className="text-black text-[32px] font-500 font-sans mb-5 uppercase">
                  <img className='w-[384px] h-[262px]' src={humanity3} alt="humanityPhoto" />
              </div>
              <div className="text-[#454655] text-justify align-center h-max mt-[50px] font-normal leading-8 mb-5 w-[604px] pl-[24px]">
                <h1 className='text-[32px] uppercase'>байгууллагын хүний нөөц</h1>
                <div className='py-[24px] leading-[24px] pr-[45px]'>Lorem ipsum dolor sit amet consectetur. Ullamcorper eget odio sit nam nisl luctus eu dui posuere. Porttitor imperdiet quis commodo non id nibh. Quis magna donec pulvinar laoreet orci gravida est pharetra in. Id tortor dolor quis amet lorem urna mi.</div>
              </div>
            </div>
            <div className="flex items-center mt-12 ml-[52px]">
            </div>
          </div>
        </div>
        <div className={`${showAltanTsagaanOvoo ? '' : 'hidden'}`}>
          <div className="flex mb-[42px]">
            <div>
              <div className="text-black text-[32px] font-500 font-sans mb-5">Ур чадвар нэмэгдүүлэх сургалт</div>
              <div className="text-black text-[16px] font-normal leading-[24px] mb-5 w-[486px] text-justify">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper eget odio sit nam nisl luctus eu dui posuere. Porttitor imperdiet quis commodo non id nibh. Quis magna donec pulvinar laoreet orci gravida est pharetra in. Id tortor dolor quis amet lorem urna mi.
              </div>
              <a href='https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/%D0%A5%D2%AE%D0%9D%D0%98%D0%98%CC%86-%D0%9D%D3%A8%D3%A8%D0%A6%D0%98%D0%98%CC%86%D0%9D-%D0%A1%D0%A2%D0%A0%D0%90%D0%A2%D0%95%D0%93%D0%98.pdf?alt=media&token=9defd37f-444b-49fe-86cd-440dcbee14b8' className='uppercase underline text-[#23356B] text-[14px] font-normal flex w-max' target="_blank" rel="noreferrer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="fluent:document-pdf-20-regular">
                  <path id="Vector" d="M6.5 11C6.36739 11 6.24021 11.0527 6.14645 11.1464C6.05268 11.2402 6 11.3674 6 11.5V13.5C6 13.6326 6.05268 13.7598 6.14645 13.8536C6.24021 13.9473 6.36739 14 6.5 14C6.63261 14 6.75979 13.9473 6.85355 13.8536C6.94732 13.7598 7 13.6326 7 13.5V13.334H7.334C7.64351 13.334 7.94034 13.211 8.15919 12.9922C8.37805 12.7733 8.501 12.4765 8.501 12.167C8.501 11.8575 8.37805 11.5607 8.15919 11.3418C7.94034 11.123 7.64351 11 7.334 11H6.5ZM7.334 12.334H7V12H7.333C7.37729 12 7.41977 12.0176 7.45109 12.0489C7.48241 12.0802 7.5 12.1227 7.5 12.167C7.5 12.2113 7.48241 12.2538 7.45109 12.2851C7.41977 12.3164 7.37829 12.334 7.334 12.334ZM12 11.499C12.0003 11.3666 12.0531 11.2396 12.1468 11.1461C12.2405 11.0525 12.3676 11 12.5 11H13.499C13.6316 11 13.7588 11.0527 13.8526 11.1464C13.9463 11.2402 13.999 11.3674 13.999 11.5C13.999 11.6326 13.9463 11.7598 13.8526 11.8536C13.7588 11.9473 13.6316 12 13.499 12H13V12.335H13.5C13.6326 12.335 13.7598 12.3877 13.8536 12.4814C13.9473 12.5752 14 12.7024 14 12.835C14 12.9676 13.9473 13.0948 13.8536 13.1886C13.7598 13.2823 13.6326 13.335 13.5 13.335H13L13.001 13.499C13.0011 13.5647 12.9883 13.6297 12.9633 13.6904C12.9383 13.7511 12.9016 13.8063 12.8553 13.8528C12.7617 13.9468 12.6346 13.9997 12.502 14C12.3694 14.0003 12.2421 13.9478 12.1482 13.8543C12.0542 13.7607 12.0013 13.6336 12.001 13.501L12 12.834V11.499ZM9.5 11C9.36739 11 9.24021 11.0527 9.14645 11.1464C9.05268 11.2402 9 11.3674 9 11.5V13.5C9 13.6326 9.05268 13.7598 9.14645 13.8536C9.24021 13.9473 9.36739 14 9.5 14H10.002C10.3998 14 10.7814 13.842 11.0627 13.5607C11.344 13.2794 11.502 12.8978 11.502 12.5C11.502 12.1022 11.344 11.7206 11.0627 11.4393C10.7814 11.158 10.3998 11 10.002 11H9.5ZM10 13V12H10.002C10.1346 12 10.2618 12.0527 10.3556 12.1464C10.4493 12.2402 10.502 12.3674 10.502 12.5C10.502 12.6326 10.4493 12.7598 10.3556 12.8536C10.2618 12.9473 10.1346 13 10.002 13H10ZM4.001 4C4.001 3.46957 4.21171 2.96086 4.58679 2.58579C4.96186 2.21071 5.47057 2 6.001 2H10.586C10.7831 2.00004 10.9782 2.03892 11.1603 2.11442C11.3423 2.18992 11.5077 2.30055 11.647 2.44L15.561 6.354C15.8424 6.63503 16.0006 7.01631 16.001 7.414V9.082C16.293 9.18572 16.5458 9.37735 16.7245 9.63055C16.9032 9.88375 16.9991 10.1861 16.999 10.496V14.499C16.9991 14.8089 16.9032 15.1113 16.7245 15.3645C16.5458 15.6177 16.293 15.8093 16.001 15.913V16C16.001 16.5304 15.7903 17.0391 15.4152 17.4142C15.0401 17.7893 14.5314 18 14.001 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V15.913C3.70774 15.8097 3.45468 15.6183 3.27561 15.3653C3.09653 15.1123 3.00025 14.81 3 14.5V10.497C3.00004 10.1868 3.09623 9.88433 3.27532 9.6311C3.4544 9.37787 3.70758 9.18639 4 9.083L4.001 4ZM15.001 8H11.501C11.3039 8.00013 11.1088 7.96143 10.9267 7.88611C10.7446 7.81078 10.5791 7.70031 10.4397 7.56101C10.3003 7.42171 10.1897 7.25631 10.1143 7.07426C10.0388 6.8922 10 6.69707 10 6.5V3H6C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V8.996H15V8H15.001ZM5 15.999C4.99987 16.1304 5.02564 16.2605 5.07583 16.382C5.12603 16.5034 5.19967 16.6138 5.29254 16.7068C5.38541 16.7997 5.49569 16.8735 5.61709 16.9238C5.73848 16.9741 5.86859 17 6 17H14C14.1314 17 14.2615 16.9741 14.3829 16.9238C14.5043 16.8735 14.6146 16.7997 14.7075 16.7068C14.8003 16.6138 14.874 16.5034 14.9242 16.382C14.9744 16.2605 15.0001 16.1304 15 15.999H5ZM11 3.207V6.5C11 6.63261 11.0527 6.75979 11.1464 6.85355C11.2402 6.94732 11.3674 7 11.5 7H14.792L11 3.207ZM4.502 9.996C4.36939 9.996 4.24221 10.0487 4.14845 10.1424C4.05468 10.2362 4.002 10.3634 4.002 10.496V14.499C4.002 14.6316 4.05468 14.7588 4.14845 14.8526C4.24221 14.9463 4.36939 14.999 4.502 14.999H15.499C15.6316 14.999 15.7588 14.9463 15.8526 14.8526C15.9463 14.7588 15.999 14.6316 15.999 14.499V10.496C15.999 10.3634 15.9463 10.2362 15.8526 10.1424C15.7588 10.0487 15.6316 9.996 15.499 9.996H4.502Z" fill="#D82522"/>
                  </g>
                </svg>
                <div className='ml-[4px]'>хөтөлбөр харах</div>
              </a>
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="text-black text-[32px] font-500 font-sans mb-5">Хөдөлмөрийн эрүүл мэнд аюулгүй байдал (ХЭМАБ)</div>
              <div className="text-black text-[16px] font-normal leading-[24px] mb-5 w-[486px] text-justify">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper eget odio sit nam nisl luctus eu dui posuere. Porttitor imperdiet quis commodo non id nibh. Quis magna donec pulvinar laoreet orci gravida est pharetra in. Id tortor dolor quis amet lorem urna mi.
              </div>
              <a href='https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/%D0%A5%D2%AE%D0%9D%D0%98%D0%98%CC%86-%D0%9D%D3%A8%D3%A8%D0%A6%D0%98%D0%98%CC%86%D0%9D-%D0%A1%D0%A2%D0%A0%D0%90%D0%A2%D0%95%D0%93%D0%98.pdf?alt=media&token=9defd37f-444b-49fe-86cd-440dcbee14b8' className='uppercase underline text-[#23356B] text-[14px] font-normal flex w-max' target="_blank" rel="noreferrer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="fluent:document-pdf-20-regular">
                  <path id="Vector" d="M6.5 11C6.36739 11 6.24021 11.0527 6.14645 11.1464C6.05268 11.2402 6 11.3674 6 11.5V13.5C6 13.6326 6.05268 13.7598 6.14645 13.8536C6.24021 13.9473 6.36739 14 6.5 14C6.63261 14 6.75979 13.9473 6.85355 13.8536C6.94732 13.7598 7 13.6326 7 13.5V13.334H7.334C7.64351 13.334 7.94034 13.211 8.15919 12.9922C8.37805 12.7733 8.501 12.4765 8.501 12.167C8.501 11.8575 8.37805 11.5607 8.15919 11.3418C7.94034 11.123 7.64351 11 7.334 11H6.5ZM7.334 12.334H7V12H7.333C7.37729 12 7.41977 12.0176 7.45109 12.0489C7.48241 12.0802 7.5 12.1227 7.5 12.167C7.5 12.2113 7.48241 12.2538 7.45109 12.2851C7.41977 12.3164 7.37829 12.334 7.334 12.334ZM12 11.499C12.0003 11.3666 12.0531 11.2396 12.1468 11.1461C12.2405 11.0525 12.3676 11 12.5 11H13.499C13.6316 11 13.7588 11.0527 13.8526 11.1464C13.9463 11.2402 13.999 11.3674 13.999 11.5C13.999 11.6326 13.9463 11.7598 13.8526 11.8536C13.7588 11.9473 13.6316 12 13.499 12H13V12.335H13.5C13.6326 12.335 13.7598 12.3877 13.8536 12.4814C13.9473 12.5752 14 12.7024 14 12.835C14 12.9676 13.9473 13.0948 13.8536 13.1886C13.7598 13.2823 13.6326 13.335 13.5 13.335H13L13.001 13.499C13.0011 13.5647 12.9883 13.6297 12.9633 13.6904C12.9383 13.7511 12.9016 13.8063 12.8553 13.8528C12.7617 13.9468 12.6346 13.9997 12.502 14C12.3694 14.0003 12.2421 13.9478 12.1482 13.8543C12.0542 13.7607 12.0013 13.6336 12.001 13.501L12 12.834V11.499ZM9.5 11C9.36739 11 9.24021 11.0527 9.14645 11.1464C9.05268 11.2402 9 11.3674 9 11.5V13.5C9 13.6326 9.05268 13.7598 9.14645 13.8536C9.24021 13.9473 9.36739 14 9.5 14H10.002C10.3998 14 10.7814 13.842 11.0627 13.5607C11.344 13.2794 11.502 12.8978 11.502 12.5C11.502 12.1022 11.344 11.7206 11.0627 11.4393C10.7814 11.158 10.3998 11 10.002 11H9.5ZM10 13V12H10.002C10.1346 12 10.2618 12.0527 10.3556 12.1464C10.4493 12.2402 10.502 12.3674 10.502 12.5C10.502 12.6326 10.4493 12.7598 10.3556 12.8536C10.2618 12.9473 10.1346 13 10.002 13H10ZM4.001 4C4.001 3.46957 4.21171 2.96086 4.58679 2.58579C4.96186 2.21071 5.47057 2 6.001 2H10.586C10.7831 2.00004 10.9782 2.03892 11.1603 2.11442C11.3423 2.18992 11.5077 2.30055 11.647 2.44L15.561 6.354C15.8424 6.63503 16.0006 7.01631 16.001 7.414V9.082C16.293 9.18572 16.5458 9.37735 16.7245 9.63055C16.9032 9.88375 16.9991 10.1861 16.999 10.496V14.499C16.9991 14.8089 16.9032 15.1113 16.7245 15.3645C16.5458 15.6177 16.293 15.8093 16.001 15.913V16C16.001 16.5304 15.7903 17.0391 15.4152 17.4142C15.0401 17.7893 14.5314 18 14.001 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V15.913C3.70774 15.8097 3.45468 15.6183 3.27561 15.3653C3.09653 15.1123 3.00025 14.81 3 14.5V10.497C3.00004 10.1868 3.09623 9.88433 3.27532 9.6311C3.4544 9.37787 3.70758 9.18639 4 9.083L4.001 4ZM15.001 8H11.501C11.3039 8.00013 11.1088 7.96143 10.9267 7.88611C10.7446 7.81078 10.5791 7.70031 10.4397 7.56101C10.3003 7.42171 10.1897 7.25631 10.1143 7.07426C10.0388 6.8922 10 6.69707 10 6.5V3H6C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V8.996H15V8H15.001ZM5 15.999C4.99987 16.1304 5.02564 16.2605 5.07583 16.382C5.12603 16.5034 5.19967 16.6138 5.29254 16.7068C5.38541 16.7997 5.49569 16.8735 5.61709 16.9238C5.73848 16.9741 5.86859 17 6 17H14C14.1314 17 14.2615 16.9741 14.3829 16.9238C14.5043 16.8735 14.6146 16.7997 14.7075 16.7068C14.8003 16.6138 14.874 16.5034 14.9242 16.382C14.9744 16.2605 15.0001 16.1304 15 15.999H5ZM11 3.207V6.5C11 6.63261 11.0527 6.75979 11.1464 6.85355C11.2402 6.94732 11.3674 7 11.5 7H14.792L11 3.207ZM4.502 9.996C4.36939 9.996 4.24221 10.0487 4.14845 10.1424C4.05468 10.2362 4.002 10.3634 4.002 10.496V14.499C4.002 14.6316 4.05468 14.7588 4.14845 14.8526C4.24221 14.9463 4.36939 14.999 4.502 14.999H15.499C15.6316 14.999 15.7588 14.9463 15.8526 14.8526C15.9463 14.7588 15.999 14.6316 15.999 14.499V10.496C15.999 10.3634 15.9463 10.2362 15.8526 10.1424C15.7588 10.0487 15.6316 9.996 15.499 9.996H4.502Z" fill="#D82522"/>
                  </g>
                </svg>
                <div className='ml-[4px]'>хөтөлбөр харах</div>
              </a>
            </div>
          </div>
        </div>
        <div className={`${showUurkhainNuurs ? '' : 'hidden'}`}>
          <div className="">
            <div>
              <div className="text-black text-[32px] font-500 font-sans mb-5">Нээлттэй ажлын байрууд</div>
            </div>
            <div className="">
            <Posts type={`${type}`} urlType='humanity'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AppContainer>
  );
};

export default Humanity