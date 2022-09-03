//importa la funcion Router de express
const { Router } = require('express');

//Guarda el objeto que devuelve router
const router = Router();

const { getCharacters, getOneCharacter } = require('../controllers/characters.controller.js');

router.route('/')
  .get(getCharacters)

router.route('/:id')
  .get(getOneCharacter)

module.exports = router;