// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const resetButton = document.getElementById('reset-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
    console.log('the user clicked the shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
    console.log('the user clicked the tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
    console.log('the user clicked the boulder')
});

resetButton.addEventListener('click', () => {
    console.log('User clicked Reset');
    shedContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    shedButton.disabled = false;
    treeButton.disabled = false;
    boulderButton.disabled = false;
});

function handleGuess(correctSpot, userGuess) {
    // reset the styles
    // then increment the guesses
    // 
    // then grab the appropriate container element for the correct guess from the DOM
    shedContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    treeContainer.classList.remove('face');

    if (userGuess === correctSpot) {
        console.log('You win!');
        correctGuesses++;
        totalGuesses++;
        totalEl.textContent = totalGuesses;
        winsEl.textContent = correctGuesses;
    }
    else {
        console.log('You lose!');
        incorrectGuesses++;
        totalGuesses++;
        totalEl.textContent = totalGuesses;
        lossesEl.textContent = incorrectGuesses;
    }

    const correctEl = document.getElementById(correctSpot + '-container');
    correctEl.classList.add('face');
    shedButton.disabled = true;
    treeButton.disabled = true;
    boulderButton.disabled = true;
    // then add the face class to that element so that the face shows up
    // then if the user guess is correct, increment the correct guesses
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}

