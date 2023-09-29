import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../../firebase";
import AdminNav from "../admin/components/navbar";

function FeedbackMore() {
  const [posts, setPosts] = useState([]);
  const urlType = "feedbacks"; // Replace with your collection name
  const type = "feedback"; // Replace with the value you want to filter by

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlType, type]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Format the timestamp as a localized string
  };

  const getPosts = () => {
    let q;
    q = query(collection(db, urlType), where("type", "==", type));
    getDocs(q)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ref: doc.ref,
          ...doc.data(),
          timestamp: formatTimestamp(doc.data().timestamp), // Format the timestamp
        }));

        if (data.length) {
          setPosts(data);
        }
      })
      .catch((error) => {
        console.error("Error getting posts:", error);
      });
  };

  return (
    <div>
      <AdminNav/>
     <div className="ml-[200px]">
     <div className="text-gray-500 text-[42px] mb-14">Санал Хүсэлт</div>
     <div className="container mx-auto p-4">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-start">#</th>
            <th className="border border-gray-300 p-2 text-start">Нэр</th>
            <th className="border border-gray-300 p-2 text-start">Имэйл</th>
            <th className="border border-gray-300 p-2 text-start">Утас</th>
            <th className="border border-gray-300 p-2 text-start">Хүсэлтийн Гарчиг</th>
            <th className="border border-gray-300 p-2 text-start">Дэлгэрэнгүй</th>
            <th className="border border-gray-300 p-2 text-start">Хугацаа</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{post.name}</td>
              <td className="border border-gray-300 p-2">{post.email}</td>
              <td className="border border-gray-300 p-2">{post.phone}</td>
              <td className="border border-gray-300 p-2">{post.title}</td>
              <td className="border border-gray-300 p-2">{post.message}</td>
              <td className="border border-gray-300 p-2">{post.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     </div>
    </div>
  );
}

export default FeedbackMore;