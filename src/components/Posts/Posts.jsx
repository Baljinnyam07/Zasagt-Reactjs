import { Link, useParams } from "react-router-dom";
import PostsMore from "./PostsMore";
import { useEffect, useState } from "react";
import { collection, endBefore, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore";
import { db } from "../../firebase";

function Posts({urlType}) {
const [posts, setPosts] = useState([]);
const { type } = useParams();
const paginateBy = 6;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPosts = (direction) => {
    let q;
  if (direction === 'next') {
    q = query(
      collection(db, urlType),
      where('type', '==', type),
      orderBy('date', 'desc'),
      startAfter(posts[posts.length - 1]?.ref),
      limit(paginateBy)
    );
  } else if (direction === 'prev') {
    q = query(
      collection(db, urlType),
      where('type', '==', type),
      orderBy('date', 'desc'),
      endBefore(posts[0]?.ref),
      limit(paginateBy)
    );
  } else {
    q = query(
      collection(db, urlType),
      where('type', '==', type),
      orderBy('date', 'desc')
    );
  }

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

console.log()
return (
  <>
    <div className="bg-[#ffff] relative pt-[80px] pb-[240px]">
      <div className="container px-[26px] sm:mx-auto">
        {type === "basics" && (
          <div className="flex w-full pb-[16px] border-b-[1px] border-b-[#CDCDCE] text-[18px] font-medium gap-[40px] mb-[24px]">
            <div className="relative text-[#35363B] uppercase">
              <div id="footer_crypto_knowledge">Hi</div>
              <div className="absolute h-[2px] w-full bg-[#13A9FD] bottom-[-17px]"></div>
            </div>
            <Link to="/cryptoterms" className="relative text-[#CDCDCE] uppercase">
              <div id="crypto_basics_terms">hello</div>
            </Link>
          </div>
        )}
      {posts.length && <>
          <PostsMore posts={posts} type={type} />
        </>
        }
      </div>
    </div>
  </>
);
}

export default Posts;


