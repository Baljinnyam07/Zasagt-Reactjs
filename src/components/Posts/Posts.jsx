import { useParams } from "react-router-dom";
import PostsMore from "./PostsMore";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import PostSkeleton from "../Skeleton";
import PostsMoreHumanity from "./PostMoreHumanity";

function Posts({urlType}) {
const [posts, setPosts] = useState([]);
const { type } = useParams();
  console.log('urlType:', urlType)
  console.log('data:',posts)
  console.log('typeIs:',type)
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlType, type]);

  const getPosts = () => {
    let q;
    q = query(
      collection(db, urlType),
      where('type', '==', type),
    );
    console.log('Query:', q);
    getDocs(q)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ref: doc.ref,
          ...doc.data()
        }));
        console.log('Fetched Data:', data);

        if (data.length) {
          setPosts(data);
        }
      })
      .catch((error) => {
        console.error("Error getting posts:", error);
      });
  };

return (
  <>
  {type === 'hire' ? (
  <div className="bg-[#ffff] relative pb-[240px]">
    {posts.length > 0 ? (
            <PostsMoreHumanity posts={posts} type={type} />
        ) : (
          <PostSkeleton />
        )}
  </div>):(<div className="bg-[#ffff] relative pt-[80px] pb-[240px]">
      <div className="container sm:mx-auto">
      {posts.length > 0 ? (
          <PostsMore posts={posts} type={type} />
        ) : (
          <PostSkeleton />
        )}
            </div>
    </div>
    )}
  </>
);
}

export default Posts;


