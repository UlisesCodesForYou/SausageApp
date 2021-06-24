
/* This function method is out of date.  I need to come back and update this to ES6 format.
The function below requests the userInput.  The user must choose from 1 of the 3 options. 
If the user, for some reason, types their choice using all caps, the method toLowerCase has been added to ensure that it matches
one of the choices written; they have been set to strictly equal.  The method added helps fix that.
If for some reason the user chooses something else, a defalut statement has been added to let the user know
their choices. This will apear in a promt format.*/
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
        return userInput;
    } else {
        console.log('You gotta choose bear, human, or gun. Try again')
    }
};

/* Once the user makes a choice, this next function will take place. This function uses the methods Math.floor and Math.random
to generate 1 of the 3 possible outcomes. The 3 random outcomes are Bear, Human, and gun.
I have used else if conditionals to assign values to the results of the Math.floor and Math.random outcome.*/
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    } else if(randomNumber === 1) {
        return 'human';
    } else {
        return 'gun';
    }
}


/* In this function, I have used conditionals to determine the winner between the users choice and the computers choice.*/
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'You folks tied! Try again!'; // If both choices match, this will be the outcome. 

    };

    //if user chooses human
    if (userChoice === 'human') {

        //if computer chooses bear
        if (computerChoice === 'bear') {
            return 'Your got murdered by a bear!';
        } else {
            return 'You somehow against the odds made it!';
        }
    }; 

    //If user chooses bear
    if (userChoice === 'bear') {
        //If computer chooses gun
        if(computerChoice === 'gun') {
            return 'You got shot! (In Forrest Gump voice)';
        } else {
            return 'You mauled that poor bastard, but in all fairness, he had a gun and did not know how to use it!';
        }
    };

    //If user chooses gun

    if (userChoice === 'gun') {
        //If computer chooses human
        if (computerChoice === 'human') {
            return 'You struggled, but you were able to dissarmed that gun!';
        } else {
            return 'You shot the sherrif..and the bear too while you were in a murderous rampage...cause you are an American baby!';
        }
    };
    //These are all the possible scenarios in this game.  It's an odd game, but hey, I need to brush up on my javaScript skills!
};

/* In the function below, It pulls all the game together. It first asks the person to make a choice.  Once the user makes thier
choice, the function getUserChoice will be envoked. Once it is envoked, the getComputer choice will be envoked and make its
choice.  
Once both choices have been made, the fucntion determineWinner will be envoked.  It will take both the users and computers 
choice and compare them to the possible outcomes written within that function. Finally, it will log the results onto the 
console. */
function playGame() {
    const promptUserChoice = prompt('Plese choose bear, human or gun to play this weird game.');
    const userChoice = getUserChoice(promptUserChoice);
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
};


playGame();

// I have envoked the playGame function to make the program run.  
// THIS HAS BEEN UPLOADED ONTO GITHUB ON 2/11/2021. 