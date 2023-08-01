import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { collection, endBefore, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore";
import { db } from "../../firebase";
import PostsAdminItem from "./PostsAdminItem";
import { auth } from '../../firebase';


function PostsAdmin(props) {
  const [posts, setPosts] = useState([]);
  const {type} = useParams(props);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cursorAtEnd, setCursorAtEnd] = useState(false);
  const [cursorAtStart, setCursorAtStart] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
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

  

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setPhoneNumber(user.phoneNumber);
    }
  }, []);


  const logout = () => {
    auth.signOut().then(() => {
      navigate("/auth");
    }).catch((error) => {
      console.log(error);
    });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  


  return (
    <>
    <div className=" text-center leading-7 font-sans bg-[#eeeff3]">
        <div>
        <div className={`flex h-[70px] bg-[#006cff] items-center text-[#fff] font-sans text-[25px]  `}>
     <div className="">
     <svg xmlns="http://www.w3.org/2000/svg" width="300" height="40" viewBox="0 0 116 40">
       <g id="Group_6354" data-name="Group 6354" transform="translate(0 -0.001)">
         <path id="Path_4936" data-name="Path 4936" d="M0,100.638V115.9l.123.071,2.9,1.676.124.071.123.071.124.071,2.9,1.676.123.071.123.071.123.071,2.9,1.676.124.071.123.071.123.071,2.9,1.676.123.071.123.071.124.071,2.9,1.676V110.512l-2.9,1.676-.124.071v7.7l-.123-.071-.123-.071-.123-.071-2.9-1.676L9.695,118l-.123-.071-.123-.071-2.9-1.676-.123-.071-.123-.071-.123-.071-2.9-1.676-.123-.071-.123-.071V102.527l.123.071.123.071.123.071,2.9,1.676.123.071.124.071.123.071,2.9,1.676.123.071.123-.071,2.9-1.676-2.9-1.676-.123-.071-.124-.071-.123-.071-2.9-1.676-.123-.071-.124-.071-.123-.071-2.9-1.676L3.15,99.1l-.124-.071L2.9,98.962,0,97.285Z" transform="translate(0 -85.201)" fill="#fff"/>
         <path id="Path_4937" data-name="Path 4937" d="M29.129,0l-.123.071L26.1,1.748l-.123.071-.123.071-.124.071-2.9,1.676-.123.071-.123.071-.123.071-2.9,1.676-.123.071-.123.071-.123.071-2.9,1.676-.124.071-.123.071-.124.071-2.9,1.676,2.9,1.676.124.071.123.071.124.071,2.9,1.676.124.071.123.071.123.071,2.9,1.676.124.071.123.071.123.071,2.9,1.676V13.156l-.123-.071-2.9-1.676-.123-.071-.124-.071-.123-.071-2.9-1.676-.123-.071-.123-.071-.123-.071.123-.071.123-.071.123-.071,2.9-1.676.123-.071.124-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.124.071.123.071,2.9,1.676.123.071.123.071.123.071,2.9,1.676.124.071.123.071.123.071,2.9,1.676.123.071.123.071.123.071-.123.071-.123.071-.123.071-2.9,1.676-.123.071-.123.071-.124.071-2.9,1.676-.123.071V16.65l2.9-1.676.123-.071.124-.071.123-.071,2.9-1.676.123-.071.123-.071.124-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676-2.9-1.676-.123-.071L42.1,7.487l-.123-.071L39.07,5.74l-.123-.071L38.824,5.6,38.7,5.527,35.8,3.851l-.123-.071-.124-.071-.123-.071-2.9-1.676L32.4,1.89l-.123-.071-.123-.071L29.252.072Z" transform="translate(-11.409)" fill="#fff"/>
         <path id="Path_4938" data-name="Path 4938" d="M170.073,98.964l-.123.071-.123.071-.123.071-2.9,1.676-.123.071-.124.071-.123.071-2.9,1.676-.123.071-.123.071-.123.071-2.9,1.676,2.9,1.676.123.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071v11.621l-.123.071-.124.071-2.9,1.676-.123.071-.123.071-.123.071-2.9,1.676-.124.071-.123.071-.123.071-2.9,1.676-.123.071-.123.071-.123.071v-7.7l-.123-.071-2.9-1.676V125.2l2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071V97.288Z" transform="translate(-137.379 -85.203)" fill="#fff"/>
         <rect id="Rectangle_5040" data-name="Rectangle 5040" width="8.235" height="2.516" transform="translate(92.395 15.801)" fill="#fff"/>
         <path id="Path_4939" data-name="Path 4939" d="M619.465,129.905h3.19v7.975H625.4v-7.975h3.189v-2.747h-9.128Z" transform="translate(-542.574 -111.44)" fill="#fff"/>
         <path id="Path_4940" data-name="Path 4940" d="M746.238,163.514v-1.308h5.582v-2.679h-8.33v6.735h8.33v-2.679h-5.582Z" transform="translate(-651.094 -139.816)" fill="#fff"/>
         <path id="Path_4941" data-name="Path 4941" d="M851.245,185.323h3.107l1.181-1.8L854,181.267Z" transform="translate(-745.576 -158.875)" fill="#fff"/>
         <path id="Path_4942" data-name="Path 4942" d="M851.386,127.157l7.294,10.722h3.02l-5.188-7.657h0l-.186-.262-1.894-2.8Z" transform="translate(-745.699 -111.439)" fill="#fff"/>
         <path id="Path_4943" data-name="Path 4943" d="M905.206,127.927h-2.863l-1.139,1.665,1.455,2.144Z" transform="translate(-789.381 -112.124)" fill="#fff"/>
         <path id="Path_4944" data-name="Path 4944" d="M383,127.157l-4.188,10.722h2.94l2.823-7.652,1.779,4.841h-1.85l-1.023,2.811h6.855l-4.188-10.722Z" transform="translate(-331.786 -111.439)" fill="#fff"/>
         <path id="Path_4945" data-name="Path 4945" d="M526.67,135.135h-.893v0h-3.19v-7.975h-2.748v10.722h7.745Z" transform="translate(-455.32 -111.439)" fill="#fff"/>
       </g>
     </svg>
     </div>
     
     <div className="bg-[] text-[20px] w-full flex justify-end items-center ">
     <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-[#6e768e] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          id="dropdown-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {phoneNumber}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-[#eeeff3] ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-menu"
          >
            <Link
              to="/admin"
              className="block px-4 py-2 text-sm text-[#6e768e] hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Dashbourd
            </Link>
            <Link to="/login" className="block px-4 py-2 text-sm text-[#6e768e] hover:bg-gray-100 hover:text-gray-900" onClick={logout}>
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
    </div>
     </div>
        </div>
        <div className="flex">
          <div className="w-[300px] text-[14px] bg-[#fff] text-[#6e768e] h-screen p-4 px-8">
            <Link className="flex mt-6" to="/admin">Dashboard</Link>
            <br />
            <a className={`flex ${type === 'news' ? 'text-[#006cff]' : ''}`} href="/admin/posts/news">Manage News</a>
            <br />
            <a className={`flex ${type === 'basics' ? 'text-[#006cff]' : ''}`} href="/admin/posts/basics">Manage Crypto Basics</a>
            <br />
            <a className={`flex ${type === 'projects' ? 'text-[#006cff]' : ''}`} href="/admin/posts/projects">Manage Projects</a>
            <br /> 
            <Link className="flex" to="/admin/posts/AdminFeedback" >Feedback</Link>
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