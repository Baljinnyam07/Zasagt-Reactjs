import React, { useState } from "react";
import navMenuJson from './json/navbar.json';
import { useLocation } from "react-router-dom";
import Modal from "./Modal";


export default function Nav() {
    const location = useLocation();
    const url = location.pathname;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Add state for the modal

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleScrollClick = () => {
    window.scrollTo({
        top:document.documentElement.scrollHeight,
        left:'',
        behavior: 'smooth',
    });
  };

    return (
        <div className="flex items-center">
            <div className="hidden lg:block">
            <a href="/">
                <div className={`menu-hover text-[14px] font-400 ${url === '/' ? 'text-[#D0A616]' : 'text-[#fff]'} lg:mx-4 uppercase`}>
                    Нүүр
                </div>
            </a>
            </div>
            <div className="lg:hidden relative">
                <div className="absolute flex w-full h-6 sm:h-10 justify-end">
                    <span id="mobile_menu_academy" className="mobile_menu" onClick={toggleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 70 600 612" width='100%' height='100%' fill="#fff">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </span>
                </div>
                {isModalOpen && <Modal />} 
                <div className="">
                <div className={`expander flex-col max-h-0 gap-[10px] pt-[10px] overflow-hidden space-y-4 transition-[max-height] duration-700 pl-[15px] ${mobileMenuOpen ? 'max-h-full max-w-full bg-[#23356B] text-white' : ''}`}>
                    <a id="mobile_menu_market_news" className="block" href="/posts/news">
                        News
                    </a>
                    <a id="mobile_menu_crypto_knowledge" className="block" href="/posts/basics">
                        Humanity
                    </a>
                    <a id="mobile_menu_projects" className="block" href="/posts/projects">
                        Hello
                    </a>
                    <a id="menu_release" className="block" href="/posts/release">
                        World
                    </a>
                </div>
                </div>
            </div>
            {navMenuJson.map((items) => (
                <div className="group relative cursor-pointer hidden lg:block" key={items.headerTitle}>
                    <div className="flex items-center px-[20px]">
                    <div className={`menu-hover text-[14px] font-400 mr-[4px] uppercase ${url.startsWith(items.headerproperty[0].url) || url.startsWith(items.headerproperty[1].url) || url.startsWith(items.headerproperty[2].url) ? 'text-[#D0A616]' : 'text-[#fff]'}`}>
                            {items.headerTitle}
                    </div>
                        <span className="text-[#fff] group-hover:rotate-180 transform transition ease-in-out delay-150">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                            <g clipPath="url(#clip0_716_1811)">
                                <path d="M8.97747 3.80816C8.86027 3.69099 8.70132 3.62516 8.5356 3.62516C8.36987 3.62516 8.21093 3.69099 8.09372 3.80816L4.99997 6.90191L1.90622 3.80816C1.78834 3.69431 1.63047 3.63131 1.46659 3.63273C1.30272 3.63416 1.14596 3.69989 1.03008 3.81577C0.914202 3.93165 0.848472 4.08841 0.847048 4.25228C0.845624 4.41615 0.908621 4.57403 1.02247 4.69191L4.55809 8.22753C4.6753 8.3447 4.83424 8.41052 4.99997 8.41052C5.1657 8.41052 5.32464 8.3447 5.44184 8.22753L8.97747 4.69191C9.09464 4.5747 9.16046 4.41576 9.16046 4.25003C9.16046 4.0843 9.09464 3.92536 8.97747 3.80816Z" fill="white"/>
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
                                href={data.url}
                                key={data.property}
                                className="block text-[14px] bg-[#FFFFFF8F] bg-opacity-60 backdrop-blur-md p-[12px] pb-[16px] font-400 hover:text-[#D0A616] w-[198px] h-max"
                            >
                                <div className="">
                                {data.property}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
            <div className="hidden lg:block mr-[30px]">
                <div onClick={handleScrollClick} className={`menu-hover cursor-pointer text-[14px] text-[#fff] pr-[34px] font-400 ${url === '/' ? 'text-[#D0A616]' : ''} lg:mx-4 uppercase`}>
                холбоо барих
                </div>
            </div>
        </div>
    );
}