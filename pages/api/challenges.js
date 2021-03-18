import { getAllChallenges } from '../../utils/challenges/getAll'

export default async function handler(req, res) {
  const challenges = getAllChallenges()
  res.end(JSON.stringify(challenges.data))
}