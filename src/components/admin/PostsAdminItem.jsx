import React, { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import PostEditt from "../Posts/PostEditt";

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
      <>
    {!showEditModal && (
      <div className="text-gray-400 relative leading-8 group">
      <div className="h-full border border-gray-400 rounded-xl p-2 w-full">
        
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
      
    </div>
    )}
    {showEditModal && (
      <div className="fixed inset-0 z-50 backdrop-blur backdrop-opacity-100 flex items-center justify-center">
        <div className="bg-white w-[1200px] rounded-xl text-[#000] relative">
          {/* Edit Modal */}
          <PostEditt post={post} dataType={dataType} getPosts={getPosts} />
          <button
            className="btn-remove text-rose-700 rounded-full p-2 bg-rose-300 hover:-translate-y-1 absolute top-4 right-4"
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
      </div>
    )}
      </>
  );
}

export default PostsAdminItem;