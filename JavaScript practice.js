
const userAge = 32;
let userName = 'Ulises';
let userLastName = 'Orozco';
let userCity = 'Los Angeles';

console.log(`Hello. My names is ${userName}${userLastName} and I am ${userAge}.  My home city is ${userCity}`);



let oddNumbers = oddNumberArrray => {
    for(let i = 0; i < oddNumberArrray.length; i++){
        if(oddNumberArrray[i] % 2!== 0) {
            console.log(oddNumberArrray[i]);
        };
    };
};

oddNumbers = [2,3,4,5,6,7,12,15,17,18,20]

//Fizzbuzz exercise
const fb = []

for(let i = 1; i < 17; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        fb.push('fizzbuzz')
    } else if (i % 5 == 0) {
        fb.push('buzz')
    } else if (i % 3 == 0) {
        fb.push('fizz')
    } else {
        fb.push(i);
    };
};
console.log(fb)
//end of this exercise

//array should be multipled by 10 if >= 5 exercise
const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];

for(let i = 0; i < timesTenIfOverFive.length; i ++) {
    if(timesTenIfOverFive[i] >= 5) {
        timesTenIfOverFive[i] = timesTenIfOverFive[i] * 10;
    };
};
console.log(timesTenIfOverFive);
//end of this exercise.

 
//This is a for/in loop example. 

/*You are provided with an empty array called objToArray. 
Using a for... in loop, fill the array with all of the numbers from the 
checkObj object if they are greater than or equal to 2*/

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  const objToArray = [];

  for (let i in checkObj) {
      if(checkObj[i] >= 2) {
          objToArray.push(checkObj[i])
      };
  };
  console.log(objToArray);
//this is the end of this exercise.

//Iterrating through a for loop

 /* This time, use the Object.values() method to return an array of checkObj's values, and assign this array to 
  a constant called objToArray.
   Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6. 
  If so, reassign the value of divBy6 to true.*/

  const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };

  let divBy6 = false;

cosnt objToArray = Object.values(checkObj);

for(let i = 0; i < objToArray.length; i++) {
    if(objToArray[i] % 6 == 0) {
        divBy6 = true;
    };
};
//This is the end of this exercise.

// Nested Arrays

/*You are provided with an empty array called nestedArr. 
Using a for loop starting at index 0, add 5 subarrays to nestedArr, with 
each nested array containing the string 'loop' concatenated with the corresponding index 
in nestedArr as its first element, and the index as its second element.*/

const nestedArr = [];

for(let i = 0; i < 5; i ++) {
    nestedArr.push(['loop' + i,i]);
};
console.log(nestedArr);

//This is the end of this exercise.

//This is an example of an Object Construcotor Function.  
function Cake(type, filling, fruit, topping, shape, color){
    this.type = type;
    this.filling = filling;
    this.fruit = fruit;
    this.topping = topping;
    this.shape = shape;
    this.color = color;
};

let cake1 = new Cake('Classic', 'Cream filling', 'fruit', 'rectangle','white');
cake1.good = true;
cake1.slicesTotal = 30;

//This is the end of fhis example.

//This is another example of an OCf,

function MyGuitar(maker, model, color, playable, strings) {
    this.maker = maker;
    this.model = model;
    this.color = color;
    this.playable = playable;
    this.strings = strings;
};
let guitar1 = new MyGuitar('gibson', 'Les Paul','Red', true, 6);
console.log(guitar1)
