"use strict"

/* sound effects */
const memoryTileBeep = new Audio('sound-effects/memorytile-beep.mp3');
memoryTileBeep.volume = 0.2;
const applauseSound = new Audio('sound-effects/applause-sound.mp3');
applauseSound.volume = 0.5;

/* DOM variables */
/* ------------------------------------------------- */

const startGame = document.querySelector('.start-game');
const quitBtn = document.querySelector('.btn-quit');
const previousBtn = document.querySelector('.btn-previous');
const memoryBlockArea = document.querySelector(".memory-block-area");
const memoryBlock = document.getElementsByClassName("memory-block");
const highScoreEL = document.querySelector('.high-score-number');
const currentScoreEL = document.querySelector('.current-score-number');
const messageBox = document.querySelector('.message-text');
const highScoreMessage = document.querySelector('.high-score-text');
const highScoreModal = document.getElementById('high-score-modal')
const highScoreNumberModal = document.querySelector('.high-score-number-modal')
const highScoreModalGif = document.querySelector('.high-score-applause-gif');
const gridCol = document.getElementsByClassName('grid-col');


const easyDifficulty = document.getElementById('easy');
const mediumDifficulty = document.getElementById('medium');
const hardDifficulty = document.getElementById('hard');
const customDifficulty = document.getElementById('custom');
const difficultySelectMenu = document.getElementById('difficulty-select-menu');
const customDifficultyMenu = document.getElementById('custom-difficulty');
const gameArea = document.getElementById('game-area');
const amountCustomDifficulty = document.getElementById('amount-custom-difficulty');
const nextCustomDifficulty = document.querySelector('.custom-difficulty-next');
const messageBoxCustom = document.querySelector('.message-custom-tiles');


let numberOfTiles = 6;
let generatedNumbersSequence = [];
let playerNumbersSequence = [];
let memoryTiles = [];
let currentScore = 0;
let highScore = 0;
let playerTurn = false;
let computerTurn = false;
let newHighScore = false;
let gameAreaActive = false;



/* Difficulty select */
/* ------------------------------------------------- */

/* link the selected difficulty with the appropriate amount of memory tiles*/

easyDifficulty.addEventListener('click', function () {
    numberOfTiles = 4;
    prepareGame();
    toGameArea();
})

mediumDifficulty.addEventListener('click', function () {
    numberOfTiles = 9;
    prepareGame();
    toGameArea();
})

hardDifficulty.addEventListener('click', function () {
    numberOfTiles = 15;
    prepareGame();
    toGameArea();
})

customDifficulty.addEventListener('click', function () {
    toCustomDifficulty();
})

/* function that prepares the game by creating memory tiles in the html document, applies selectors to them,  creates the eventlistener event for when the players clicks the buttons and then moves to the game area */

function prepareGame() {
    createMemoryTilesHtml();
    createMemoryTilesSelector();
    createPlayerInputArray();
    styleColumnsGameArea();

    playerTurn = false;
    computerTurn = true;

    gameAreaActive = true;
}

/* function that navigates to the game area */

function toGameArea() {
    gameArea.classList.toggle('active-window');
    difficultySelectMenu.classList.toggle('active-window');
}

/* function that navigates between the  difficulty selection menu and custom difficulty  */
function toCustomDifficulty() {
    difficultySelectMenu.classList.toggle('active-window');
    customDifficultyMenu.classList.toggle('active-window');
}

/* return from custom difficulty to custom difficulty menu*/

previousBtn.addEventListener('click', function () {
    messageBoxCustom.innerHTML = '';
    toCustomDifficulty();
})

/* submit the amount of custom tiles the player wants to play with */

nextCustomDifficulty.addEventListener('click', function () {
    getCustomDifficultyInput()
})

/* validates the input and saves the player input to the numberOfTiles variable */
function getCustomDifficultyInput() {

    if (amountCustomDifficulty.value < 2) {
        messageBoxCustom.innerHTML = 'Please select more tiles'

    } if (100 < amountCustomDifficulty.value) {
        messageBoxCustom.innerHTML = 'Please select less tiles'

    } if (2 <= amountCustomDifficulty.value && amountCustomDifficulty.value <= 100) {

        numberOfTiles = amountCustomDifficulty.value;
        messageBoxCustom.innerHTML = '';
        prepareGame()

        /* moves to the game area */
        customDifficultyMenu.classList.toggle('active-window');
        gameArea.classList.toggle('active-window');
    }
}


/* game area */
/* ------------------------------------------------- */

/* create a div in the html document with the memory tile properties. This is done an equal amount of times based on the requested amount of memory tiles by the player or selected difficulty setting  */

