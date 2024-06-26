import Editor from './Editor';
import { useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp, doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db, storage } from '../../firebase';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ref, uploadBytesResumable } from 'firebase/storage';


const PostCreate = ({post , onClose}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState((new Date()).toJSON().slice(0, 10));
  const [image, setImage] = useState("");
  const [percent, setPercent] = useState(0);
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const urlType = pathSegments[2];
  const [dataType] = useState(urlType);
  const navigate = useNavigate();
  const {type,postId} = useParams()
  useEffect(() => {
    if (postId) {
      const docRef = doc(db, dataType, postId);
      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title);
          setContent(data.content);
          setDate(data.date);
          setImage(data.image);
        } else {
          console.log("No such document!");
        }
      });
    }
  }, [dataType,postId]);

  const save = async () => {
    if (!dataType) {
      console.error("dataType is empty");
      return;
    }
    if (postId) {
      await updateDoc(doc(db, dataType, postId), {
        title: title,
        content: content,
        image: image,
        date: date,
        updatedAt: serverTimestamp(),
        type: type,
      });
      navigate(`/${type}/${postId}`);
    } else {
       await addDoc(collection(db, dataType), {
        title: title,
        content: content,
        image: image,
        date: date,
        createdAt: serverTimestamp(),
        type: type,
      });
      navigate(`/admin/${dataType}/${type}`);
    }
  }

  const upload = (e) => {
    let file = e.target.files[0];
    if (file) {
      let name = `${Date.now()}.${file.type.split('/')[1]}`;
      const storageRef = ref(storage, name)
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.then(() => {
        setImage(`https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/${name}?alt=media`)
      });

      uploadTask.on('state_changed', (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(progress);
      });
    }
  }

  function extractContent(html, lineClamp = Infinity) {
    const tempElement = document.createElement("p");
    tempElement.innerHTML = html;
    const contentContainer = document.createElement("p");
    contentContainer.style.overflow = "hidden";
    contentContainer.style.display = "-webkit-box";
    contentContainer.style.webkitBoxOrient = "vertical";
    contentContainer.appendChild(tempElement);
    const extractedText = contentContainer.textContent;
    return extractedText;
  }

  return <>
 <div>
      <div className="bg-[#e9ebf0] p-8 flex">
      <button
        className="btn-remove text-rose-700 rounded-full p-2 bg-rose-300 hover:-translate-y-1 absolute top-[55px] right-[60px]"
        onClick={onClose} // Close the edit modal when this button is clicked
      >
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xmlSpace="preserve">
        <g>
          <g>
            <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512     512,452.922 315.076,256   "/>
          </g>
        </g>
        </svg>
      </button>
          <div className="w-full max-h-[500px] overflow-auto p-8 bg-[#374151] text-white">
            <h2 className="text-xl font-semibold mb-4">Create</h2>
            <div className="mb-6">
              <label htmlFor="title" className="block text-white">Гарчиг</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control bg-[#4b5563] p-2 w-full rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                  />
            </div>
            <div className='flex gap-3'>
            <div className="mb-6">
              <label htmlFor="date" className="block">Огноо</label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-control bg-[#4b5563] rounded"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="image" className="block">Thumbnail</label>
              <input type="file" onChange={upload} className="mb-4 rounded" />
            </div>
            </div>
            {percent > 0 && percent < 100 && (
                <div className='w-full h-4 bg-gray-200 rounded'>
                  <div
                    className={`w-${percent} bg-green-400 h-full rounded`}
                  ></div>
                </div>
              )}
              {image && (
                <img className='w-[1000px] mt-4 mb-[24px] rounded' src={image} alt='post_image' />
              )}
            <div className="mb-6">
              <label htmlFor="content" className="block">Content</label>
              <Editor content={content} setContent={setContent} />
            </div>
            <div className="flex justify-end">
              <Link to='admin/posts/news'
                className="bg-green-500 text-white px-6 py-2 rounded"
                onClick={save}
              >
                Хадгалах
              </Link>
            </div>
          </div>
          <div className=''>
            
        <div className='w-2/5 grid grid-cols-4 gap-3 px-10'>
        <div className='col-span-2'>
        <div className="bg-white text-[#8F9099] w-[400px] rounded p-2">
              <div className="aspect-video" style={{ backgroundImage: `url("${image}")` }}></div>
              <div className=" flex flex-col justify-between grow">
              <div className="text-[#35363B] mb-[18px] mt-[18px] text-[#8F9099] text-[12px]">
              <svg className="inline-block mr-[8px] mb-[5px]" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.75 2.875H11.125V1.875C11.125 1.80625 11.0688 1.75 11 1.75H10.125C10.0562 1.75 10 1.80625 10 1.875V2.875H6V1.875C6 1.80625 5.94375 1.75 5.875 1.75H5C4.93125 1.75 4.875 1.80625 4.875 1.875V2.875H2.25C1.97344 2.875 1.75 3.09844 1.75 3.375V13.75C1.75 14.0266 1.97344 14.25 2.25 14.25H13.75C14.0266 14.25 14.25 14.0266 14.25 13.75V3.375C14.25 3.09844 14.0266 2.875 13.75 2.875ZM13.125 13.125H2.875V7.1875H13.125V13.125ZM2.875 6.125V4H4.875V4.75C4.875 4.81875 4.93125 4.875 5 4.875H5.875C5.94375 4.875 6 4.81875 6 4.75V4H10V4.75C10 4.81875 10.0562 4.875 10.125 4.875H11C11.0688 4.875 11.125 4.81875 11.125 4.75V4H13.125V6.125H2.875Z" fill="#8F9099"/>
              </svg>
                {date}
            </div>
                <div className="text-[#454655] font-500 w-[300px] h-[68px] text-[23px] font-bold mb-[16px] line-clamp-2" style={{ maxHeight: "3em", lineClamp: 2 }}>
                  {title}
                </div>
                <div className="h-[96px] w-full overflow-hidden" style={{ maxHeight: "3em", lineClamp: 2 }} dangerouslySetInnerHTML={{ __html: extractContent(content) }} />
                <div className="items-center mt-10">
                  <div className="text-[14px] text-white font-light rounded py-[8px] px-[16px]">
                    <svg width="54" height="17" viewBox="0 0 54 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.63 3.354L28.522 9.29V13H27.178V9.304L24.07 3.354H25.54L27.892 8.128L30.244 3.354H31.63ZM34.6438 13.168C33.4538 13.168 32.3478 12.748 31.5638 11.866L32.3478 11.11C32.9078 11.698 33.6218 12.048 34.5738 12.048C35.9038 12.048 36.6598 11.348 36.6598 10.214C36.6598 9.094 35.9458 8.45 34.5318 8.45H33.6078L33.7898 7.358H34.5458C35.6518 7.358 36.3798 6.756 36.3798 5.762C36.3798 4.95 35.9178 4.278 34.7558 4.278C33.9578 4.278 33.2298 4.586 32.5158 5.174L31.8158 4.376C32.6978 3.592 33.6918 3.186 34.8538 3.186C36.7998 3.186 37.7658 4.278 37.7658 5.65C37.7658 6.868 36.9958 7.582 35.8758 7.834C37.0518 7.96 38.0878 8.73 38.0878 10.228C38.0878 11.992 36.6318 13.168 34.6438 13.168ZM41.4788 3.186C43.5088 3.186 45.0488 4.53 45.0488 8.17C45.0488 11.418 43.6348 13.168 41.2968 13.168C40.0088 13.168 39.1828 12.692 38.5808 12.132L39.2528 11.306C39.7988 11.726 40.3308 12.048 41.2548 12.048C42.6968 12.048 43.5788 11.026 43.6348 8.576H39.8968V7.484H43.6348C43.5508 5.062 42.6128 4.278 41.4648 4.278C40.5828 4.278 40.0368 4.502 39.3648 4.992L38.6788 4.18C39.4348 3.55 40.2888 3.186 41.4788 3.186ZM50.1789 7.792L53.1189 13H51.6069L49.3809 8.73L47.1269 13H45.6989L48.5969 7.862L45.9509 3.354H47.4629L49.4089 6.98L51.3689 3.354H52.7969L50.1789 7.792Z" fill="#23356B"/>
                      <path d="M2.66683 9.66675L10.7802 9.66675L7.0535 13.3934L8.00016 14.3334L13.3335 9.00008L8.00016 3.66675L7.06016 4.60675L10.7802 8.33341L2.66683 8.33341L2.66683 9.66675Z" fill="#23356B"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </>;
}

export default PostCreate;