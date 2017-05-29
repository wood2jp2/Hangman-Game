var wins = 0;
var losses = 0;

document.onclick = setUpPuzzle

document.onkeyup = function(event) {
	var userGuess = event.key;
	lettersGuessed.push(userGuess);
	var i = 0;
	var k = 0;
		for (i; i<puzzleChoice.length; i++) {
			var j = puzzleChoice[i];
			if (userGuess===j && solverArray[i]==="_") {
				solverArray[i]= userGuess;
				if (guessesLeft<=10) {
				guessesLeft+=1;
				}
			}
		}

		for (k; k<solverArray.length; k++) {
			if (solverArray[k] !== "_") {
				if (k===solverArray.length-1 && solverArray[solverArray.length-1] !== "_") {
					alert("You win!");
					wins++;
				}
			} else {
				break;
			}
		}

	guessesLeft-=1;

	if (guessesLeft===0) {
		alert("You lose! Reload the page and try again!");
		losses++;
	}

	document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("userGuesses").innerHTML = lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("puzzle").innerHTML = solverArray;
}

function setUpPuzzle () {
	guessesLeft = 10;
	lettersGuessed = [];
	arrayOfPuzzles = ["bitcoin", "whatsapp", "google", "facebook", "amazon", "techcrunch", "twitter", "startup", "fullstack"]
	puzzleChoice = arrayOfPuzzles[Math.floor(Math.random()*arrayOfPuzzles.length)];
	solverArray = [];

	for (var solverCounter = 0; solverCounter<puzzleChoice.length; solverCounter++) {
		if (solverArray.length < puzzleChoice.length) {
		solverArray.push("_");
		}
	}

	document.getElementById("puzzle").innerHTML = solverArray;
	document.getElementById("userGuesses").innerHTML = lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
}