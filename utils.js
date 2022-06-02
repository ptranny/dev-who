const arr = heroData.heros

function getRandomHero(arr){
let rand = Math.floor(Math.random()*arr.length)
return arr[rand]
}

module.exports =
  getRandomHero
