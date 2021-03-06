import React, { useRef, useState } from 'react'
import Editor from "@monaco-editor/react"

export default function Input() {
  const editorRef = useRef(null);
  const [cssInputTest, setCssInputTest] = useState(`
  body {
    background: #eee;
    color: #888;  
  }
    
  .clase2 {
    background: #FF00FF;
    color: #888;
  }`
  );
  
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }

  return (
    <div>
      <Editor
        height='250px'
        width='600px'
        theme="vs-dark"
        defaultValue={cssInputTest}
        defaultLanguage="css"
        onMount={handleEditorDidMount}
        onChange={ value => { setCssInputTest(value) } }
      />
      <button type="button">Test</button>
    </div>
  )
}
