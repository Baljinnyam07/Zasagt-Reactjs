import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
function extractImageAndParagraph(html) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  const imageElement = tempElement.querySelector("img");
  const imageSrc = imageElement ? imageElement.src : "";
  if (imageElement) {
    imageElement.remove();
  }
  const paragraph = tempElement.innerHTML
  return {
    image: imageSrc,
    paragraph: paragraph,
  };
  
}

function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const { type, postId } = useParams();
  const [image, setImage] = useState('')
  const [paragraph,setParagraph] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const docRef = doc(db, "posts", postId);

    const { image, paragraph } = extractImageAndParagraph(content);
    setImage(image);
    setParagraph(paragraph);
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
    return () => {
      window.removeEventListener("popstate", handleBackButtonClick);
    };
  }, [postId, type, navigate,content]);

  return (
    <>
      <div className="flex divide-x">
      <div className="text-[14px] uppercase xl:block hidden">
        <div
          className="text-black w-[460px] font-medium mb-5 cursor-pointer border-b py-[40px]"
        >
          <a className={`pl-[130px] flex gap-2 ${location.pathname.startsWith('/posts/news')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/news'>цаг үеийн мэдээлэл{location.pathname === '/posts/news' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
        <div
          className="text-black w-[460px] font-medium mb-5 cursor-pointer border-b py-[40px]"
        >
          <a className={`pl-[130px] flex gap-2 ${location.pathname.startsWith('/posts/corp-news') ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/corp-news'>байгууллагын мэдээ{location.pathname === '/posts/corp-news' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
        <div
          className="text-black w-[460px] font-medium mb-5 cursor-pointer border-b py-[40px]"
        >
          <a className={`pl-[130px] flex gap-2 ${location.pathname.startsWith('/posts/social-resp')  ? 'text-[#D0A616]' : 'text-[#000]'}`} href='/posts/social-resp'>нийгмийн хариуцлага{location.pathname === '/posts/social-resp' && <div className='w-[8px] h-[2px] flex-shrink-0 bg-[#D0A616] mt-[9px]'></div>}</a>
        </div>
      </div>
      <div>
      <div className="pb-[140px]">
          <div className="container px-[26px] sm:mx-auto max-w-[996px]">
          <div className="container sm:mx-auto pt-[40px] max-w-[800px] mb-[92px]">
          <div>
            {image && <img className="w-full h-[380px]" src={image} alt="Post" />}
          </div>
          <div className="text-[#35363B] mb-[18px] mt-[18px] text-[#8F9099] text-[12px]">
              <svg className="inline-block mr-[8px] mb-[5px]" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.75 2.875H11.125V1.875C11.125 1.80625 11.0688 1.75 11 1.75H10.125C10.0562 1.75 10 1.80625 10 1.875V2.875H6V1.875C6 1.80625 5.94375 1.75 5.875 1.75H5C4.93125 1.75 4.875 1.80625 4.875 1.875V2.875H2.25C1.97344 2.875 1.75 3.09844 1.75 3.375V13.75C1.75 14.0266 1.97344 14.25 2.25 14.25H13.75C14.0266 14.25 14.25 14.0266 14.25 13.75V3.375C14.25 3.09844 14.0266 2.875 13.75 2.875ZM13.125 13.125H2.875V7.1875H13.125V13.125ZM2.875 6.125V4H4.875V4.75C4.875 4.81875 4.93125 4.875 5 4.875H5.875C5.94375 4.875 6 4.81875 6 4.75V4H10V4.75C10 4.81875 10.0562 4.875 10.125 4.875H11C11.0688 4.875 11.125 4.81875 11.125 4.75V4H13.125V6.125H2.875Z" fill="#8F9099"/>
              </svg>
              {createdAt ? date : (new Date(parseInt(date) * 1000)).toJSON()?.slice(0, 10)}
            </div>
            <div className="text-[24px] leading-12 font-bold mb-[16px] text-[#35363B]">{title}</div>
            <div className="text-[16px] text-justify text-[#8F9099]" dangerouslySetInnerHTML={{ __html: paragraph }} />
          </div>
        </div>
      </div>
      </div>
    </div>
      
    </>
  );
}

export default Post;