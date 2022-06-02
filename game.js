// read characters
const characters = require('./characters.json')

// make JSON.parse('characters)

// generate the game board first
// pull out all the td cells
// put an image
// put an image in each cell
// attach onclick and ondoubleclick listeners

//  making handler / listen for onclick event of character guess

//  making handler /listen for onclick event of next hint

//  making handler / listen for single click event to toggle pictures

function start() {
  bindEventListeners(document.getElementsByClassName('')[0].children)
}

function bindEventListeners(dots) {
  for (var i = 0; i < dots.length; i++) {
      // BIND YOUR EVENT LISTENERS HERE
      dots[i].addEventListener('click', hideCharacter)
      dots[i].addEventListener('dblclick', guessCharacter)
  }
}

