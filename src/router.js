const express = require('express');
const registerUser = require('./controllers/users/register');
const loginUser = require('./controllers/users/login');

const router = express()

router.post('/user', registerUser)
router.post('/login', loginUser)

module.exports = router