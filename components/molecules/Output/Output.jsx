import React, { useEffect, useRef } from 'react'
import Ruler from "@scena/react-ruler"

import Panel from '../Panel/Panel'

export default function Output({ 
  cssInputTest, 
  htmlTest,
  outCssTest,
  outHtmlTest
}) {
  
  return (
    <>
      <Panel css={cssInputTest} html={htmlTest} />
      <Panel css={outCssTest} html={outHtmlTest} />
    </>
  )
}
