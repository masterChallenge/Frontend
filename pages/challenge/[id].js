import { useRouter } from 'next/router'

const Challenge = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Challenge: {id}</p>
}

export default Challenge;