import React from "react";
import navMenuJson from './json/navbar.json';


export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="text-[#000] font-bold uppercase text-sm px-6 py-3 outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="flex w-full h-6 sm:h-10 justify-end ml-9 mt-2">
                    <span id="mobile_menu_academy" className="mobile_menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 612" width='100%' height='100%' fill="#fff">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </span>
                </div>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
          >
              <div className="flex flex-col w-full bg-[#000] z-80 outline-none focus:outline-none h-max w-screen">
                {navMenuJson.map((items) => (
                  <div className="group relative cursor-pointer text-[#fff]" key={items.headerTitle}>
                      <div className="flex items-center px-[20px]">
                      <div className={`menu-hover text-[14px] font-400 mr-[4px] uppercase`}>
                        {items.headerTitle}
                      </div>
                          <span className="text-[#000] group-hover:rotate-180 transform transition ease-in-out delay-150">
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
                      <div className="invisible z-60 pt-[12px] px-4 divide-y divider-horizontal divide-light-blue-400 flex w-max flex-col focus:visible">
                          {items.headerproperty.map((data) => (
                              <a
                                  href={data.url}
                                  key={data.property}
                                  className="block text-[14px] bg-[#000000] bg-opacity-60 backdrop-blur-md p-[12px] pb-[16px] font-400 hover:text-[#D0A616] w-[198px] h-max"
                              >
                                  <div className="">
                                  {data.property}
                                  </div>
                              </a>
                          ))}
                      </div>
                  </div>
                ))}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <img className="bg-[#fff] rounded" width="30" height="30" src="https://img.icons8.com/ios/100/delete-sign--v1.png" alt="delete-sign--v1"/>
                  </button>
                </div>
              </div>
            </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}