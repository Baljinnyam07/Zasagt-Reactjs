import React from "react";
import navMenuJson from './json/navbar.json';
import { useLocation } from "react-router-dom";


export default function Nav() {
    const location = useLocation();

  const url = location.pathname;
  console.log('url:',url)
    return (
        <div className="flex items-center justify-center pr-[49px]">
            <a href="/">
                <div className={`menu-hover text-[14px] pr-[34px] font-400 ${url === '/' ? 'text-[#D0A616]' : 'text-[#fff]'} lg:mx-4 uppercase`}>
                    Нүүр
                </div>
            </a>
            {navMenuJson.map((items) => (
                <div className="group relative cursor-pointer pr-[34px]" key={items.headerTitle}>
                    <div className="flex items-center">
                    
                    <div className={`menu-hover text-[14px] font-400 lg:mx-4 uppercase ${url.startsWith(items.headerproperty[0].url) || url.startsWith(items.headerproperty[1].url) || url.startsWith(items.headerproperty[2].url) ? 'text-[#D0A616]' : 'text-[#fff]'}`}>

                            {items.headerTitle}
                        </div>
                        <span className="text-[#fff]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                            <g clip-path="url(#clip0_716_1811)">
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
                    <div className="invisible absolute z-50 pt-[12px] px-4 flex w-max flex-col group-hover:visible">
                        {items.headerproperty.map((data) => (
                            <a
                                href={data.url}
                                key={data.property}
                                className="block text-[14px] bg-[#fff] p-[12px] pb-[16px] font-400 hover:text-[#D0A616] w-[198px] h-max"
                            >
                                {data.property}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}