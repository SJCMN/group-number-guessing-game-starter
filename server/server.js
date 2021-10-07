const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const guessesArray = require("./modules/guesses");
const getRandom = require("./modules/random");
let resultsArray = [];
let roundCounter = 0;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static("server/public"));

// ****** GET & POST Routes go here *********

//GET for when the submit button is clicked
app.get("/", (req, res) => {
  console.log("this is the submit button GET");
});

//GET for reset button
app.get("/", (req, res) => {
  console.log("this is the reset button GET");
});

app.post("/guesses" , (req,res) => {
  console.log("This is req.body", req.body);
  // grabs the guesses from input boxes
  let allGuesses = req.body;

  guessesArray.push(allGuesses);

  console.log("This is the guesses array!", allGuesses);

  receiveGuesses(allGuesses);
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});


// function gameLogic(guess) {

  
  
//   let magicNum = getRandom(1, 25);


//   if (magicNum === guess) {
//     return `good job buddy!`
//   } else if (guess > magicNum) {
//     return `too high!`
//   } else if (guess < magicNum) {
//     return `too low!`
//   } else if (guess === '') {
//     return `please enter a guess!`
//   }


// }


function receiveGuesses(object) {
  checkPlayer(1, object.playerOneGuess)
  // checkPlayer(2, object.playerTwoGuess)
  // checkPlayer(3, object.playerThreeGuess)
  // checkPlayer(4, object.playerFourGuess)
}

function checkPlayer(player, guess) {
  switch(player) {
    case 1:
      let p1Guess = guess;
      if(guess > magicNum) {
        playerOneResult = higher
      } else if(guess < magicNum) {
        playerOneResult = lower;
      } else {
        playerOneResult = winner;
      }
      break;
    case 2:
      let p2Guess = guess;
      if(guess > magicNum) {
        playerTwoResult = higher
      } else if(guess < magicNum) {
        playerTwoResult = lower;
      } else {
        playerTwoResult = winner;
      }
      break;
    case 3:
      let p3Guess = guess;
      if(guess > magicNum) {
        playerThreeResult = higher
      } else if(guess < magicNum) {
        playerThreeResult = lower;
      } else {
        playerThreeResult = winner;
      }
      break;
    case 4:
      let p4Guess = guess;
      if(guess > magicNum) {
        playerOneResult = higher
      } else if(guess < magicNum) {
        playerOneResult = lower;
      } else {
        playerOneResult = winner;
      }
      break; 
  }
  roundCounter++;
  results = {
      round: roundCounter,
      playerOneGuess: p1Guess,
      playerOneResult: playerTwoResult,
      playerTwoGuess: p2Guess,
      playerTwoResult: playerTwoResult,
      playerThreeGuess: p3Guess,
      playerThreeResult: playerThreeResult,
      playerFourGuess: p4Guess,
      playerFourResult: playerFourResult
  }
  resultsArray.push(results);
} 