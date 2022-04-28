import React , { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import './writeform.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const WriteFrom = () => {
  const [ editorState, setEditorState ] = useState(() => 
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState)
  }, [editorState]);
  return (
    <div className="wform">
      <div className="container">
        <form className="formbox">
          <div className="formboxgroup1">
            <select name="menuselect" id="menuselect">
              <option value="cate">카테고리</option>
              <option value="daily">DAILY</option>
              <option value="study">STUDY</option>
              <option value="TRAVEL">TRAVEL</option>
              <option value="HOBBY">HOBBY</option>
            </select>
            <input type="text" placeholder="제목을 입력하세요." className="writeInput" autoFocus={true} />
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus">파일첨부</i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <div className="formboxgroup2">
            <div style={{border:'1px solid #333', padding:'2px', minHeight:'400px'}}>
              <Editor
                editorState = { editorState }
                onEditorStateChange = { setEditorState }
              />
            </div>
          </div>
        </form>
        <div className="btnbox">
          <button className="writeSubmit">글 올리기</button>
        </div>
      </div>
    </div>
  )
}

export default WriteFrom