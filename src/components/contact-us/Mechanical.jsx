import React, { useEffect, useState } from 'react';
// import Posts from '../Posts/Posts';
import { Link, useLocation } from 'react-router-dom';
import mechData from '../json/mechanical.json'
import { FormattedMessage } from 'react-intl';

const Mechanical = () => {
  const location = useLocation();
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalType, setModalType] = useState('');
  const [modalImage, setModalImage] = useState('');
  const [modalMark, setModalMark] = useState('');


  // const { type } = useParams();
  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setShowButton1(true);
      setShowButton2(false);
    } else if (buttonNumber === 2) {
      setShowButton1(false);
      setShowButton2(true);
    }
  };

  useEffect(() => {
    if (location.pathname === '/mechanical/mining') {
      setShow1(true);
      setShow2(false);
      setShow3(false);
    } else if (location.pathname === '/mechanical/openings') {
      setShow1(false);
      setShow2(true);
      setShow3(false);
    } else if (location.pathname === '/mechanical/rent') {
      setShow1(false);
      setShow2(false);
      setShow3(true);
    }
  }, [location.pathname]);

  const handleTableCellClick = (content, type, image, mark) => {
    setModalContent(content);
    setModalType(type)
    setModalImage(image)
    setModalMark(mark)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
      <div className="xl:flex divide-x">
      <div className="text-[10px] xl:text-[14px] uppercase xl:block flex divide-x">
        <div
          className="text-[#454655] w-1/3 xl:w-[480px] p-4 text-center xl:text-start font-medium cursor-pointer border-b xl:py-[40px]"
        >
          <Link className={`xl:pl-[130px] flex gap-2 ${location.pathname.startsWith('/mechanical/mining')  ? 'text-[#D0A616]' : 'text-[#000]'}`} to='/mechanical/mining'><div className='w-[210px]'><FormattedMessage id='strip'/></div>{location.pathname === '/mechanical/mining' && <div className='w-[8px] xl:block hidden h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
        <div
          className="text-[#454655] w-1/3 px-10 xl:px-0 xl:w-[480px] flex justify-center xl:justify-normal items-center xl:items:start p-2 text-center xl:text-start font-medium cursor-pointer border-b xl:py-[40px]"
        >
          <Link className={`xl:pl-[130px] flex xl:mt-0 gap-2 ${location.pathname.startsWith('/mechanical/openings')  ? 'text-[#D0A616]' : 'text-[#000]'}`} to='/mechanical/openings'><FormattedMessage id='miningSup'/>{location.pathname === '/mechanical/openings' && <div className='w-[8px] h-[2px] xl:block hidden flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</Link>
        </div>
        <div
          className="text-[#454655] w-1/3 px-10 xl:px-0 xl:w-[480px] flex justify-center xl:justify-normal items-center xl:items:start p-2 text-center xl:text-start font-medium cursor-pointer border-b xl:py-[40px]"
        >
          <a className={`xl:pl-[130px] flex xl:mt-0 gap-2 ${location.pathname.startsWith('/mechanical/rent')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/mechanical/rent'><FormattedMessage id='rentalEq'/>{location.pathname === '/mechanical/rent' && <div className='w-[8px] h-[2px] xl:block hidden flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
      </div>
      <div className='xl:pl-[24px] pt-[40px]'>
        <div className='xl:w-[894px] mx-[20px]'>
          <div className={`xl:mx-[24px] xl:mx-0 ${show1 ? '' : 'hidden'}`}>
          {showButton1 && (<div className='uppercase text-[24px] xl:text-[32px] font-[500] text-[#454655]'><FormattedMessage id='mechanicTitleSmall'/></div>)}
          {showButton2 && (<div className='uppercase text-[24px] xl:text-[32px] font-[500] text-[#454655]'><FormattedMessage id='mechanicTitle'/></div>)}
            <div className='w-full xl:flex grid grid-cols-2 text-[10px] xl:text-[12px] text-[#23356B] font-[500] uppercase mt-[24px]'>
                <div className={`border py-[15px] flex justify-center font-bold cursor-pointer w-full xl:w-[446px] button1 bg-[#ECEDEE] ${showButton1 ? 'border-[#23356B]' : ''}`} onClick={() => handleButtonClick(1)}><FormattedMessage id='sp1'/></div>
                <div className={`border py-[15px] flex justify-center font-bold cursor-pointer w-full xl:w-[446px] button2 bg-[#ECEDEE] ${showButton2 ? 'border-[#23356B]' : ''}`} onClick={() => handleButtonClick(2)}><FormattedMessage id='sp2'/></div>
            </div>
            {showButton1 && (
            <div className='buttonShow1'>
              <div className='text-[16px] w-full text-[#454655] font-[400] mb-[16px] mt-[24px]'><FormattedMessage id='spp1'/></div>
              {showButton1 && (<div className='xl:text-[32px] font-[500] mb-[16px] text-[#454655]'><FormattedMessage id='spe1'/></div>)}
              {showButton2 && (<div className='xl:text-[32px] font-[500] mb-[16px] text-[#454655]'><FormattedMessage id='spe2'/></div>)}
              <div className='mb-[120px]'>
                <table className="xl:w-full border-collapse border">
                  <thead>
                    <tr className='text-[12px] xl:text-[16px] font-[500] text-[#23356B]'>
                      <th className="bg-[#E9EBF0] border  border-[#23356B] w-[24px] xl:w-[36px] py-[14px] text-center">{mechData.tableData1[0].number}</th>
                      <th className="bg-[#E9EBF0] border  border-[#23356B] w-[20px] xl:w-[167px] py-[14px] text-start pl-[16px]">{mechData.tableData1[0].type}</th>
                      <th className="bg-[#E9EBF0] border  border-[#23356B] w-[20px] xl:w-[205px] py-[14px] text-start pl-[16px]">{mechData.tableData1[0].mark}</th>
                      <th className="bg-[#E9EBF0] border  border-[#23356B] w-[10px] xl:w-[95px] py-[14px] text-center">{mechData.tableData1[0].unit}</th>
                      <th className="bg-[#E9EBF0] border  border-[#23356B] w-[160px] xl:w-[168px] py-[14px] text-center">{mechData.tableData1[0].image}</th>
                      <th className="bg-[#E9EBF0] border  border-[#23356B] w-[2px] xl:w-[223px] py-[14px] text-center">{mechData.tableData1[0].info}</th>
                    </tr>
                  </thead>
                  <tbody className=''>
                    {mechData.tableData1.slice(1).map((item, index) => (
                      <tr className='text-[12px] xl:text-[16px] font-[400] text-[#454655]' key={index}>
                        <td className="border border-[#23356B] text-center">{item.number}</td>
                        <td className=" border border-[#23356B] pl-[16px]">{item.type}</td>
                        <td className="border border-[#23356B] pl-[16px]">{item.mark}</td>
                        <td className="border border-[#23356B] text-center">{item.unit}</td>
                        <td className="border border-[#23356B] py-[7px] px-[36px]"><img className='w-[5rem] h-[58px]' src={item.image} alt="" /></td>
                        <td id="modal-switch" className="border border-[#23356B] text-center text-[14px] text-[#23356B] cursor-pointer font-[500] underline" onClick={() => handleTableCellClick(item.details, item.type, item.image, item.mark)}>{item.info}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            )}
            {showButton2 && (
            <div className='buttonShow2'>
            <div className='text-[16px] text-[#454655] font-[400] mb-[16px] mt-[24px]'><FormattedMessage id='spp2'/></div>
              <div className='xl:text-[32px] font-[500] mb-[16px] text-[#454655]'><FormattedMessage id='spe2'/></div>
              <div className='mb-[120px]'>
              <table className="w-full border-collapse border">
              <thead>
                <tr className='text-[12px] xl:text-[16px] font-[500] text-[#23356B]'>
                  <th className="bg-[#E9EBF0] border  border-[#23356B] w-[24px] xl:w-[36px] py-[14px] text-center">{mechData.tableData2[0].number}</th>
                  <th className="bg-[#E9EBF0] border  border-[#23356B] w-[20px] xl:w-[167px] py-[14px] text-start pl-[16px]">{mechData.tableData2[0].type}</th>
                  <th className="bg-[#E9EBF0] border  border-[#23356B] w-[20px] xl:w-[205px] py-[14px] text-start pl-[16px]">{mechData.tableData2[0].mark}</th>
                  <th className="bg-[#E9EBF0] border  border-[#23356B] w-[10px] xl:w-[95px] py-[14px] text-center">{mechData.tableData2[0].unit}</th>
                  <th className="bg-[#E9EBF0] border  border-[#23356B] w-[180px] xl:w-[168px] py-[14px] text-center">{mechData.tableData2[0].image}</th>
                  <th className="bg-[#E9EBF0] border  border-[#23356B] w-[2px] xl:w-[223px] py-[14px] text-center">{mechData.tableData2[0].info}</th>
                </tr>
              </thead>
              <tbody>
                {mechData.tableData2.slice(1).map((item, index) => (
                  <tr className='text-[12px] xl:text-[16px] font-[400] text-[#454655]' key={index}>
                    <td className="border border-[#23356B] text-center">{item.number}</td>
                    <td className=" border border-[#23356B] pl-[16px]">{item.type}</td>
                    <td className="border border-[#23356B] pl-[16px]">{item.mark}</td>
                    <td className="border border-[#23356B] text-center">{item.unit}</td>
                    <td className="border border-[#23356B] py-[7px] px-[36px]"><img className='w-[5rem] h-[58px]' src={item.image} alt="" /></td>
                    <td id="modal-switch" className="border border-[#23356B] text-center text-[14px] text-[#23356B] cursor-pointer font-[500] underline" onClick={() => handleTableCellClick(item.details, item.type, item.image, item.mark)}>{item.info}</td>
                  </tr>
                ))}
              </tbody>
              </table>
              </div>
            </div>
            )}
            <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} type={modalType} image={modalImage} mark={modalMark} />
        </div>
        <div className={`xl:mx-[24px] xl:mx-0 ${show2 ? '' : 'hidden'}`}>
        <div className='text-[16px] font-[400] text-[#454655]'>“Засагт хаан” ХХК нь 2.0 - 4.0 сая.тн/жил хүчин чадал бүхий экспортын тээврийн хэрэгсэлд нүүрс ачих ажлын тоног төхөөрөмжийн хослол санал болгож байна.</div>
        <div className='text-[32px] font-[500] text-[#454655] mt-[16px] mb-[16px]'>Тоног төхөөрөмжийн хослол</div>
        <div className='buttonShow1'>
              <div className='mb-[120px]'>
              <table className="w-full border-collapse border">
              <thead>
                <tr className='text-[12px] xl:text-[16px] font-[500] text-[#23356B]'>
                  <th className="bg-[#E9EBF0] border  border-[#23356B] w-[24px] xl:w-[36px] py-[14px] text-center">{mechData.tableData1[0].number}</th>
                  <th className="bg-[#E9EBF0] border  border-[#23356B] w-[20px] xl:w-[167px] py-[14px] text-start pl-[16px]">{mechData.tableData1[0].type}</th>
                  <th className="bg-[#E9EBF0] border  border-[#23356B] w-[20px] xl:w-[205px] py-[14px] text-start pl-[16px]">{mechData.tableData1[0].mark}</th>
                  <th className="bg-[#E9EBF0] border  border-[#23356B] w-[10px] xl:w-[95px] py-[14px] text-center">{mechData.tableData1[0].unit}</th>
                  <th className="bg-[#E9EBF0] border  border-[#23356B] w-[180px] xl:w-[168px] py-[14px] text-center">{mechData.tableData1[0].image}</th>
                  <th className="bg-[#E9EBF0] border  border-[#23356B] w-[2px] xl:w-[223px] py-[14px] text-center">{mechData.tableData1[0].info}</th>
                </tr>
              </thead>
              <tbody>
                {mechData.tableData3.slice(1).map((item, index) => (
                  <tr className='text-[12px] xl:text-[16px] font-[400] text-[#454655]' key={index}>
                    <td className="border border-[#23356B] text-center">{item.number}</td>
                    <td className=" border border-[#23356B] pl-[16px]">{item.type}</td>
                    <td className="border border-[#23356B] pl-[16px]">{item.mark}</td>
                    <td className="border border-[#23356B] text-center">{item.unit}</td>
                    <td className="border border-[#23356B] py-[7px] px-[36px]"><img className='w-full h-[58px]' src={item.image} alt="" /></td>
                    <td id="modal-switch" className="border border-[#23356B] text-center text-[14px] text-[#23356B] cursor-pointer font-[500] underline" onClick={() => handleTableCellClick(item.details, item.type, item.image, item.mark)}>{item.info}</td>
                  </tr>
                ))}
              </tbody>
              </table>
              </div>
            </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} type={modalType} image={modalImage} mark={modalMark} />
        </div>
        <div className={`${show3 ? '' : 'hidden'}`}>
          {/* <Posts type={`${type}`} urlType='mechanical'/> */}

        </div>
      </div>
    </div>
  );
};

export default Mechanical;

const Modal = ({ isOpen, onClose, content, type, image, mark }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-30">
      <div className="modal-bg fixed inset-0 bg-black opacity-50"></div>
      <div className="z-50 relative w-[550px] p-[24px] leading-8 bg-white rounded-lg shadow-lg">
        <div className="modal-header absolute right-6">
          <span className="close cursor-pointer text-xl" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          <div className='text-[16px] font-bold uppercase text-[#23356B]'>{type}</div>
          <div className='flex justify-center my-[6px]'> <img className='w-max h-[135px]' src={image} alt="" /></div>
          <table className='w-full'>
            <thead>
                  <tr className='text-[14px] w-full text-start font-[500] text-[#23356B] border-b-[1px] border-[#23356B]'>
                    <th className="text-start">Үзүүлэлт</th>
                    <th className="text-start">Хэмжих нэгж</th>
                    <th className="text-start">{mark}</th>
                  </tr>
            </thead>
            <tbody>
              {content.map((detail, index) => (
                <tr className='text-[14px] font-[400] text-[#454655] border-b' key={index}>
                  <td>{detail.type} </td>  
                  <td>{detail.size}</td>
                  <td>{detail.cat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};