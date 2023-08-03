import Editor from './Editor';
import { useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp, doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db, storage } from '../../firebase';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ref, uploadBytesResumable } from 'firebase/storage';


const PostEdit = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState((new Date()).toJSON().slice(0, 10));
  const [image, setImage] = useState("");
  const [percent, setPercent] = useState(0);

  const navigate = useNavigate();
  const {type, postId} = useParams();

  useEffect(() => {
    if (postId) {
      const docRef = doc(db, "posts", postId);
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
  }, [postId]);

  const save = async () => {
    if (postId) {
      await updateDoc(doc(db, "posts", postId), {
        title: title,
        content: content,
        image: image,
        date: date,
        updatedAt: serverTimestamp(),
        type: type,
      });
      navigate(`/${type}/${postId}`);
    } else {
      const docRef = await addDoc(collection(db, "posts"), {
        title: title,
        content: content,
        image: image,
        date: date,
        createdAt: serverTimestamp(),
        type: type,
      });
      navigate(`/posts/${type}/${docRef.id}`);
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

  return <>
 <div className='text-[#000] min-h-screen bg-[#f5f6f8] leading-7'>
      <div className={`flex h-[70px] bg-[#006cff] items-center text-[#fff] font-sans text-[25px]  `}>
          </div>
      <div className='w-screen flex h-max '>
      <div className="w-[300px] bg-[#fff] text-[14px] text-[#6e768e] h-screen p-4 px-8">
            <Link className="flex mt-6" to="/admin">Dashboard</Link>
            <br />
            <a className={`flex ${type === 'news' ? 'text-[#006cff]' : ''}`} href="/admin/posts/news">Manage News</a>
            <br />

            <a className={`flex ${type === 'corp-news' ? 'text-[#006cff]' : ''}`} href="/admin/posts/news">Manage News</a>
            <br />

            <a className={`flex ${type === 'social-resp' ? 'text-[#006cff]' : ''}`} href="/admin/posts/news">Manage News</a>
            <br />
     </div>
        <div className='w-full p-10'>
        <div className='grid grid-cols-2 gap-4 '>
          <div>
            <h2 className='text-2xl font-bold mb-2'>Title</h2>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              className='border border-gray-300 rounded px-4 py-2 w-full'
            />
          </div>
          <div>
            <h2 className='text-2xl font-bold mb-2'>Date</h2>
            <input
              type='date'
              value={date}
              onChange={(e) => setDate(e.currentTarget.value)}
              className='border border-gray-300 rounded px-4 py-2 w-full'
            />
          </div>
        </div>
        <div className='mt-8'>
          <h2 className='text-2xl font-bold mb-2'>Thumbnail</h2>
          <input type='file' onChange={upload} className='mb-4' />
          {percent > 0 && percent < 100 && (
            <div className='w-full h-4 bg-gray-200 rounded'>
              <div
                className={`w-${percent} bg-green-400 h-full rounded`}
              ></div>
            </div>
          )}
          {image && (
            <img className='w-[1000px] mt-4 mb-[24px]' src={image} alt='post_image' />
          )}
        </div>
        <div className='mt-8'>
          <h2 className='text-2xl font-bold mb-2'>Content</h2>
          <div>
            <Editor content={content} setContent={setContent} />
          </div>
        </div>
        <div className='flex justify-between'>
          <button
            className='flex items-center bg-[#006cff] text-white rounded-xl p-2 h-full mt-10 px-7 border w-max '
            onClick={() => window.history.go(-1)}
          >
            
        <div className='mr-1'>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXxlink="http://www.w3.org/1999/xlink" width="10px" height="10px" viewBox="0 0 10 20" version="1.1">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-345.000000, -6679.000000)" fill="#fff">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M299.633777,6519.29231 L299.633777,6519.29231 C299.228878,6518.90256 298.573377,6518.90256 298.169513,6519.29231 L289.606572,6527.55587 C288.797809,6528.33636 288.797809,6529.60253 289.606572,6530.38301 L298.231646,6538.70754 C298.632403,6539.09329 299.27962,6539.09828 299.685554,6538.71753 L299.685554,6538.71753 C300.100809,6538.32879 300.104951,6537.68821 299.696945,6537.29347 L291.802968,6529.67648 C291.398069,6529.28574 291.398069,6528.65315 291.802968,6528.26241 L299.633777,6520.70538 C300.038676,6520.31563 300.038676,6519.68305 299.633777,6519.29231" id="arrow_left-[#335]">
                        </path>
                    </g>
                </g>
            </g>
        </svg>
        </div>
          <div>Back</div>
          </button>
          <button
            className='flex items-center bg-[#84cc16] text-white px-9 rounded-xl h-full mt-10 p-2 border w-max '
            onClick={save}
          >
            Save
          </button>
        </div>
        </div>
      </div>
    </div>
  </>;
}

export default PostEdit;