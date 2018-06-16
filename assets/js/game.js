
      var words=["bootstrap", "jquery", "react", "angular", "node", "ajax","javascript", "firebase", "heroku", "github", "gitlab", "mysql", "mongodb",
                "express", "mongoose", "sequelize", "handlebars", "redux", "mysql"];
            var win=0;
            var loss=0;
            var wrongletter=[];
            var guessleft=9;
            var underscore=[];
            var userguess=[];
            var randomwords;
            var wincounter=0;

            function startGameOld(){
                randomwords = words[Math.floor(Math.random()*words.length)];
                for(var i=0 ;i<randomwords.length;i++)
                {
                    underscore.push(" _ ");
                
                }
                console.log(randomwords);
                

                wrongletter=[];
                guessleft=[];

                document.getElementById("guessleft").innerHTML = guessleft;

            }
            function winlose(){
                if(wincounter === randomwords.length)
                {
                    alert("you win");
                    startGame();
                }
                else if(guessleft===0)
                {
                    alert("loser")
                    startGame();
                }
            }
            //user guess


            // Jasons code below
            var guessedLetters = [];
            var chosenWord = null;
            var totalAvailableGuesses = 9;
            document.onkeyup = function(event) {
                var key = event.key;
                // Every time you press the key, add it to the array
                guessedLetters.push(key);

                // Now update the page with the guessed letters
                document.getElementById('letters-guessed').innerHTML = guessedLetters;
                var currentObfuscatedWord = getObfuscatedWord();
                document.getElementById('words-blank').innerHTML = currentObfuscatedWord;

                var guessesLeft = (totalAvailableGuesses - guessedLetters.length);

                if (currentObfuscatedWord === chosenWord) {
                    // You win
                } else if (guessesLeft <= 0) {
                    // you lose
                }
                
                document.getElementById('guessleft').innerHTML = guessesLeft;


            }

            function startGame() {
                chooseRandomWord();
            }

            function chooseRandomWord() {
                var randomNumber = Math.floor( Math.random() * words.length);
                chosenWord = words[randomNumber];
            } 


            function getObfuscatedWord() {
                // Look at each character in the word and see if it was guessed
                var builtWord = "";
                for (var j=0;j<chosenWord.length; j++) {
                    var isLetterFound = false;
                    // Look through each guessed letter to see if it matches.
                    var currentLetter = chosenWord[j];

                    for (var k=0;k<guessedLetters.length; k++) {
                        // If the letter was guessed, we show it
                        
                        if (currentLetter == guessedLetters[k]) {
                            isLetterFound = true;
                        }
                        
                    }

                    if (isLetterFound === true) {
                        builtWord += currentLetter;
                    } else {
                        builtWord += "_";
                    }
                    
                }
                return builtWord;
            }


            // document.onkeyup= function(event){
            //     document.getElementById("words-blank").innerHTML = underscore.join(" ");

            //     userguess=event.key;
            // if(randomwords.indexOf(userguess)> -1)
            // {
            //     for( var j=0;j<randomwords.length;j++)
            //     {
                    
            //         if(randomwords[j]=== userguess)
            //         {
            //             underscore[j]==userguess;
            //             debugger;
            //             wincounter++;
            //             winlose();

            //         }
            //     }
            // }
            //     else
            //     {
            //         wrongletter.push(userguess);
            //         guessleft--;
            //     }
            // }

            startGame();

