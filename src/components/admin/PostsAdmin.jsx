
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import PostsAdminItem from "./PostsAdminItem";
import AdminNav from "./components/navbar";
import HireAdminItem from "./HireAdminItem";
import HumanityAdminItem from "./HumanityAdminItem";
import PostEdit from "../Posts/PostEdit";
import HireCreate from "../Posts/HireEdit";
import FeedbackMore from "../Posts/FeedbackMore";
import PostEditt from "../Posts/PostEditt";

function PostsAdmin({props}) {
  const [posts, setPosts] = useState([]);
  const {type} = useParams(props);
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const urlType = pathSegments[2]
  const [showPostEdit, setShowPostEdit] = useState(false); // Initialize the state variable for PostEdit
  const [showHireAdminItem, setShowHireAdminItem] = useState(true); // Initialize the state variable for HireAdminItem
  const [editPostId, setEditPostId] = useState(null);

  const handleAddElementClick = () => {
    setShowPostEdit(true); // Show PostEdit
    setShowHireAdminItem(false); // Hide HireAdminItem
  };
  const handleClosePostEdit = () => {
    setShowPostEdit(false);
    setShowHireAdminItem(true); // Hide HireAdminItem
  };
  useEffect(() => {
    getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getPosts = () => {
    try {
      let q;
      q = query(
        collection(db, urlType),
        type ? where("type", "==", type) : null,
        orderBy("date", "desc"),
      );

    
    getDocs(q).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ref: doc,
        ...doc.data()
      }));
      if (data.length) {
        setPosts(data);
      }
    });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  console.log('getPosts:', getPosts)

  const startEditing = (postId) => {
    setEditPostId(postId);
  };

  const stopEditing = () => {
    setEditPostId(null);
  };
  return (
    <div className="text-white h-full min-h-screen flex bg-[#ffffff]">
       <AdminNav/>
      <div className="w-full pl-[150px] overflow-auto">
      <div className="mx-12 mt-8 mb-8">
        <div className="">
        {urlType !== 'humanity' ? (
          urlType !== 'anket' ? (
              urlType !== 'posts' ? (
                urlType !== 'mechanical' ? (
                    urlType !== "feedbacks" ? (
                      <div></div>
                    ) : (
                      <div><FeedbackMore dataType={urlType} post={posts} getPosts={getPosts}/></div>
                    )
                ) : (
                  <div className="">
                    <div className="text-gray-500 text-[42px] mb-14">Хамтран ажиллах</div>
                  </div>
                )
              ) : (
                <div className="">
                  <div className="text-gray-500 text-[42px] mb-14">Мэдээ</div>
                  <div className="flex justify-between w-full">
                    <div className="flex gap-4">
                      <a href='/admin/posts/news' className={`hover:text-[#D0A616] ${location.pathname === '/admin/posts/news' ? 'text-[#D0A616] border-b border-[#D0A616]' : 'text-gray-500'} w-max p-2 h-full`}>Цаг үеийн мэдээлэл</a>
                      <a href='/admin/posts/corp-news' className={`${location.pathname === '/admin/posts/corp-news' ? 'text-[#D0A616] border-b border-[#D0A616]' : 'text-gray-500'} w-max hover:text-[#D0A616] p-2 h-full`}>Байгуулагын мэдээ</a>
                      <a href='/admin/posts/social-resp' className={`${location.pathname === '/admin/posts/social-resp' ? 'text-[#D0A616] border-b border-[#D0A616]' : 'text-gray-500'} w-max hover:text-[#D0A616] p-2 h-full`}>Нийгмийн хариуцлага</a>
                    </div>
                </div>
                </div>
              )
            ) : (
              <div className="">
                  <div className="text-gray-500 text-[42px] mb-14">Анкет</div>
              </div>
            )
          ) : (
        <div className="">
          <div className="text-gray-500 text-[42px] mb-14">Хүний нөөц</div>
        </div>
        )}
        </div>
      </div>
      <div className="">
      {urlType !== 'humanity' ? (
          urlType !== "anket" ? (
            <div className=" gap-5 p-10 relative">
              <button onClick={handleAddElementClick} className="absolute top-[-120px] right-0 p-2 m-10 border border-gray-500 hover:border-lime-600 m-1 flex gap-2 px-2 rounded-xl items-center bg-[#203060] text-[#fff]">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
              </svg>
              <div className="">
                Create
              </div>
            </button>
            
              {showPostEdit && <PostEdit onClose={handleClosePostEdit}/>} {/* Conditionally render the PostEdit component */}
            {showHireAdminItem && (
              <>
                <div className="grid grid-cols-4 gap-4">
                {posts.map((post) => (
                <>
                <div className="relative">
                <div className="flex gap-2 group-hover:visible">
                <button className="btn-edit text-lime-600 rounded-full p-2 bg-green-300 hover:-translate-y-1" onClick={() => startEditing(post.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.56078 20.2501L20.5608 8.25011L15.7501 3.43945L3.75012 15.4395V20.2501H8.56078ZM15.7501 5.56077L18.4395 8.25011L16.5001 10.1895L13.8108 7.50013L15.7501 5.56077ZM12.7501 8.56079L15.4395 11.2501L7.93946 18.7501H5.25012L5.25012 16.0608L12.7501 8.56079Z" fill="#080341"/>
                </svg>
                </button>
                <button className="btn-remove text-rose-700 rounded-full p-2 bg-rose-300 hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                </div>
                {editPostId === post.id ? (
            <PostEditt post={post} dataType={urlType} getPosts={getPosts} stopEditing={stopEditing} />
          ) : (
            <PostsAdminItem key={post.id} dataType={urlType} post={post} getPosts={getPosts} />
          )}                </div>
                </>

                  ))}
                </div>
              </>
            )}
          </div>      
            ) : (
            <div className="flex gap-10 pl-12">
              {posts.map((post) => (
                <HumanityAdminItem key={post.id} dataType={urlType} post={post} getPosts={getPosts} />
              ))}
            </div>
          )
        ) : (     
          <>
           <div className=" ml-10 flex-wrap pt-20 bg-[#fff] relative">
            <button onClick={handleAddElementClick} className="absolute top-5 right-5 p-2 border border-gray-500 hover:border-lime-600 m-1 flex gap-2 px-2 rounded-xl items-center bg-[#203060] text-[#fff]">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
              </svg>
              <div className="">
              Create
              </div>
            </button>
            <div className="">
              {showPostEdit && <HireCreate onClose={handleClosePostEdit}/>}
            </div>
            {showHireAdminItem && (
              <>
                <div className="">
                {posts.map((post) => (
                  <HireAdminItem key={post.id} dataType={urlType} post={post} getPosts={getPosts} />
                ))}
                </div>
              </>
            )}
          </div>
          </>
        )}
      </div>
      </div>
    </div>
  );
}

export default PostsAdmin;