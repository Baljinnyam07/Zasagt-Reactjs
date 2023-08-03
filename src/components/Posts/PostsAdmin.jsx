import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, endBefore, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore";
import { db } from "../../firebase";
import PostsAdminItem from "./PostsAdminItem";


function PostsAdmin(props) {
  const [posts, setPosts] = useState([]);
  const {type} = useParams(props);
  const [cursorAtEnd, setCursorAtEnd] = useState(false);
  const [cursorAtStart, setCursorAtStart] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const paginateBy = 10;
  useEffect(() => {
    getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getPosts = (direction) => {
    let q;
    let start = null;
    let end = null;

    if (direction === "next" && !cursorAtEnd) {
      start = posts[posts.length - 1].ref;
      q = query(
        collection(db, "posts"),
        type ? where("type", "==", type) : null,
        orderBy("date", "desc"),
        startAfter(start),
        limit(paginateBy)
      );    
    } else if (direction === "prev" && !cursorAtStart) {
      end = posts[0].ref;
      q = query(
        collection(db, "posts"),
        type ? where("type", "==", type) : null,
        orderBy("date", "desc"),
        endBefore(end),
        limit(paginateBy)
      );
    } else {
      q = query(
        collection(db, "posts"),
        type ? where("type", "==", type) : null,
        orderBy("date", "desc"),
      );
    }
    console.log(q)
    
    getDocs(q).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ref: doc,
        ...doc.data()
      
      }));
      console.log(data)

      if (data.length) {
        setPosts(data);
        console.log(data)
        if (direction === "next") {
          setCursorAtStart(false);
          setCurrentPage(currentPage + 1);
        } else if (direction === "prev") {
          setCursorAtEnd(false);
          setCurrentPage(currentPage - 1);
        } else {
          setCurrentPage(1);
        }
      } 
    });
  }

  return (
    <>
    <div className=" text-center leading-7 font-sans bg-[#eeeff3]">
        <div>
        <div className={`flex h-[70px] bg-[#006cff] items-center text-[#fff] font-sans text-[25px]`}>
     <div className="text-[20px] w-full flex justify-end items-center ">
    </div>
     </div>
        </div>
        <div className="flex">
          <div className="w-[300px] text-[14px] bg-[#fff] text-[#6e768e] h-screen p-4 px-8">
            <Link className="flex mt-6" to="/admin">Dashboard</Link>
          <br />
            <br />
            <a className={`flex ${type === 'news' ? 'text-[#006cff]' : ''}`} href="/admin/posts/news">Цаг үеийн мэдээлэл</a>
            <br />

            <a className={`flex ${type === 'corp-news' ? 'text-[#006cff]' : ''}`} href="/admin/posts/corp-news">Байгууллагын мэдээ</a>
            <br />

            <a className={`flex ${type === 'social-resp' ? 'text-[#006cff]' : ''}`} href="/admin/posts/social-resp">Нийгмийн хариуцлага</a>
            <br />
          </div>
          <div className="text-[#000]">
          <div className="h-max px-5 mt-10 font-sans project">
              <div className="flex">
                <Link className="border w-20 rounded  bg-[#6c757d]  text-[#fff]" to={`/admin/posts/${type}/create`}>Create</Link>
              </div>
              <br />
              <div className="">
                <div className="">
                {posts.map((post) => <PostsAdminItem key={post.id} post={post} getPosts={getPosts} />)}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default PostsAdmin;