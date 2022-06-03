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

  // Create a generator object to keep track of which attribute we're currently displaying
  function* hintsGenerator() {
    let attributes = Object.entries(randomHero.attributes)
    for (let i = 0; i < attributes.length; i++) {
      yield attributes[i]
    }
  }

  let hints = hintsGenerator()

  // Environment variables to pass to helper/handler functions
  const env = {
    cells,
    characters,
    randomHero,
    hints,
    hintDisplay,
    nextHintButton,
  }

  // Set up the game
  // Populate game grid with images and add event listeners
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', hideCharacter)
    cells[i].addEventListener('dblclick', guessCharacter(env))
    cells[i].src = characters[i].image
  }

  // Add event listener for next hint
  nextHintButton.addEventListener('click', nextHint(env))
}

// HELPER FUNCTIONS

function getRandomHero(arr) {
  let rand = Math.floor(Math.random() * arr.length)
  return arr[rand]
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
