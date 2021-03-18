

const getAllChallenges = () => {
  const fs = require('fs');
  const dir = './jsons/files';
  let challenges = {}
  challenges['data'] = []
  
  fs.readdirSync(dir).forEach((file) => {
    let contents = fs.readFileSync(`${dir}/${file}`, 'utf8')

    const dataFromFile = JSON.parse(contents)

    challenges.data.push({
      id: dataFromFile.id,
      name: dataFromFile.name || 'challenge',
      difficulty: dataFromFile.difficulty,
      image: dataFromFile.challenge.image,
      attempts: 0,
      estatus: 'incomplete'
    })
    
  })

  return challenges;
}

export { getAllChallenges }