import { useParams } from "react-router-dom";
import PostsMore from "./PostsMore";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import PostSkeleton from "../Skeleton";

function Posts({urlType}) {
const [posts, setPosts] = useState([]);
const { type } = useParams();
console.log('type:',type)
console.log('posts:',posts)
console.log('urlType:',urlType)

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          ref: doc,
          ...doc.data()
        }));
        console.log('data:',data)

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
    <div className="bg-[#ffff] relative pt-[80px] pb-[240px]">
      <div className="container px-[26px] sm:mx-auto">
      {posts.length > 0 ? (<PostsMore posts={posts} type={type} />) : (<PostSkeleton/>)}
      </div>
    </div>
  </>
);
}

export default Posts;


