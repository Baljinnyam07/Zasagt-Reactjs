import { useParams } from "react-router-dom";
import PostsMore from "./PostsMore";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import PostsMoreHumanity from "./PostMoreHumanity";

function Posts({urlType}) {
const [posts, setPosts] = useState([]);
const { type } = useParams();
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlType, type]);

  const getPosts = () => {
    let q;
    q = query(
      collection(db, urlType),
      where('type', '==', type),
      orderBy('date', 'desc')
    );
    getDocs(q)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ref: doc.ref,
          ...doc.data()
        }));// Sort in descending order

        if (data.length) {
          setPosts(data); // Update the state with the sorted data
        }
      })
      .catch((error) => {
        console.error("Error getting posts:", error);
      });
  };
return (
  <>
  {type === 'hire' ? (
  <div className="bg-[#ffff] relative xl:pb-[240px] w-full">
            <PostsMoreHumanity posts={posts} type={type} />
  </div>):(<div className="bg-[#ffff] relative pt-[40px] pb-[240px]">
      <div className="container sm:mx-auto">
          <PostsMore posts={posts} type={type} />
            </div>
    </div>
    )}
  </>
);
}

export default Posts;


