const express = require('express');
const registerUser = require('./controllers/users/register');

const router = express()

router.post('/user', registerUser)

module.exports = router