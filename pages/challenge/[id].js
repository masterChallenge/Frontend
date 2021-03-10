import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import ChallengeDescription from "@components/molecules/ChallengeDescription/ChallengeDescription";
import Input from "@components/molecules/Input/Input";
import ChallengeTips from "@components/molecules/ChallengeTips/ChallengeTips";

const Challenge = () => {
  const router = useRouter()
  const { id } = router.query

  const [dataChallenge, setDataChallenge] = useState({});

    useEffect(() => {
      fetch("/api/challenge/1")
        .then(response => response.json())
        .then(data => setDataChallenge(data))
    }, []);

    useEffect(() => console.log(dataChallenge), [])

  return (
    <>
      <ChallengeDescription {...dataChallenge} />
      <Input {...dataChallenge} />
      <ChallengeTips />
    </>
  )
}

export default Challenge;