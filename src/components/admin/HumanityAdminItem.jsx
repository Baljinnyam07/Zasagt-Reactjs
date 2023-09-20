import React, { useState } from "react";

function HumanityAdminItem({ post }) {
  console.log('InPost:', post);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`rounded-lg p-1 w-64 h-max shadow-md bg-[#6b7280] relative`}>
        <div className="text-center mb-4">
          <img
            src={post.image}
            alt=""
            className="w-32 h-32 rounded-full mx-auto mb-2 border-[2px] border-[#cbd5e1]"
          />
          <h2 className="text-xl font-semibold text-[#262626]">
            {post.surName} {post.nickName}
          </h2>
          <p className="text-sm text-[#cbd5e1]">{post.positionOfInterest}</p>
        </div>
        <hr className="my-4 border-white" />
        <div className="text-[16px] text-[#cbd5e1] leading-6 font-bold m-4">
          <div className="flex justify-between">
            <p><div className="text-[12px] text-[#1e293b]">Утас:</div> {post.phone}</p>
            <p><div className="text-[12px] text-[#1e293b]">Хүйс:</div> {post.gender}</p>
          </div>
          <p><div className="text-[12px] text-[#1e293b]">Шуудан:</div> {post.mail}</p>
          <p>
            <div className="text-[#1e293b] text-[12px]">Регистрийн дугаар:</div>
            {post.alphabet1}
            {post.alphabet2}
            {post.registration}
          </p>
        </div>
        <div className="absolute bottom-2 right-4 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleModalOpen} fill="#000000" width="40px" height="40px" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
        </div>
        {isModalOpen && (
        <HumanityAdminModal post={post} onClose={handleModalClose} />
      )}
    </div>
  );
}

export default HumanityAdminItem;


function HumanityAdminModal({ post, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-[#1e293b] rounded-lg p-6 w-80">
        {/* Modal content */}
        <h2 className="text-xl font-semibold mb-4">
          {post.surName} {post.nickName}'s Details
        </h2>
        {/* Add more details here based on your requirements */}
        <p>Phone: {post.phone}</p>
        <p>Mail: {post.mail}</p>
        {/* Close button */}
        <button
          onClick={onClose}
          className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
}