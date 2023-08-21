
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import PostsAdminItem from "./PostsAdminItem";
import AdminNav from "./components/navbar";
import HireAdminItem from "./HireAdminItem";

function Admin({props}) {
  const [posts, setPosts] = useState([]);
  const {type} = useParams(props);
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const urlType = pathSegments[2]
  console.log('urlt:',urlType)
  console.log('posts:',posts)
  console.log('type:', type)

  useEffect(() => {
    getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getPosts = () => {
    let q;
      q = query(
        collection(db, urlType),
        type ? where("type", "==", type) : null,
        orderBy("date", "desc"),
      );
    console.log(q)
    
    getDocs(q).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ref: doc,
        ...doc.data()
      }));
      if (data.length) {
        setPosts(data);
        console.log(data)
      } 
    });
  }
  return (
    <div className="text-white h-screen flex bg-[#4b5563]">
      <AdminNav/>
      <div className="">
      {type !== 'hire' ? (
                  <div className="flex gap-4 flex-wrap mx-12 mt-8">
                  <div className="w-[300px] border bg-gray-400 hover:bg-gray-500 rounded-xl flex justify-center items-center">
                    <Link className="w-20 text-[#000]" to={`/admin/${urlType}/${type}/create`}>
                              <div className="p-5 border w-max rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                              <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                              </div>
                    </Link>
                    </div>
                    {posts.map((post) => (
                      <PostsAdminItem key={post.id} dataType={urlType} post={post} getPosts={getPosts} />
                    ))}
                  </div>
        ) : (
                  <div className="grid grid-cols-2 gap-4 flex-wrap">
                    {posts.map((post) => (
                      <HireAdminItem key={post.id} dataType={urlType} post={post} getPosts={getPosts} />
                    ))}
                  </div>
      )}
      </div>
    </div>
  );
}

export default Admin;