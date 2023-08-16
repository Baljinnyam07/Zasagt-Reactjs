import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

function PostsAdminItem({ post, dataType, getPosts }) {
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
      <div className="bg-white text-gray-800 rounded-lg shadow-md mb-4 relative">
      <div className="h-[290px]">
        <div className="w-full">
        <img className="h-40 w-full rounded-t-lg" src={post.image} alt="" />
        </div>
       <div className="p-2">
        <div className="text-sm font-semibold">{post.title}</div>
          <div className="flex space-x-2 items-end absolute bottom-0">
            <Link to={`/admin/${dataType}/${post.type}/edit/${post.id}`}>
              <button className="btn-edit text-lime-600">
                Edit
              </button>
            </Link>
            <button className="btn-remove text-rose-700" onClick={toggleDeleteModal}>
              Remove
            </button>
          </div>
       </div>
      </div>
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p className="modal-text">
              Are you sure you want to delete this item?
            </p>
            <div className="modal-buttons">
              <button className="btn-modal btn-cancel" onClick={toggleDeleteModal}>
                Cancel
              </button>
              <button className="btn-modal btn-confirm" onClick={remove}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostsAdminItem;