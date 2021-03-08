import { useRouter } from 'next/router'
import Navbar from "@components/molecules/Navbar/Navbar";
import ChallengeDescription from "@components/molecules/ChallengeDescription/ChallengeDescription";
import Input from "@components/molecules/Input/Input";

const Challenge = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Navbar />
      <ChallengeDescription />
      <Input />
    </>
  )
}

export default Challenge;