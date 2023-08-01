import { storage } from '../../firebase';
import { ref, uploadBytes } from "firebase/storage";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = ({ content, setContent }) => {
  const upload = (e) => {
    let file = e.target.files[0];
    let name = `${Date.now()}.${file.type.split('/')[1]}`;
    const storageRef = ref(storage, name)
    uploadBytes(storageRef, file).then(() => {
      setContent(content + `<img src="https://firebasestorage.googleapis.com/v0/b/altexmn.appspot.com/o/${name}?alt=media" />`)
    });
  }

  return (
    <div className="text-black">
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onChange={(event, editor) => {
          setContent(editor.getData())
        }}
      />

      <div className="custom-file mt-2">
        <input type="file" className="custom-file-input" id="addiamge" onChange={upload} />
        <label className="custom-file-label border cursor-pointer bg-[#ddd] p-[6px] " htmlFor="addiamge" data-browse="Зураг сонгох">Зураг оруулах</label>
      </div>
    </div>
  );
}

export default Editor;