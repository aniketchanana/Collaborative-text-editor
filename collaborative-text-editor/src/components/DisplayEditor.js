import React, { useState } from 'react';
import './styles/DisplayEditor.css';
import {socket} from '../subscribetoserver';

function DisplayEditor(props) {
    const [editorText,changeEditorText] = useState('');
    const [lock,changeLock] = useState(false);
    function handelOnFocus() {
        socket.emit('focus');
    }
    function handelOnBlur() {
        socket.emit('blur');
    }
    function handelChange(event) {
        changeEditorText(event.target.value);
        socket.emit('editorvaluechange',event.target.value);
    }
    socket.on('editorvaluechange',(value)=>{
        changeEditorText(value);
    })
    socket.on('unlockEditor',() => {
        changeLock(false);
    })
    socket.on('lockEditor',() => {
        changeLock(true);
    })
    return (
    <div className='editorContainer'>
        <textarea 
            value={editorText}
            cols="100" 
            rows="30"
            disabled={lock}
            onInput={handelChange}
            onFocus={handelOnFocus}
            onBlur={handelOnBlur}
            placeholder="write your text here..."
        >

        </textarea>
        {/* <ReactQuill
        readOnly={lock}
        theme="snow"
        modules={modules}
        formats={formats}
        value={editorHtml}
        onChange={handelChange}
        onFocus={handelOnFocus}
        onBlur={handelOnBlur}
        placeholder="write your text here..."
        /> */}
    </div>
    );
}


// var modules = {
//     toolbar: [
//       [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
//       [{size: []}],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{'list': 'ordered'}, {'list': 'bullet'}, 
//        {'indent': '-1'}, {'indent': '+1'}],
//       ['link', 'image', 'video'],
//       ['clean']
//     ],
//     clipboard: {
//       matchVisual: false,
//     }
//   }
//   var formats = [
//     'header', 'font', 'size',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image', 'video'
//   ]
export default DisplayEditor;