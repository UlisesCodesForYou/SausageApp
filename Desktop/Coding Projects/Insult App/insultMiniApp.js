//This is a mini javaScript mini App insults you...kinda.

//Sources of the 'insults.'
let randomBodyParts = ['head', 'arms', 'hips', 'ass'];
let randomAdjectives = ['smelly', 'saggy', 'draggy', 'polite'];
let randomWords = ['cheese', 'huh', 'more cheese', 'gassy', 'big'];

//These are my random generators.
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
let randomWord = randomWords[Math.floor(Math.random() * 5)];

//This is what is going to be logged onto the console. 
let meanThing = `Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}!!`;

//Aaaaaand here's my crappy insult. 
console.log(meanThing);


