var words = ["RUGRATS", "SPONGEBOB", "POKEMON", "ANIMANIACS", "RECESS", "DOUG", "CATDOG", "SIMPSONS"];
	
	var maxNumGuesses = 8; 
	var guessedLetters = [];
	var ansWordArr = [];
	var usedWord = [];
	var numGuessesRemaining = 0;
	var numWins = 0;
	var numLosses = 0;
	var isFinished = false;
	var ansWord;
	
	
	function restart() {
	var maxNumGuesses = 8; 
	var guessedLetters = []; 
	var ansWordArr = []; 
	var numGuessesRemaining = 0; 
	var numWins = 0; 
	var numLosses = 0; 
	var isFinished = false; 
	var ansWord; 
	
	function setup() {
	   
	    ansWord = words[Math.floor(Math.random() * words.length)];

	
	
	function updateScreen() {
	    document.getElementById("numWins").innerText = numWins;
	    document.getElementById("numLosses").innerText = numLosses;
 function updateScreen() {

	function checkGuess(letter) {

	    if (guessedLetters.indexOf(letter) === -1) {
	        guessedLetters.push(letter);
	      
	        if (ansWord.indexOf(letter) === -1) {
	            numGuessesRemaining--;
	        
	            if (numGuessesRemaining <=3) {
	                document.getElementById("numGuesses").style.color = "#e12d2e";
	            }
	        } 
	      
	       
 
	function isWinner() {
	    if (ansWordArr.indexOf("_") === -1) {
	        numWins++;
	        isFinished = true;
	        if(ansWord === "DOUG") {
	            document.getElementById("giphy-embed").src = "https://giphy.com/embed/w7iOaLoi84N6E";
	        } else if (ansWord === "RUGRATS") {

	};
	function isLoser() {

	    if(numGuessesRemaining <= 0) {
	        numLosses++;
	        isFinished = true;

	        document.getElementById("giphy-embed").src = "https://giphy.com/embed/3oFzmko6SiknmpR2NO";
	        document.getElementById("numLosses").style.color = "#e12d2e";
	    }
	
	};
	
	document.onkeyup = function(event) {
	   
	    if (isFinished) {
	        restart();
	        setup();
	        isFinished = false;
	    } else {
	        if(event.keyCode >= 65 && event.keyCode <= 90) {
	            checkGuess(event.key.toUpperCase());
	            checkGuess(event.key.toUpperCase()); 
	            updateScreen();
	            isWinner();
	            isLoser();
     document.onkeyup = function(event) {
	};
	
	
	restart();
	setup();
	updateScreen();
	
    console.log(ansWord);
            }