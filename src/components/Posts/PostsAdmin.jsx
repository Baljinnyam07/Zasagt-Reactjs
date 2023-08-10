
import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import PostsAdminItem from "./PostsAdminItem";

const typeLinks = [
  { url: '/admin/posts/news', label: 'Manage News' },
  { url: '/admin/mechanical/mining', label: 'Contact Us' },
  { url: '/admin/humanity/hire', label: 'Humanity' },
  { url: '/admin/feedbacks/feedback', label: 'Feedback' },
];

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
    <div className="bg-gray-900 text-white h-screen flex flex-col">
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-6">
          <li>
            <Link className="hover:underline" to="/admin">
              Dashboard
            </Link>
          </li>
          {typeLinks.map((link) => (
            <li key={link.url}>
              <a className="hover:underline" href={link.url}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-grow p-10">
      <div className="flex">
                <Link className="border w-20 rounded bg-[#6c757d] text-[#fff] mx-20 mb-10" to={`/admin/${urlType}/${type}/create`}>
                  <div className="ml-3">Create</div>
                </Link>
              </div>
      <div className="">
                <div className="grid grid-cols-6 gap-4 m-20">
                {posts.map((post) => <PostsAdminItem key={post.id} dataType={urlType} post={post} getPosts={getPosts} />)}
                </div>
              </div>
      </main>
    </div>
  );
}

export default Admin;