import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

function HireAdminItem({ post, dataType, getPosts }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const remove = () => {
    deleteDoc(doc(db, dataType, post.id)).then(() => {
      getPosts();
      toggleDeleteModal();
    });
  };

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  

  return (
      <div className="m-8 text-[#cbd5e1] rounded-lg mb-4 relative">
       <form className="p-2 relative">
        <fieldset className="border border-gray-300 p-4 rounded-lg mb-4">
            <legend className="text-lg font-semibold mb-2">{post.title}</legend>
            <div className="ml-auto absolute right-10 top-8">

                <Link to={`/admin/${dataType}/${post.type}/edit/${post.id}`}>
                <button
                className="mr-2 hover:bg-green-300 p-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.56078 20.2501L20.5608 8.25011L15.7501 3.43945L3.75012 15.4395V20.2501H8.56078ZM15.7501 5.56077L18.4395 8.25011L16.5001 10.1895L13.8108 7.50013L15.7501 5.56077ZM12.7501 8.56079L15.4395 11.2501L7.93946 18.7501H5.25012L5.25012 16.0608L12.7501 8.56079Z" fill="#080341"/>
                </svg>

              </button>
                </Link>
              <button
              type="button"
                className="hover:bg-rose-300 p-2 rounded-full"
                onClick={toggleDeleteModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            {showDeleteModal && (
                <div className="absolute top-0 right-0 bg-gray-700 flex justify-center items-center h-full w-full h-full rounded-xl text-[#000]">
                  <div className="">
                    <p className="text-[#fff]">
                      Та устгахдаа итгэлтэй байна уу?
                    </p>
                    <div className="flex gap-2 mt-12 text-[#fff]">
                      <button className="border rounded-xl px-4" onClick={toggleDeleteModal}>
                        Үгүй
                      </button>
                      <button className="border rounded-xl px-4 bg-[#dc2626]" onClick={remove}>
                        Тийм
                      </button>
                    </div>
                  </div>
                </div>
              )}
            <div className="py-[16px] px-[24px] text-[#cbd5e1] text-[12px]">
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
        </fieldset>
       </form>
    </div>
  );
}

export default HireAdminItem;