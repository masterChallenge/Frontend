import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import ChallengeDescription from "@components/molecules/ChallengeDescription/ChallengeDescription";
import Input from "@components/molecules/Input/Input";
import ChallengeTips from "@components/molecules/ChallengeTips/ChallengeTips";

const Challenge = ({challengeData}) => {
  
  return (
    <>
      <ChallengeDescription {...challengeData} />
      <Input {...challengeData} />
      <ChallengeTips />
    </>
  )
}

Challenge.getInitialProps = async (ctx) => {

  let protocol = 's:'
  let host = ctx.req ? ctx.req.headers.host : window.location.hostname
  if (host.indexOf('localhost') > -1) {
    protocol = ':'
  }
  
  const domain = ctx.req.headers.host
  const res = await fetch(`http${protocol}//${domain}/api/challenge/${ctx.query.pid}`)
  const json = await res.json()

  return { challengeData : json }
}

export default Challenge;