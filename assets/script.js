let givenWord = "BONJOUR";
let word = givenWord.toLowerCase();
let guessedWord = word.split("");
let guess = [];
for (let i = 0; i < guessedWord.length; i++) {
  guess[i] = "_";
}
let leftToGuess = guessedWord.length;
let count = 0;

document.getElementById("run").addEventListener("click", () => {
  while (leftToGuess > 0) {
    function guessLetter() {
      let givenLetter = prompt("Guess a letter");
      let letter = givenLetter.toLowerCase();
      let match = false;
      for (let j = 0; j < guessedWord.length; j++) {
        if (letter === guessedWord[j]) {
          alert("Congrats! You found one!");
          guess[j] = letter;
          match = true;
          leftToGuess--;
        } else if (j == guessedWord.length - 1 && match == false) {
          alert("Not the good one, try again!");
        }
      }
    }

    guessLetter();
    count++;
    if (leftToGuess > 0) {
      alert(
        "This is your result for now: " +
          guess.join(" ") +
          "\nnumber of trials: " +
          count
      );
    } else {
      alert(
        "Congrats, you found the word " +
          givenWord +
          " correctly!" +
          " You win in " +
          count +
          " trials"
      );
    }
    console.log(guessedWord);
    console.log(guess);
  }
});
