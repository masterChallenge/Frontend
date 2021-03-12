import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ChallengeDescription from "@components/molecules/ChallengeDescription/ChallengeDescription";
import Input from "@components/molecules/Input/Input";
import ChallengeTips from "@components/molecules/ChallengeTips/ChallengeTips";
import Button from "@components/atoms/Button/Button";

const Challenge = (challengeData) => {
  return (
    <main className="grid grid-rows-challenge h-screen w-full">
      <ChallengeDescription {...challengeData} />
      <Input {...challengeData} />
      <div className="grid grid-cols-2">
        <ChallengeTips />
        <div className="bg-secondary-lighter w-full flex items-center justify-center">
          <Button color="primary">Submit</Button>
        </div>
      </div>
    </main>
  );
};

Challenge.getInitialProps = async (ctx) => {
  const pid = parseInt(ctx.query.pid);
  const file = Number.isInteger(pid) && pid < 4 ? pid : 1;
  const { challenge_data } = await import(`../../jsons/files/${file}.js`);
  return challenge_data;
};

export default Challenge;
