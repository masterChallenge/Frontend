import data_challenge from '../../../jsons/challenge'

export default function handler(req, res) {
  const { pid } = req.query
  res.end(`Post: ${JSON.stringify(data_challenge)}`)
}