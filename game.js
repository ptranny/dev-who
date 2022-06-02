const heroData = require('./characters.json')

const arr = heroData.heros

function getRandomHero(arr){
let rand = Math.floor(Math.random*arr.length)
return rand
}

module.exports ={
  getRandomHero
}