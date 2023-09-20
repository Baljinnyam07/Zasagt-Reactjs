
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import PostsAdminItem from "./PostsAdminItem";
import AdminNav from "./components/navbar";
import HireAdminItem from "./HireAdminItem";
import HumanityAdminItem from "./HumanityAdminItem";

function PostsAdmin({props}) {
  const [posts, setPosts] = useState([]);
  const {type} = useParams(props);
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const urlType = pathSegments[2]
  console.log('post123:',posts)
  console.log('props:', props)
  console.log('urlType:', urlType)
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
    <div className="text-white h-full min-h-screen flex bg-[#4b5563]">
      <AdminNav/>
      <div className="">
      {urlType !== 'humanity' ? (
          urlType !== "anket" ? (
            <div className="flex gap-4 flex-wrap mx-12 mt-8">
            <div className="w-[300px] border bg-gray-400 hover:bg-gray-500 rounded-xl flex justify-center items-center">
              <Link className="w-20 text-[#000]" to={`/admin/${urlType}/${type}/create`}>
                <div className="p-5 border w-max rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12H20M12 4V20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </div>
            {posts.map((post) => (
              <PostsAdminItem key={post.id} dataType={urlType} post={post} getPosts={getPosts} />
            ))}
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
            <Link className="w-10 text-[#000]" to={`/admin/${urlType}/${type}/create`}>
              <div className="p-1 mx-10 mt-[74px] border w-max rounded-full hover:border-[#6ee7b7]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12H20M12 4V20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeinejoin="round"/>
                </svg>
              </div>
            </Link>
            <div className="grid grid-cols-2 gap-4 flex-wrap">
              {posts.map((post) => (
                <HireAdminItem key={post.id} dataType={urlType} post={post} getPosts={getPosts} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PostsAdmin;