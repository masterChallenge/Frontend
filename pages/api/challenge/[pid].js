export default async function handler(req, res) {
  const { pid } = req.query
  const { challenge_data } = await import(`../../../jsons/files/${pid}.js`)
  res.end(JSON.stringify(challenge_data))
}