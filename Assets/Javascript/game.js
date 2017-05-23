var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = ["Letters guessed: "];
var arrayOfPuzzles = ["bitcoin", "whatsapp", "google", "facebook", "amazon", "techcrunch", "twitter", "startup", "fullstack"]

document.onkeyup = function(event) {
	var puzzleChoice = arrayOfPuzzles[Math.floor(Math.random()*arrayOfPuzzles.length)]
	var userGuess = event.key;
	lettersGuessed[lettersGuessed.length] = userGuess;


}
