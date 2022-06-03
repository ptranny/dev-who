// get characters

//import random character func
//  global character random character
// read characters
// make JSON.parse('characters)

// generate the game board first
// pull out all the td cells
// put an image
// put an image in each cell
// attach onclick and ondoubleclick listeners

//  making handler / listen for onclick event of character guess

//create replay button

//  making handler / listen for single click event to toggle pictures
//  making handler /listen for onclick event of next hint

const characters = require('./characters.json')

const getRandomHero = require(getRandomHero)

const RANDOMHERO = getRandomHero(characters['characters'])

function hideCharacter(e) {
  //return element clicked
  //find the class to change using id from target
  //toggle is hidden class

  let elementId = e.target.id

  let clickedCell = document.getElementById(elementId)

  clickedCell.classList.toggle('isHidden')
}

let HINTINDEX = 0
function nextHint() {
  //increment hint index
  //create var called current hint
  //update innerhtml with current hint

  HINTINDEX++
  const hintArray = ['age', 'weapon']
  let currentHint = `Hint: The ${hintArray[HINTINDEX]} is ${
    RANDOMHERO[hintArray[HINTINDEX]]
  }`
  document.getElementById('hint').innerHTML = currentHint
}

function doubleClick(e) {
  //get id of cell clicked
  //if id  == same td of random character

  //then rediret to result partial
  //change innerHTML of id=result

  if (e.target.id == RANDOMHERO.id) {
  }
}

function start() {
  bindEventListeners(document.getElementsByTagNames('td'))
}

function bindEventListeners(cells) {
  for (var i = 0; i < cells.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    cells[i].addEventListener('click', hideCharacter)
    cells[i].addEventListener('dblclick', guessCharacter)
    // create an image tag
    cells[i].children[0].src = characters[i + 1].image
  }
}

start()
