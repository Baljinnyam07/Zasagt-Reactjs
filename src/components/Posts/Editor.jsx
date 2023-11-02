import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, ContentState, convertFromHTML, CompositeDecorator } from "draft-js";
import { Editor, AtomicBlockUtils } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import draftToHtml from "draftjs-to-html";


const MyEditor = ({ content, setContent }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (content) {
      const blocksFromHTML = convertFromHTML(content);
      const contentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      setEditorState(EditorState.createWithContent(contentState, decorator));
    }
  }, [content]);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    const currentContent = newEditorState.getCurrentContent();
    const htmlContent = draftToHtml(convertToRaw(currentContent));
    setContent(htmlContent);
  };

  const upload = (e) => {
    let file = e.target.files[0];
    let name = `${Date.now()}.${file.type.split("/")[1]}`;
    const storageRef = ref(storage, name);
    uploadBytes(storageRef, file).then(() => {
      const imageSrc = `https://firebasestorage.googleapis.com/v0/b/zasagt-khaann.appspot.com/o/${name}?alt=media`;
      const currentContent = editorState.getCurrentContent();
  
      const contentWithImage = currentContent.createEntity("IMAGE", "IMMUTABLE", { src: imageSrc });
      const entityKey = contentWithImage.getLastCreatedEntityKey();
      const newEditorState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, " ");
      setEditorState(newEditorState);
    });
  };
  

  const decorator = new CompositeDecorator([
    {
      strategy: findImageEntities,
      component: Image,
    },
  ]);

  return (
    <div className="text-black bg-[#ffffff]">
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          image: {
            uploadCallback: upload,
            alt: { present: true, mandatory: false },
          },
        }}
      />

      <div className="custom-file mt-2">
        <input
          type="file"
          className="custom-file-input"
          id="addImage"
          onChange={upload}
          placeholder=""
        />
      </div>
    </div>
  );
};

export default MyEditor;

function findImageEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return entityKey !== null && contentState.getEntity(entityKey).getType() === "IMAGE";
    },
    callback
  );
}

const Image = (props) => {
  const entity = props.contentState.getEntity(props.entityKey);
  const { src } = entity.getData();
  return <img src={src} alt="Uploaded" style={{ width: "100%" }} />;
};
