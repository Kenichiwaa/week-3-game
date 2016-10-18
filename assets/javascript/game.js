    var computerSelection;
    var guessesLeft = 9;
    var losses = 0;
    var letterGuesses = [];
    var wins = 0;
// document.getElementById('compSelec').innerHTML = ('<h3>Wins: ' + underScore + '</h3>');
// document.getElementById('wins').innerHTML = wins;
// document.getElementById('losses').innerHTML = losses;
// document.getElementById('guesses').innerHTML = guessesLeft;
// document.getElementById('userInput').innerHTML = letterGuesses;
    function startGame() {
        letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; // Ze List of le letters
        // do whatever you are doing to select a random word or letter
        computerSelection = letters[Math.floor(Math.random()*letters.length)]; // Computer selects a letter
        console.log(computerSelection);             
    };
        document.onkeyup = function() { // On user input of keyUp
            guessesLeft--; // reduce the number of guesses left by one
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); // get the user input as a lower case letter
            letterGuesses.push(userGuess); // add the guess to the an array of guessed letters
            document.getElementById('guesses').innerHTML = guessesLeft; // update html for guesses made and number of guesses
            document.getElementById('userInput').innerHTML = letterGuesses; // update html for guesses made and number of guesses
                // if there are still guesses left:
                if(guessesLeft>0){
                        // check for a match
                    if (userGuess === computerSelection){
                        wins++  // if matching, update win count and html 
                        alert("You win!");
                        document.getElementById('wins').innerHTML = wins;
                        document.getElementById('guesses').innerHTML = 9; // update guesses left
                        letterGuesses = [];
                        document.getElementById('userInput').innerHTML = letterGuesses; // update html for guesses made and number of guesses
                        startGame();
                    }
                }
                    if (guessesLeft === 0){ // if there are no guesses left
                    alert("Game Over!");
                    losses++ // update loss count and html
                    document.getElementById('losses').innerHTML = losses;
                    document.getElementById('guesses').innerHTML = 9; // update user guess
                    letterGuesses = [];
                    document.getElementById('userInput').innerHTML = letterGuesses; // update html for guesses made and number of guesses
                    guessesLeft = 9;
                    document.getElementById('guesses').innerHTML = guessesLeft; // update html for guesses made and number of guesses
                    startGame(); // reset the game
                    }
        };// End onKeyUp
// start game
startGame();