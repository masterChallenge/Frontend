import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import ChallengeDescription from "@components/molecules/ChallengeDescription/ChallengeDescription";
import Input from "@components/molecules/Input/Input";
import ChallengeTips from "@components/molecules/ChallengeTips/ChallengeTips";

const Challenge = (challengeData) => {
  
  return (
    <div className="w-full h-full ">
      <ChallengeDescription {...challengeData} />
      <Input {...challengeData} />
      <ChallengeTips />
    </div>
  )
}

Challenge.getInitialProps = async (ctx) => {
  const pid = parseInt(ctx.query.pid)
  const file = Number.isInteger(pid) && pid < 4 ? pid : 1
  const { challenge_data } = await import(`../../jsons/files/${file}.js`)
  return challenge_data
}

export default Challenge;