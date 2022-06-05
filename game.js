const dataPath = '/characters.json'

main(dataPath)

async function main(dataPath) {
  // Get hero data from database
  let response = await fetch(dataPath)
  let data = await response.json()
  let characters = data.characters

  // Randomly select a character
  const randomHero = getRandomHero(characters)

  // Get elements
  let cells = document.querySelectorAll('td img')
  let nextHintButton = document.getElementById('nextHint')
  let hintDisplay = document.getElementById('hint')

  // Get iterator for attributes
  let hints = hintsGenerator(randomHero)

  // Environment variables to pass to helper/handler functions
  const env = {
    cells, // HTMLcollection of game cell nodes
    characters, // Array of character objects
    randomHero, // Character object
    hintDisplay, // node object for hint element
    nextHintButton, // node object for hint button element
    hints, // Iterator for attributes
  }

  // Set up the game
  // Populate game grid with images and add event listeners
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', hideCharacter)
    cells[i].addEventListener('dblclick', guessCharacter(env))
    cells[i].src = characters[i].image
  }

  // Add event listener for next hint button
  nextHintButton.addEventListener('click', nextHint(env))
}

// HELPER FUNCTIONS

function getRandomHero(arr) {
  let rand = Math.floor(Math.random() * arr.length)
  return arr[rand]
}

// We are using a generator function as a state machine so that we don't have to declare a global variable
// to keep track of where in the attributes array we are
function* hintsGenerator(character) {
  let attributes = Object.entries(character.attributes)
  for (let attribute of attributes) {
    yield attribute
  }
}

// EVENT HANDLERS

function hideCharacter(e) {
  let clickedCell = document.getElementById(e.target.id)
  clickedCell.classList.toggle('isHidden')
}

function nextHint(env) {
  let { hints, hintDisplay, nextHintButton } = env
  function eventHandler(e) {
    // Get the next attribute
    let currentAttribute = hints.next()
    // If this is the last attribute make the nextHintButton inert
    if (currentAttribute.done) {
      nextHintButton.replaceWith(nextHintButton.cloneNode(true))
      // Display the attribute
    } else {
      hintDisplay.innerHTML = `Hint: ${currentAttribute.value[0]} is ${currentAttribute.value[1]}`
    }
  }
  return eventHandler
}

function guessCharacter(env) {
  let { characters, randomHero } = env
  function eventHandler(e) {
    if (characters[e.target.id - 1] === randomHero) {
      alert('Congrats you won')
    } else {
      alert('Ohh noo you lost! Better luck next time :)')
    }
  }
  return eventHandler
}
