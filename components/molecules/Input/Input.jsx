import React, { useRef, useState } from 'react'
import Editor from "@monaco-editor/react"
import Output from "../Output/Output";
import { js_beautify, css_beautify, html_beautify } from 'js-beautify'

export default function Input( { challenge } ) {
  const editorRef = useRef(null);
  const [cssInputTest, setCssInputTest] = useState(
    css_beautify(challenge.editor_data[1].value.trim()));
  
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
      <Output 
        cssInputTest={cssInputTest}
        htmlTest={challenge.editor_data[0].value}
        outCssTest={challenge.output[1].value}
        outHtmlTest={challenge.output[0].value} />
    </div>
  )
}