function createMemoryTilesHtml() {

    for (let i = 1; i <= numberOfTiles; ++i) {


        const createMemoryTile = document.createElement('div');
        memoryBlockArea.appendChild(createMemoryTile);
        if (numberOfTiles <= 21) {

            createMemoryTile.classList.add('memory-block', 'memory-block-height--10', `memory-block--${i}`);

        } if (numberOfTiles <= 70 && 21 < numberOfTiles) {

            createMemoryTile.classList.add('memory-block', 'memory-block-height--5', `memory-block--${i}`);

        } if (numberOfTiles <= 100 && 70 < numberOfTiles) {

            createMemoryTile.classList.add('memory-block', 'memory-block-height--3', `memory-block--${i}`);

        }


        /*
        const createMemoryTile = document.createElement('div');
        memoryBlockArea.appendChild(createMemoryTile);
        createMemoryTile.classList.add('memory-block', `memory-block--${i}`);
        */
    }
}

/* loop that creates memory tiles based on the selected amount by the player */
function createMemoryTilesSelector() {

    for (let i = 1; i <= numberOfTiles; ++i) {
        memoryTiles[i] = document.querySelector(`.memory-block--${i}`);
    }
}

/* function that toggles the active memory tile */
function toggleMemoryTile(t) {
    memoryTiles[t].classList.toggle('active');
}

/* press the start button to start the game*/
startGame.addEventListener('click', function (number) {
    startGameSequence();
});

/* start the game by pressing the spacebar*/
document.body.onkeyup = function (e) {
    if (e.keyCode == 32 && gameAreaActive === true) {
        startGameSequence();
    }
}


function startGameSequence() {

    if (playerTurn === false && computerTurn === true) {

        /* generate a random rumber which will be used to select a random memory tile*/
        const generatedNumber = Math.floor(Math.random() * numberOfTiles) + 1;
        generatedNumbersSequence.push(generatedNumber);

        console.log(`generated number is ${generatedNumber}`);

        /* disable the start buttons while the sequence is running*/
        computerTurn = false;


        /* loop that starts the play sequence */
        for (let i = 0; i <= generatedNumbersSequence.length; i++) {


            /* function that starts the play sequence with a timer*/
            setTimeout(function () {

                messageBox.innerHTML = '';

                for (let t = 1; t <= numberOfTiles; ++t) {

                    if (generatedNumbersSequence[i] === t) {
                        toggleMemoryTile(t)
                        memoryTileBeep.play();
                        setTimeout(function () {
                            toggleMemoryTile(t);
                        }, 700);
                    }
                };


                /* code that sets the time in ms before the next button is shown */
            }, 1000 * i);

            /* activate the buttons for the player after the computer has shown the order sequence*/
            if (i === generatedNumbersSequence.length) {

                setTimeout(function () {
                    playerTurn = true;

                    /* message the player it's their turn */
                    messageBox.innerHTML = 'Repeat the sequence';

                    console.log(`i is ${i}`);
                    console.log(`player's turn is ${playerTurn}`);
                    console.log(`computer's turn is ${computerTurn}`);

                }, 1000 * i);
            }


            console.log(`generated number sequence is ${generatedNumbersSequence}`);
        }

    }
};


/* function that to creates multiple events (depending on the selected amount of tiles) for when the player clicks the memory tile buttons to repeat the asked sequence*/

function createPlayerInputArray() {

    for (let t = 1; t <= numberOfTiles; ++t) {
        memoryTiles[t].addEventListener('click', function () {
            if (playerTurn === true) {
                playerNumbersSequence.push(t);
                console.log(` player input is ${playerNumbersSequence} `);
                winCheck();

                /* Highlights the memorytile after the player has pressed it*/
                toggleMemoryTile(t)
                memoryTileBeep.play();
                setTimeout(function () {
                    toggleMemoryTile(t)
                }, 300);
            }
        })
    }
};



/* function to check if the player has succesfully input the correct sequence*/
function winCheck() {

    /* check if enough buttons have been pressed by the player to match the amount the computer has input */
    if (playerNumbersSequence.length === generatedNumbersSequence.length) {

        /* prepare for next round */
        playerTurn = false;
        computerTurn = true;

        /* compare arrays */
        if (JSON.stringify(playerNumbersSequence) === JSON.stringify(generatedNumbersSequence)) {

            /* message player they are correct */
            messageBox.innerHTML = 'You are correct!';

            /* update score */
            currentScore++
            updateCurrentScore();

            /* check high score & update it if appropriate*/
            if (currentScore > highScore) {
                highScore = currentScore;
                updateHighScore();
                newHighScore = true;

                /* message the player they got a new high score */
                highScoreMessage.innerHTML = 'New highscore!';
            }

            /* reset playerInput */
            playerNumbersSequence = [];


        } else {

            /* message player they are incorrect */
            messageBox.innerHTML = 'You are incorrect... try again';

            /* reset high score text */
            highScoreMessage.innerHTML = '';

            if (newHighScore === true && 1 < highScore) {
                /* show high score popup modal */
                ShowHideHighScoreModal();
                highScoreNumberModal.innerHTML = highScore;

                /* select random gif*/

                const randomGif = Math.floor(Math.random() * 4) + 1;
                console.log(randomGif);


                for (let gif = 1; gif <= 4; gif++) {

                    if (randomGif === gif) {
                        highScoreModalGif.src = `gifs/applause-${gif}.gif`
                    }


                };

                /* play applause sound effect */
                applauseSound.play();
                applauseSound.loop = true;

                newHighScore = false;
            }

            /* update score */
            currentScore = 0;
            updateCurrentScore();


            /* reset game*/
            playerNumbersSequence = [];
            generatedNumbersSequence = [];

        }
    }
};


