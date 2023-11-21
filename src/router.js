const express = require('express');

const router = express()

router.get('/', (req, res) => res.send('Seja Bem Vindo!') )

module.exports = router