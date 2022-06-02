const express = require('express')
const router = express.Router()
const fsPromises = require('fs').promises
module.exports = router

// Game url
router.get('/', async(req, res) => {
    res.render('game')
})

// If win or lose url
router.get('/win', async(req, res) => {
    res.send('yay you win!')
})