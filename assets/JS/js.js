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

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './images/Sprite-0001.png'

imgArray[1] = new Image();
imgArray[1].src = './images/Sprite-0002.png'




var word ="";
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
    numBlanks = word.length;

    console.log(word);

    blanksAndLetters = [];
    wrongGuesses = [];
    
    var div = document.getElementById("letters");
    div.innerHTML = ""
    
    for (let i = 0; i < numBlanks; i++) {
        div.innerHTML += " _ "
    }

    blanks(word)
}

    var letter = 

function checkLetter(){
    
    for (let i = 0; i < word.length; i++) {
        
        if(letter == word[i]){
    
            

        }

        if(letter != word[i]){
            
            
            var hearts = document.getElementById("hearts")
            hearts.src = imgArray[1]


        }
        
    }





}