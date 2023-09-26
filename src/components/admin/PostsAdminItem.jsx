import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import PostEdit from "../Posts/PostEdit";

function PostsAdminItem({ post, dataType, getPosts }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); // State for edit modal

  const remove = () => {
    deleteDoc(doc(db, dataType, post.id)).then(() => {
      getPosts();
      toggleDeleteModal();
    });
  };

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  const toggleEditModal = () => {
    setShowEditModal(!showEditModal); // Toggle the edit modal state
  };

  return (
      <div className="text-gray-400 relative leading-8 group">
      <div className="h-full border border-gray-400 rounded-xl p-2 w-[300px]">
        <div className="flex absolute top-5 right-6 gap-2 invisible group-hover:visible">
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
        <img className="h-[180px] rounded-xl w-full" src={post.image} alt="" />
       <div className="">
        <div>
       {post.date}
        </div>
        <div className="text-sm font-semibold">{post.title}</div>
       </div>
      </div>
      {showDeleteModal && (
        <div className="absolute top-0 bg-gray-700 w-full h-full rounded-xl text-[#000]">
          <div className="p-12">
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
      {showEditModal && (
        <div className="absolute z-10 top-0 bg-gray-700 w-[1200px] h-full rounded-xl text-[#000]">
          {/* Edit Modal */}
          <PostEdit post={post} dataType={dataType} getPosts={getPosts} />
          <button
            className="btn-remove text-rose-700 rounded-full p-2 bg-rose-300 hover:-translate-y-1"
            onClick={toggleEditModal} // Close the edit modal when this button is clicked
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default PostsAdminItem;