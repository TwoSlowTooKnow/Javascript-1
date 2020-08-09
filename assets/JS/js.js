var wordList =[
    "Charizard",
    "Pikachu",
    "Eevee",
    "Snorlax",
    "Mew",
    "Mewtwo",
    "Ditto",
    "Gengar",
];

var letters = "abcdefghijklmnopqrstuvwxyz".split("")


var word ="";
var lettersInWord = 0;
var numBlanks = 0;
var blanksAndLetters = [];
var wrongGuesses = [];

var winCounter = 0;
var losses = 0;
var chances = 4;

function blanks(rand){
    
}

function startGame(){
    wrongGuesses = 4

    word = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInWord = word.split("");
    numBlanks = lettersInWord.length;

    console.log(word);

    blanksAndLetters = [];
    wrongGuesses = [];
    
    var div = document.getElementById("letters");
    div.innerHTML = ""
    for (let i = 0; i < letters.length; i++) {
        var buttons = document.createElement("button")
        div.appendChild(buttons);
        buttons.innerHTML = letters[i];
    }
    blanks(word)
}