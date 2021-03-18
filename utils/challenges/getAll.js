const getAllChallenges = async () => {
  const json = await import(`./challenges.json`)
  console.log(json)
  return json.default;
}

export { getAllChallenges }