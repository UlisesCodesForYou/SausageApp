
// Dice game using a switch statements.

//In this line of code, I used the Math.floor with the Math.random methods to generate a random whole number between 1-7.
let randomDiceRoll = Math.floor(Math.random() * 7); 

/*I declared a switch statement.  Then I passed the RandomDiceRoll as an expression. 
Once the randomDiceRoll variable runs, the code below looks for a matching case. When it finds one, it will alert
the user of the outcome.  If it doesn't, it will alert the default response.*/ 
switch(randomDiceRoll) {  
    case 1:
        alert('You got a 1...not good.');   
        break;
    case 2: 
        alert('You got a 2....still...not good.');
        break;  
    case 3:
        alert('You got a 3....Getting better.  Still, not the number you want.');
        break;
    case 4:
        alert('Ended up with a 4. Not bad, you are getting there!');
        break;
    case 5:
        alert('ohhhh you got a 5!  Getting there.  Keep going!');
        break;
    case 6:
        alert('1 away from the number you want!  You got a 6!');
        break;
    case 7:
        alert('Lucky number 7!! You won!!');
        break;
    default:  
        alert('Why are you still holding the dice!  Throw that damn thing already!!');
};

//THIS WAS UPLOADED TO GITHUB ON 2/11/2021. 