import { getAllChallenges } from '../../utils/challenges/getAll'

export default async function handler(req, res) {
  const challenges = await getAllChallenges()
  //res.end(JSON.stringify(challenges))
  res.status(200).json(challenges)
}