/* functions that updates the scores in the html document*/
/*  update the current score  */

function updateCurrentScore() {
    currentScoreEL.innerHTML = currentScore;
}

/*  update the high score  */

function updateHighScore() {
    highScoreEL.innerHTML = highScore;
}

/* high score modal */
/* hide the modal once the player clicked it*/

highScoreModal.addEventListener('click', function () {
    ShowHideHighScoreModal();

})

function ShowHideHighScoreModal() {
    highScoreModal.classList.toggle('active-window');
    applauseSound.pause();
    applauseSound.currentTime = 0;
}

/* style the columns so that all the memory tiles fit on the screen */

function styleColumnsGameArea() {

    /* styling for 6 tiles or less */
    if (numberOfTiles <= 6) {

        memoryBlockArea.className = 'memory-block-area margin--30 gap--3 grid-col';
        gridCol[0].style.gridTemplateColumns = `repeat(2, 1fr)`;

    }

    /* styling for tiles between the numbers 6 and 21 */
    for (let i = 2; i < 7; i++) {

        if (numberOfTiles <= i * 3 + 3 && i * 3 < numberOfTiles) {

            memoryBlockArea.className = `memory-block-area margin--${40 - i * 5} gap--3 grid-col`;
            gridCol[0].style.gridTemplateColumns = `repeat(${i + 1}, 1fr)`;
        }
    }

    /* styling for tiles between the numbers 22 and 25 */
    if (numberOfTiles <= 25 && 21 < numberOfTiles) {

        memoryBlockArea.className = 'memory-block-area margin--30 gap--2 grid-col';
        gridCol[0].style.gridTemplateColumns = `repeat(5, 1fr)`;

    }

    /* styling for tiles between the numbers 26 and 70*/
    for (let i = 1; i < 10; i++) {

        if (numberOfTiles <= 25 + i * 5 && 20 + i * 5 < numberOfTiles) {

            memoryBlockArea.className = `memory-block-area gap--2 grid-col`;
            gridCol[0].style.gridTemplateColumns = `repeat(${i + 5}, 1fr)`;


            /* select margin that's appriopriate for the number of tiles*/
            if (numberOfTiles <= 35 && 25 < numberOfTiles) {
                memoryBlockArea.classList.add("margin--30");
            } if (numberOfTiles <= 50 && 35 < numberOfTiles) {
                memoryBlockArea.classList.add("margin--20");
            } if (numberOfTiles <= 60 && 50 < numberOfTiles) {
                memoryBlockArea.classList.add("margin--15");
            } if (numberOfTiles <= 70 && 60 < numberOfTiles) {
                memoryBlockArea.classList.add("margin--10");
            }
        }
    }

    /* styling for tiles between the numbers 70 and 100*/
    for (let i = 1; i < 4; i++) {

        if (numberOfTiles <= 70 + i * 10 && 60 + i * 10 < numberOfTiles) {

            memoryBlockArea.className = `memory-block-area margin--${40 - i * 10} gap--1 grid-col`;
            gridCol[0].style.gridTemplateColumns = `repeat(${5 + i * 5}, 1fr)`;

        }
    }
};



/* how to style css properties of a class
        document.getElementsByClassName('scores-box')[0].style.height = "5rem";
        */





/* quit the game */
/* ------------------------------------------------- */

/* quit te game, reset all setting to default and return to the difficult select screen */

quitBtn.addEventListener('click', function () {
    removeMemoryTilesHtml();

    currentScore = 0;
    updateCurrentScore();

    highScore = 0;
    updateHighScore();

    generatedNumbersSequence = [];
    playerNumbersSequence = [];

    highScoreMessage.innerHTML = '';
    messageBox.innerHTML = 'Press start or spacebar to begin the game';

    gameAreaActive = false;

    toGameArea();
})

/* remove the generated memory tiles in the html document to reset the game */

function removeMemoryTilesHtml() {

    for (let i = 1; i <= numberOfTiles; ++i) {
        memoryBlockArea.removeChild(memoryBlockArea.lastElementChild);
    }
}




