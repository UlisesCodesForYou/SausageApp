
//I started ouf this code with a prompt that pops up when the code is run.  
let personName = prompt('What is your name?');


//In this part of the code, I have used a conditional.
//If they have a name, it will be logged onto the console.  If not, a default greeting will run. 
if (personName) {
    console.log(`Hello ${personName}`); 
} else {
    console.log('Hello.'); 
};

//After the user answers the first prompt, this second prompt will instruct the user to type in a question.
let personQuestions = prompt('Plese ask a question!');  

// Once the user has completed both prompts, a new string will apear onto the console.  I have uses template literals for this. 
console.log(`${personName} asked ${personQuestions}.  Hmmm. Give me a sec to see into your future.`);

//I have used the Math.floor method and added the Math.random method to generate a whole number between 1-8 for my magic 8 ball. 
let randomNumber = Math.floor(Math.random() * 8);

/*I have assigned the value of an empty string to the variable eightBall.  This will be filled in with a matching case 
found below. */
let eightBall = ''; 

/*I have used a swtich statement to generate responses.  I have added randomNumber as the expression. The expression will 
generate a random number and it will find a matching case from the code below.  That result will be pushed onto the empty 
eightBall string. */ 
switch(randomNumber) {
    case 0:
        eightBall = 'Better not tell you know!';
        break;
    case 1:
        eightBall = 'Concentrate and try again!';
        break;
    case 2:
        eightBall = 'Reply hazy...try again.';
        break;
    case 3:
        eightBall = 'Cannot predict now...things are still a little hazy.';
        break;
    case 4:
        eightBall = 'My reply is no.';
        break;
    case 5:
        eightBall = 'My sources say nooooooo!!';
        break;
    case 6:
        eightBall = 'Outlook not so good.';
        break;
    case 7:
        eightBall = 'Signs point to yeeeess!!!';
        break;
};


/* Once a matching case has been found from the code above, the result will be pushed onto the empty eightBall string.
Once it does that, it will be added to the eightBall expression below along with the personName expression and the final 
results will be logged onto the console.*/

console.log(`Well ${personName}...the magic 8 ball has seen into the future.  And its answer is: ${eightBall}`);

// THIS HAS BEEN UPLOADED TO GITHUB ON 2/11/2021.
