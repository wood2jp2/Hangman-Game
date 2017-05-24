var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var arrayOfPuzzles = ["bitcoin", "whatsapp", "google", "facebook", "amazon", "techcrunch", "twitter", "startup", "fullstack"]
var puzzleChoice = arrayOfPuzzles[Math.floor(Math.random()*arrayOfPuzzles.length)];
var solverArray = [];

document.onkeyup = function(event) {
	var userGuess = event.key;
	lettersGuessed.push(userGuess);

	for (var i = 0; i<puzzleChoice.length; i++) {
		var j = puzzleChoice[i];
		if (userGuess===j) {
			solverArray[i]=userGuess;}
		//  } else if (solverArray[i].isN{
		// // 	solverArray[i] = "_";
		// // }
	}
	guessesLeft-=1;
	document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("userGuesses").innerHTML = lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("puzzle").innerHTML = solverArray;
}
