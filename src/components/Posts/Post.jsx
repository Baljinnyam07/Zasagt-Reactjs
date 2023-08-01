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
            <div className="inline-block rounded bg-[#0075FF] text-white text-[14px] font-bold py-[12px] pl-[18px] pr-[20px] cursor-pointer mr-[24px]">
              <svg className="inline-block mr-[23px]" width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.214 13.5L11.836 9.157H7.946V6.338C7.90756 6.02587 7.93971 5.70909 8.04008 5.41106C8.14045 5.11302 8.30648 4.84132 8.5259 4.61604C8.74533 4.39076 9.01256 4.21763 9.30785 4.10945C9.60315 4.00127 9.91897 3.96079 10.232 3.991H12.001V0.293C10.9636 0.113582 9.91371 0.0156159 8.861 0C5.661 0 3.561 2.08 3.561 5.846V9.156H0V13.5H3.562V24H7.946V13.5H11.214Z" fill="white" />
              </svg>
              Share
            </div>
            <div className="inline-block rounded bg-[#0075FF] text-white text-[14px] font-bold py-[12px] pl-[18px] pr-[20px] cursor-pointer">
              <svg className="inline-block mr-[23px]" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 2.87099C25.8185 3.1922 25.6181 3.5024 25.4 3.8C24.848 4.58344 24.1939 5.28968 23.455 5.9L23.365 6.09299C23.3904 6.99 23.3509 7.88767 23.247 8.779C23.036 10.6358 22.5647 12.4536 21.847 14.179C21.13 15.9109 20.1487 17.521 18.938 18.952C17.0458 21.243 14.4726 22.8711 11.592 23.6C10.6186 23.8347 9.62376 23.9687 8.623 24C8.462 24 8.30201 24.007 8.14301 24.007C5.2616 24.0055 2.4552 23.0884 0.128998 21.388L0 21.297C0.414699 21.3482 0.83215 21.3739 1.25 21.374C2.65934 21.375 4.05186 21.0678 5.33 20.474C6.2552 20.0396 7.11084 19.4704 7.869 18.785C6.70784 18.7001 5.60425 18.2462 4.71944 17.4895C3.83463 16.7328 3.21497 15.7129 2.951 14.579C3.27533 14.6515 3.60666 14.6881 3.939 14.688C4.37558 14.6862 4.81002 14.6267 5.231 14.511L5.311 14.465C4.57233 14.2763 3.88306 13.9304 3.29025 13.451C2.69745 12.9715 2.21507 12.3699 1.87601 11.687C1.34834 10.6977 1.08483 9.58894 1.11099 8.46799C1.82117 8.91412 2.63682 9.16426 3.47501 9.19299C2.33572 8.26834 1.56722 6.96457 1.31 5.52C1.00758 4.03118 1.22168 2.48376 1.91699 1.133C3.14519 2.94194 4.76511 4.45097 6.65645 5.54803C8.54779 6.6451 10.662 7.30201 12.842 7.47C12.813 7.22 12.785 7.016 12.756 6.80099C12.6026 5.42957 12.8872 4.04477 13.569 2.845C13.9965 1.9938 14.6518 1.27792 15.462 0.777046C16.2722 0.27617 17.2055 0.00994195 18.158 0.00799561C18.8641 0.0193792 19.5591 0.18484 20.1946 0.492813C20.8301 0.800786 21.3906 1.24384 21.837 1.791C21.8612 1.82108 21.8916 1.84559 21.9261 1.86285C21.9606 1.88011 21.9984 1.88971 22.037 1.891C22.0651 1.89066 22.0931 1.88628 22.12 1.87799C23.2238 1.61158 24.2728 1.1551 25.22 0.528996L25.29 0.482994C24.9419 1.81195 24.1426 2.97855 23.029 3.783C24.0635 3.64779 25.0678 3.33949 26 2.87099Z" fill="white" />
              </svg>
              Share
            </div>
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