var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var arrayOfPuzzles = ["bitcoin", "whatsapp", "google", "facebook", "amazon", "techcrunch", "twitter", "startup", "fullstack"]
var puzzleChoice = arrayOfPuzzles[Math.floor(Math.random()*arrayOfPuzzles.length)];
var solverArray = [];


document.onclick = function(click) {
	for (var solverCounter = 0; solverCounter<puzzleChoice.length; solverCounter++) {
		if (solverArray.length < puzzleChoice.length) {
		solverArray.push("_");
		}
	}
	document.getElementById("puzzle").innerHTML = solverArray;
}

document.onkeyup = function(event) {
	var userGuess = event.key;
	lettersGuessed.push(userGuess);
	var i = 0;
		for (i; i<puzzleChoice.length; i++) {
			var j = puzzleChoice[i];
			if (userGuess===j && solverArray[i]==="_") {
				solverArray[i]= userGuess;
				if (guessesLeft<=10) {
				guessesLeft+=1;
				}
			} 

		}
		for (i; i<puzzleChoice.length;i++) {
		if (solverArray[i] !=="_") {
			i++;
			} else if (solverArray[i] !== "_" && i === puzzleChoice.length-1) {
				alert("You're a winner! Reload the page for more fun.");
				wins++;
			}
		}	
	guessesLeft-=1;

	if (guessesLeft===0) {
		alert("You lose! Reload the page and try again!");
		losses++;
	}

	// for (var iWinCounter = 0; iWinCounter < puzzleChoice.length; iWinCounter++) {
	// 	if 
	// }

	document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("userGuesses").innerHTML = lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("puzzle").innerHTML = solverArray;
}
