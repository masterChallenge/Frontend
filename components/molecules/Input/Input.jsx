import React, { useRef, useState } from 'react'
import Editor from "@monaco-editor/react"
import Output from "../Output/Output";

export default function Input() {
  const editorRef = useRef(null);
  const [cssInputTest, setCssInputTest] = useState(`
  .challenge {
    background: #F89685;
    color: white;
  }`
  );
  
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }

  return (
    <div className="flex w-full h-72 bg-gray-700">
      <div className="bg-red-100 w-1/2">
        <Editor
          height='100%'
          width='100%'
          theme="vs-dark"
          defaultValue={cssInputTest}
          defaultLanguage="css"
          onMount={handleEditorDidMount}
          onChange={ value => { setCssInputTest(value) } }
        />
      </div>
      <Output cssInputTest={cssInputTest} />
    </div>
  )
}
