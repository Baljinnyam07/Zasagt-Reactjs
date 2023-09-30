import React, { useEffect, useState } from "react";
import navMenuJson from './json/navbar.json';
import { useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";


export default function Nav() {
    const location = useLocation();
    const url = location.pathname;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState([]);
  

    useEffect(() => {
      document.addEventListener("click", hideMenus);
      return () => {
        document.removeEventListener("click", hideMenus);
      };
    }, []);
      
    const toggleMobileMenu = (id) => {
      // Toggle the 'isExpanded' state for the clicked item
      setExpandedItems((prevItems) =>
        prevItems.includes(id)
          ? prevItems.filter((item) => item !== id)
          : [...prevItems, id]
      );
    };
    function showMenu() {
      const menuElement = document.getElementById('menu');
      if (menuElement) {
        menuElement.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
      }
    }
    
    const handleScrollClick = () => {
    window.scrollTo({
        top:document.documentElement.scrollHeight,
        left:'',
        behavior: 'smooth',
    });
  };
  const hideMenus = (e) => {
    // Close all expanded menus when clicking outside
    setExpandedItems([]);
  };

  const isItemExpanded = (id) => {
    return expandedItems.includes(id);
  };

    return (
        <>
        <button className="text-white rounded-full pr-10 sm:hidden" onClick={showMenu}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
        <div className="flex items-center">
            <div className="hidden lg:block">
            <a href="/">
                <div className={`menu-hover text-[14px] font-400 ${url === '/' ? 'text-[#D0A616]' : 'text-[#fff]'} lg:mx-4 uppercase`}>
                    <FormattedMessage id="home"/>
                </div>
            </a>
            </div>
            {/* <div className="lg:hidden relative">
                <div className="absolute flex w-full h-6 sm:h-10 justify-end">
                    <span id="mobile_menu_academy" className="mobile_menu" onClick={toggleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 70 600 612" width='100%' height='100%' fill="#fff">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </span>
                </div>
            </div> */}
            {navMenuJson.map((items, index) => (
                <div className="group relative cursor-pointer hidden lg:block" key={items.headerTitle}>
                    <div className="flex items-center px-[20px]">
                    <div className={`menu-hover text-[14px] font-400 mr-[4px] uppercase ${items.headerproperty.some(item => url.startsWith(item.path)) ? 'text-[#D0A616]' : 'text-[#fff]'}`}>
                        <FormattedMessage id={items.id}/>
                    </div>
                        <span className="text-[#fff] group-hover:rotate-180 transform transition ease-in-out delay-150">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11">
                            <g clipPath="url(#clip0_716_1811)">
                                <path d="M8.97747 3.80816C8.86027 3.69099 8.70132 3.62516 8.5356 3.62516C8.36987 3.62516 8.21093 3.69099 8.09372 3.80816L4.99997 6.90191L1.90622 3.80816C1.78834 3.69431 1.63047 3.63131 1.46659 3.63273C1.30272 3.63416 1.14596 3.69989 1.03008 3.81577C0.914202 3.93165 0.848472 4.08841 0.847048 4.25228C0.845624 4.41615 0.908621 4.57403 1.02247 4.69191L4.55809 8.22753C4.6753 8.3447 4.83424 8.41052 4.99997 8.41052C5.1657 8.41052 5.32464 8.3447 5.44184 8.22753L8.97747 4.69191C9.09464 4.5747 9.16046 4.41576 9.16046 4.25003C9.16046 4.0843 9.09464 3.92536 8.97747 3.80816Z" fill="currentColor" className={`${items.headerproperty.some(item => url.startsWith(item.path)) ? 'text-[#D0A616]' : 'text-[#fff]'}`}/>
                            </g>
                            <defs>
                                <clipPath id="clip0_716_1811">
                                    <rect width="10" height="10" fill="white" transform="translate(10 10.5) rotate(-180)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        </span>
                    </div>
                    <div className="invisible absolute z-50 pt-[12px] px-4 divide-y divider-horizontal divide-light-blue-400 flex w-max flex-col group-hover:visible">
                        {items.headerproperty.map((data) => (
                            <a
                                href={data?.path}
                                key={data?.property}
                                className="block text-[14px] bg-[#FFFFFF8F] bg-opacity-60 backdrop-blur-md p-[12px] pb-[16px] font-400 hover:text-[#D0A616] w-[198px] h-max"
                            >
                                <div className="">
                                <FormattedMessage id={data.id}/>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
            <div className="hidden lg:block mr-[30px]">
                <div onClick={handleScrollClick} className={`menu-hover cursor-pointer text-[14px] text-[#fff] pr-[34px] font-400 lg:mx-4 uppercase`}>
                <FormattedMessage id="contacts"/>
                </div>
            </div>
        </div>
        </>
    );
}