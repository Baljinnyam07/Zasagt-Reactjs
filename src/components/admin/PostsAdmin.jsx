
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

function PostsAdmin({props}) {
  const [posts, setPosts] = useState([]);
  const {type} = useParams(props);
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const urlType = pathSegments[2]
  const [showPostEdit, setShowPostEdit] = useState(false); // Initialize the state variable for PostEdit
  const [showHireAdminItem, setShowHireAdminItem] = useState(true); // Initialize the state variable for HireAdminItem

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

  return (
    <div className="text-white h-full min-h-screen flex bg-[#ffffff]">
      <AdminNav/>
      <div className="w-full">
      <div className="mx-12 mt-8 mb-8">
        <div className="">
        {urlType !== 'humanity' ? (
          urlType !== 'anket' ? (
              urlType !== 'posts' ? (
                urlType !== 'mechanical' ? (
                  <div className="">

                  </div>
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
                      <a href='/admin/posts/news' className={`hover:text-[#D0A616] ${location.pathname === '/admin/posts/news' ? 'text-[#D0A616] border-b border-[#D0A616]' : 'text-gray-500'} w-max p-2 h-full`}>Цаг үеийн мэдээлэ</a>
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
            <div className="flex gap-4 flex-wrap mx-12 p-10 pt-20 relative">
              <button onClick={handleAddElementClick} className="absolute top-5 right-5 p-2 border border-gray-500 hover:border-lime-600 m-1 flex gap-3 px-2 rounded-xl items-center bg-[#203060] text-[#fff]">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
              </svg>
              <div className="">
                Create
              </div>
            </button>
              <div className="">
              {showPostEdit && <PostEdit onClose={handleClosePostEdit}/>} {/* Conditionally render the PostEdit component */}
            </div>
            {showHireAdminItem && (
              <>
                {posts.map((post) => (
              <PostsAdminItem key={post.id} dataType={urlType} post={post} getPosts={getPosts} />
            ))}
              </>
            )}
          </div>      
            ) : (
            <div className="flex gap-10 m-5">
              {posts.map((post) => (
                <HumanityAdminItem key={post.id} dataType={urlType} post={post} getPosts={getPosts} />
              ))}
            </div>
          )
        ) : (     
          <>
           <div className="w-full flex-wrap pt-20 bg-[#fff] relative">
            <button onClick={handleAddElementClick} className="absolute top-5 right-5 p-2 border border-gray-500 hover:border-lime-600 m-1 flex gap-3 px-2 rounded-xl items-center bg-[#203060] text-[#fff]">
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
                {posts.map((post) => (
                  <HireAdminItem key={post.id} dataType={urlType} post={post} getPosts={getPosts} />
                ))}
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