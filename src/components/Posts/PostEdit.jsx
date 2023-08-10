import Editor from './Editor';
import { useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp, doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db, storage } from '../../firebase';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ref, uploadBytesResumable } from 'firebase/storage';


const PostEdit = () => {
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
  const {type, postId} = useParams();

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
      const docRef = await addDoc(collection(db, dataType), {
        title: title,
        content: content,
        image: image,
        date: date,
        createdAt: serverTimestamp(),
        type: type,
      });
      navigate(`/${dataType}/${type}/${docRef.id}`);
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
 <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white shadow-md rounded px-6 py-6 sm:p-8">
            <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
            <div className="mb-6">
              <label htmlFor="title" className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                  />
            </div>
            <div className="mb-6">
              <label htmlFor="date" className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="image" className="block text-gray-700">Thumbnail</label>
              <input type="file" onChange={upload} className="mb-4" />
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
            <div className="mb-6">
              <label htmlFor="content" className="block text-gray-700">Content</label>
              <Editor content={content} setContent={setContent} />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-indigo-500 text-white px-6 py-2 mr-4 rounded"
                onClick={() => window.history.go(-1)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-6 py-2 rounded"
                onClick={save}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  </>;
}

export default PostEdit;