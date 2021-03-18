export default async function handler(req, res) {
  const { pid } = req.query
  const json = await import(`../../../jsons/files/${pid}.json`)
  res.end(JSON.stringify(json.default))
}