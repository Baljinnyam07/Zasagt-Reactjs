import { Link } from "react-router-dom";
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from "../../firebase";
import { useState } from "react";

function PostsAdminItem({post, getPosts}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isActive, setIsActive] = useState(post.is_active);
  console.log(post)
  const remove = () => {
      deleteDoc(doc(db, "posts", post.id)).then(() => {
        getPosts();
        toggleDeleteModal();
      });
  }
  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const toggleIsActive = async () => {
    const postRef = doc(db, 'posts', post.id);
    await updateDoc(postRef, { is_active: !isActive });
    setIsActive(!isActive);
  };

  return (
    <>
    <div className="p-5 bg-[#fff] font-sans w-max text-[#000] shadow">
        <div className="border-b rounded p-1 w-[950px] flex justify-between shadow-lg">
          <div className="flex items-center">{post.title}</div>
          <div className="flex">
            <Link to={`/admin/posts/${post.type}/edit/${post.id}`}>
              <div className="mx-2 border rounded shadow-lg p-2 flex justify-center bg-[#84cc16] w-[100px]">
                Edit
              </div>
            </Link>
            <div className="mx-2 border p-2 rounded shadow-lg justify-center flex bg-[#ef4444] w-[100px]">
              <button
                id="deleteButton"
                data-modal-toggle="deleteModal"
                onClick={toggleDeleteModal}
              >
                Remove
              </button>
            </div>
            <div className="flex items-center">
          <input
            type="checkbox"
            checked={isActive}
            onChange={toggleIsActive}
          />
          <label>Is Active</label>
        </div>
          </div>
        </div>
      </div>
      {showDeleteModal && ( 
        <div
          id="deleteModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="deleteModal"
              onClick={toggleDeleteModal} 
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <svg
              className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="mb-4 text-gray-500 dark:text-gray-300">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                data-modal-toggle="deleteModal"
                onClick={toggleDeleteModal} 
              >
                No, cancel
              </button>
              <button
                type="submit"
                className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={remove} 
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

PostsAdminItem.defaultProps = {
  post: {
    is_active: true, // Set the default value to true
  },
};

export default PostsAdminItem;