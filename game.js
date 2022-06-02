// read characters
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
    bindEventListeners(document.getElementsByTagName('td'))
}

function bindEventListeners(cells) {
    for (var i = 0; i < cells.length; i++) {
        // BIND YOUR EVENT LISTENERS HERE
        cells[i].addEventListener('click', hideCharacter)
        cells[i].addEventListener('dblclick', guessCharacter)
            // create an image tag
        cells[i].children[0].src = characters[i].image
    }
}