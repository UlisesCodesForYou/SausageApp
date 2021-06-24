//Project 1: Making a Kelvin to Fahrenheit Mini app

//Temp in kelvin stored in the variable kelvinTemp.
let kelvinTemp = 301;

//Temp in celsius stored in the variable celsiusTemp.
let celsiusTemp = kelvinTemp - 273.15;

//Temp in fahrenheit stored in the variable fahrenheitTemp.
let fahrenheitTemp = celsiusTemp * (9/5) + 32;

//console.log(fahrenheitTemp);

//I'm gonna use the floor method to round down the f temp.  Then we're gonna save it under the fahrenheit variable
fahrenheitTemp = Math.floor(fahrenheitTemp)

//console.log(`The temperature is ${fahrenheitTemp} degrees Fahrenheit`)

//Rut this on the consolel in the google chrome dev tools.  I still have to figure out how to run it through here!