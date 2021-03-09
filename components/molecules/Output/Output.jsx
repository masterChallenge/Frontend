import React from 'react'

export default function Output({ cssInputTest }) {

  const htmlTest = ` 
  <div class="main">
    <div class="challenge">
      <p>Hola</p>
    </div>
  </div>
  `;

  function createMarkup() {
    const htmlCSS = `<style> ${cssInputTest} </style> ${htmlTest}`

    return {__html: htmlCSS};
  }

  return (
    <>
    <div className="bg-gray-200 w-1/4"
      dangerouslySetInnerHTML={createMarkup()}>
    </div>
    <div className="bg-gray-500 w-1/4">
      <h2 className="text-gray-100">Expected output</h2>
    </div>
    </>
  )
}
