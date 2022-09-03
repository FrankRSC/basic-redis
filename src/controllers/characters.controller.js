const {GET_REDIS_ASYNC,SET_REDIS_ASYNC} = require('../middleware/redis');
const axios = require('axios');

const characters = {};


characters.getCharacters = async (req, res) => {
  try {
    const reply = await GET_REDIS_ASYNC('characters')

    if (reply) return res.status(200).send(JSON.parse(reply));

    const response = await axios.get('https://rickandmortyapi.com/api/character')

    await SET_REDIS_ASYNC('characters', JSON.stringify(response.data))

    res.status(200).send(response.data)
    
  } catch (e) {
    console.log('Error: ', e)
    res.status(500).send('Something went wrong')
  }
}

characters.getOneCharacter = async (req, res) => {
  const { id } = req.params
  try {

    const reply = await GET_REDIS_ASYNC('character_'+id)

    if (reply) return res.status(200).send(JSON.parse(reply));

    const response = await axios.get('https://rickandmortyapi.com/api/character/' + id)

    await SET_REDIS_ASYNC('character_'+id, JSON.stringify(response.data))

    res.status(200).send(response.data)

  } catch (e) {
    console.log('Error: ', e)
    res.status(e.response.status).send({message: 'Something went wrong'})
  }
}

module.exports = characters;