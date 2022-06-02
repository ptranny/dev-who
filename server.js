const express = require('express')
const hbs = require('express-handlebars')
const fsPromises = require('fs').promises
const routes = require('./routes.js')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

module.exports = server

// load games
server.get('/', async (req, res) => {
  res.send('Click to start game')
})

server.use('/game', routes)
