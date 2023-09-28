import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import HireEditt from "../Posts/HireEditt";

function HireAdminItem({ post, dataType, getPosts }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); // State for edit modal
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [showAnket, setShowAnket] = useState(false); // State to show Anket component

  const togglePostExpansion = (postId) => {
    setExpandedPostId((prevExpandedPostId) =>
      prevExpandedPostId === postId ? null : postId
    );
  };

  const handleAnketButtonClick = () => {
    setShowAnket(true);
  };
  const remove = async () => {
    try {
      console.log('Removing data:', dataType, post.id);
      await deleteDoc(doc(db, dataType, post.id));
      getPosts();
      toggleDeleteModal();
      console.log('Data removed successfully.');
    } catch (error) {
      console.error('Error removing data:', error);
    }
  };
  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  const toggleEditModal = () => {
    setShowEditModal(!showEditModal); // Toggle the edit modal state
  };

  return (
      <>
        <div className="text-[#cbd5e1] rounded-lg mb-4 relative">
        <div className="flex absolute right-[100px] top-4 gap-2 group-hover:visible">
        <button className="btn-edit text-lime-600 rounded-full p-2 bg-green-300 hover:-translate-y-1" onClick={toggleEditModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.56078 20.2501L20.5608 8.25011L15.7501 3.43945L3.75012 15.4395V20.2501H8.56078ZM15.7501 5.56077L18.4395 8.25011L16.5001 10.1895L13.8108 7.50013L15.7501 5.56077ZM12.7501 8.56079L15.4395 11.2501L7.93946 18.7501H5.25012L5.25012 16.0608L12.7501 8.56079Z" fill="#080341"/>
                </svg>
              </button>
            <button className="btn-remove text-rose-700 rounded-full p-2 bg-rose-300 hover:-translate-y-1" onClick={toggleDeleteModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
          </div>
            {showDeleteModal && (
                <div className="absolute z-20 top-0 right-0 bg-gray-700 flex justify-center items-center h-full w-full h-full rounded-xl text-[#000]">
                  <div className="flex gap-10">
                    <p className="text-[#fff]">
                      Та устгахдаа итгэлтэй байна уу?
                    </p>
                    <div className="flex gap-2  text-[#fff]">
                      <button className="border rounded-xl px-4" onClick={toggleDeleteModal}>
                        Үгүй
                      </button>
                      <button type="button" className="border rounded-xl px-4 bg-[#dc2626]" onClick={remove}>
                        Тийм
                      </button>
                    </div>
                  </div>
                </div>
              )}
            <div className="transition duration-150 ease-out">
      
        <div className="mr-5" key={post.id}>
            <div
              key={post.id}
              className={`bg-white mt-[24px] cursor-pointer rounded border-[1.5px] border-[#23356B] w-full flex flex-col ${
                expandedPostId === post.id ? "h-max" : "h-[110px]"
              } overflow-hidden`}
              onClick={() => togglePostExpansion(post.id)}
              tabIndex="0" // For making it focusable
            >             
             <div className="border-b">
              <div className="py-[16px] px-[24px]">
              <div className="text-[16px] flex justify-between font-bold text-[#23356B] mb-[24px]">
                <div>
                    {post.title}
                </div>
                <div className={`p-[8px] bg-[#ECEDEE] border transition-all transform ${
                        expandedPostId === post.id ? "rotate-0" : "rotate-180"
                      }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8.00048 7.21883L4.70048 10.5188L3.75781 9.57616L8.00048 5.3335L12.2431 9.57616L11.2998 10.5188L7.99981 7.21883H8.00048Z" fill="#23356B"/>
                    </svg>
                </div>
              </div>
              <div className="flex gap-[24px] pb-[18px]">
                <div className="flex items-center gap-[8px]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.00014 14.1257L8.4809 13.584C9.02643 12.9593 9.51709 12.3665 9.95366 11.8027L10.314 11.3273C11.8188 9.29983 12.5716 7.69069 12.5716 6.50136C12.5716 3.96269 10.5251 1.90479 8.00014 1.90479C5.47519 1.90479 3.42871 3.96269 3.42871 6.50136C3.42871 7.69069 4.18147 9.29983 5.68623 11.3273L6.04662 11.8027C6.66943 12.6007 7.32103 13.3751 8.00014 14.1257Z" stroke="#8F9099" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.00047 8.38081C9.05244 8.38081 9.90523 7.52802 9.90523 6.47605C9.90523 5.42408 9.05244 4.57129 8.00047 4.57129C6.94849 4.57129 6.0957 5.42408 6.0957 6.47605C6.0957 7.52802 6.94849 8.38081 8.00047 8.38081Z" stroke="#8F9099" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="text-[12px] text-[#8F9099] font-400">
                        {post.location}
                    </div>
                </div>
                <div className="flex items-center gap-[8px]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.75 2.875H11.125V1.875C11.125 1.80625 11.0688 1.75 11 1.75H10.125C10.0562 1.75 10 1.80625 10 1.875V2.875H6V1.875C6 1.80625 5.94375 1.75 5.875 1.75H5C4.93125 1.75 4.875 1.80625 4.875 1.875V2.875H2.25C1.97344 2.875 1.75 3.09844 1.75 3.375V13.75C1.75 14.0266 1.97344 14.25 2.25 14.25H13.75C14.0266 14.25 14.25 14.0266 14.25 13.75V3.375C14.25 3.09844 14.0266 2.875 13.75 2.875ZM13.125 13.125H2.875V7.1875H13.125V13.125ZM2.875 6.125V4H4.875V4.75C4.875 4.81875 4.93125 4.875 5 4.875H5.875C5.94375 4.875 6 4.81875 6 4.75V4H10V4.75C10 4.81875 10.0562 4.875 10.125 4.875H11C11.0688 4.875 11.125 4.81875 11.125 4.75V4H13.125V6.125H2.875Z" fill="#8F9099"/>
                        </svg>
                    </div>
                    <div className="text-[12px] text-[#8F9099] font-400">
                    {post.date}
                    </div>
                </div>
              </div>
              </div>
              </div>
              <div className="py-[16px] px-[24px] text-[#454655] text-[16px]">
                <div className="font-[500] mb-[8px]">Гүйцэтгэх үндсэн үүрэг</div>
                <div className="font-400 mb-[24px]">
                    {post.basicissues}
                </div>
                <div className="mb-[8px] font-[500]">Ажлын байранд тавигдах шаардлага</div>
                <div className="mb-[24px]">
                <ul>
                  {post.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                </div>
                <div className="mb-[8px] font-[500]">Нэмэлт мэдээлэл</div>
              <div className="mb-[24px]">
                {post.addinformation}
              </div>
                <div className="mb-[8px] font-[500]">Бусад</div>
              <div className="flex gap-[24px]">
              <div>
                <div>Байршил:</div>
                <div>Салбар:</div>
                <div>Түвшин:</div>
                <div>Төрөл:</div>
              </div>
              <div>
                <div className="">
                    {post.joblocation}
                </div>
                <div className="">
                    {post.industry}
                </div>
                <div className="">
                    {post.level}
                </div>
                <div className="">
                    {post.jobtype}
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
    {showEditModal && (
      <div className="fixed inset-0 z-40 backdrop-blur-xl backdrop-opacity-100 flex items-center justify-center">
        <div className="w-max flex p-40 rounded-xl text-[#000] relative">
          {/* Edit Modal */}
          <HireEditt  post={post} dataType={dataType} getPosts={getPosts} />
          
        </div>
        <button
            className="btn-remove text-rose-700 rounded-full p-2 bg-rose-300 hover:-translate-y-1 absolute top-6 right-6"
            onClick={toggleEditModal} // Close the edit modal when this button is clicked
          >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xmlSpace="preserve">
            <g>
              <g>
                <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512     512,452.922 315.076,256   "/>
              </g>
            </g>
            </svg>
          </button>     
         </div>
    )}
      </>
  );
}

export default HireAdminItem;