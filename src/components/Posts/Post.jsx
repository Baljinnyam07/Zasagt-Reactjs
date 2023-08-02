import { Link, useParams, useNavigate } from "react-router-dom";
import PostsMore from "./PostsMore";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";

function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [posts, setPosts] = useState([]);
  const { type, postId } = useParams();
  const navigate = useNavigate();
  console.log('content:', content)

  useEffect(() => {
    const docRef = doc(db, "posts", postId);

    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title);
        setContent(data.content);
        setDate(data.date);
        setCreatedAt(data.createdAt);
      } else {
        console.log("No such document!");
      }
    });

    const handleBackButtonClick = () => {
      navigate(-1);
    };

    window.addEventListener("popstate", handleBackButtonClick);

    const q = query(collection(db, "posts"), where("type", "==", type), orderBy("date", "desc"), limit(4));

    getDocs(q).then((querySnapshot) => {
      const data = querySnapshot.docs
        .filter((doc) => doc.id !== postId)
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .slice(-3);
      setPosts(data);
    });

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("popstate", handleBackButtonClick);
    };
  }, [postId, type, navigate]);

  return (
    <>
      <div className="bg-[#F5F5F5] relative w-screen -left-[calc(50vw-50%)] pt-[80px] pb-[140px]">
      <div className="font-Montserrat max-w-[1490px] mx-auto px-[34px] text-[10px] sm:text-[14px] mb-[80px] text-[#3973C5]">
          
          </div>
          <div className="container px-[26px] sm:mx-auto max-w-[996px]">
          <div className="container sm:mx-auto pt-[17px] max-w-[800px] mb-[92px]">
            <div className="text-[40px] leading-12 font-bold mb-[24px] text-[#35363B]">{title}</div>
            <div className="text-[#35363B] mb-[40px]">
              <svg className="inline-block mr-[16px] mb-[5px]" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.66716 7.2H3.11116V8.8H4.66716V7.2ZM7.77816 7.2H6.22216V8.8H7.77816V7.2ZM10.8892 7.2H9.33316V8.8H10.8892V7.2ZM12.4452 1.6H11.6672V0H10.1112V1.6H3.88916V0H2.33316V1.6H1.55616C1.34933 1.60299 1.14513 1.6468 0.955276 1.72891C0.765422 1.81102 0.593652 1.92981 0.449824 2.07847C0.305996 2.22713 0.192941 2.40273 0.117148 2.59519C0.0413547 2.78765 0.00431541 2.99319 0.00815539 3.2L0.000155494 14.4C-0.00275381 14.6072 0.0351876 14.813 0.111813 15.0056C0.188439 15.1981 0.302247 15.3737 0.446739 15.5223C0.591231 15.6709 0.763576 15.7895 0.953931 15.8715C1.14429 15.9535 1.34892 15.9971 1.55616 16H12.4442C12.8623 15.9929 13.2606 15.8206 13.5521 15.5209C13.8436 15.2211 14.0047 14.8181 14.0002 14.4V3.2C14.0047 2.78186 13.8436 2.37891 13.5521 2.07913C13.2606 1.77936 12.8633 1.60711 12.4452 1.6ZM12.4452 14.4H1.55616V5.6H12.4442L12.4452 14.4Z" fill="#68686C" />
              </svg>
              {createdAt ? date : (new Date(parseInt(date) * 1000)).toJSON()?.slice(0, 10)}
            </div>
            <div className="richcontent text-[#35363B] text-[16px] mb-[40px]" dangerouslySetInnerHTML={{ __html: content }}></div>
            
          </div>

          <div className="border border-b-[0.5px] border-b-[#3973C5] mb-[30px]"></div>

          <PostsMore posts={posts} type={type} />

          <Link to={`/posts/${type}`} className="block text-[#3973C5] text-[18px] underline mt-[24px] text-right">
            <div>save</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Post;