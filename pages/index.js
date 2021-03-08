import ChallengeDescription from "@components/molecules/ChallengeDescription/ChallengeDescription";
import ChallengeTips from "@components/molecules/ChallengeTips/ChallengeTips";
import Navbar from "@components/molecules/Navbar/Navbar";

const Landing = () => {
  return (
    <div className="flex justify-center flex-wrap">
      <Navbar />
      <h1 className="text-red-600">Master Challenge - Landing Page</h1>
      <ChallengeDescription />
      <ChallengeTips />
    </div>
  );
};

export default Landing;
