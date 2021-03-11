import React from 'react'

export default function Output({ 
  cssInputTest, 
  htmlTest,
  outCssTest,
  outHtmlTest
}) {

  function createMarkup() {
    const htmlCSS = `<style> ${cssInputTest} </style> ${htmlTest}`

    return {__html: htmlCSS};
  }

  function finalMarkup() {
    const htmlCSS = `<style> ${outCssTest} </style> ${outHtmlTest}`

    return {__html: htmlCSS};
  }

  return (
    <>
    <div className="bg-gray-200 w-1/4"
      dangerouslySetInnerHTML={createMarkup()}>
    </div>
    <div className="bg-gray-200 w-1/4"
      dangerouslySetInnerHTML={finalMarkup()}>
    </div>
    </>
  )
}
