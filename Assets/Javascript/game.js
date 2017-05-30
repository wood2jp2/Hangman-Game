var wins = 0;
var losses = 0;

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
					alert("You win! Click the start button to keep your streak up!");
					wins++;
				}
			} else {
				break;
			}
		}

	guessesLeft-=1;

	if (guessesLeft===0) {
		alert("You lose! Click the start button and try again!");
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
	arrayOfPuzzles = ["bitcoin", "whatsapp", "google", "facebook", "amazon", "techcrunch", "twitter", "startup", "fullstack", "panopto"]
	puzzleChoice = arrayOfPuzzles[Math.floor(Math.random()*arrayOfPuzzles.length)];
	solverArray = [];
	hint = [];

	for (var solverCounter = 0; solverCounter<puzzleChoice.length; solverCounter++) {
		if (solverArray.length < puzzleChoice.length) {
		solverArray.push("_");
		}
	}

	document.getElementById("puzzle").innerHTML = solverArray;
	document.getElementById("userGuesses").innerHTML = lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("hint").innerHTML = hint;
}

function giveHint () {
	if (puzzleChoice) {
		if (puzzleChoice==="bitcoin") {
			document.getElementById("hint").innerHTML = "a famous cryptocurrency";
		} else if (puzzleChoice==="whatsapp") {
			document.getElementById("hint").innerHTML = "famous international chat method";
		} else if (puzzleChoice==="google") {
			document.getElementById("hint").innerHTML = "your favorite search engine, also a verb";
		} else if (puzzleChoice==="facebook") {
			document.getElementById("hint").innerHTML = "Zuckerberg";
		} else if (puzzleChoice==="amazon") {
			document.getElementById("hint").innerHTML = "BEZOS";
		} else if (puzzleChoice==="techcrunch") {
			document.getElementById("hint").innerHTML = "site featuring news about SC startups and corporations";
		} else if (puzzleChoice==="twitter") {
			document.getElementById("hint").innerHTML = "logo is a #LittleBlueBird";
		} else if (puzzleChoice==="startup") {
			document.getElementById("hint").innerHTML = "buzzword for a small new tech company";
		} else if (puzzleChoice==="fullstack") {
			document.getElementById("hint").innerHTML = "front AND back end (well aren't you talented??)";
		} else if (puzzleChoice==="panopto") {
			document.getElementById("hint").innerHTML = "Vinny has trouble with this live-streaming app";
		}
	}
}	