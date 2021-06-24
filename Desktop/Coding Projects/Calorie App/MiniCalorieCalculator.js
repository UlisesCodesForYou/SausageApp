
//This is a Mini Calorie Calculator.  

function inputCaloriesByDay(day) {
    day = day.toLowerCase();
    if (day === 'monday') {
        return 3500;
    } else if (day === 'tuesday') {
        return 2400;
    } else if (day === 'wednesday') {
        return 3300;
    }else if (day === 'thursday') {
        return 2200;
    } else if (day === 'friday') {
        return 1500;
    } else if (day === 'saturday') {
        return 2390;
    } else if (day === 'sunday') {
        return 3800;
    } else {
        return 'Please choose a valid day of the week.';
    };
};


//The function below adds all the calories that an individual consumes in a 7 day week.

function getTotalCalories() {
    return inputCaloriesByDay('monday') + inputCaloriesByDay('tuesday') + inputCaloriesByDay('wednesday') + inputCaloriesByDay('thursday') + inputCaloriesByDay('friday') + inputCaloriesByDay('saturday') + inputCaloriesByDay('sunday');
};


//The function below gives the individual thier ideal total calorie intake in a 7 day week.  That's why the daily intake target is multiplied by 7.

function getIdealCalories() {
    let idealTotalCalories = 2500;
    return idealTotalCalories * 7;
};


//The function below calculates and lets the user know if they hit their intended caloric weekly intake.  

function calculateHealthPlan() {
    const actualCalories = getIdealCalories();
    const idealCalories = getIdealCalories();
    if (idealCalories === actualCalories) {
        console.log('You hit your target caloric target!  Keep it up!')
    } else if(actualCalories < idealCalories){
        console.log('Time to hit the gym!')
    } else {
        console.log('You can eat a little more!  But not too much, you do not want to go over your limit!')
    };
};


console.log(calculateHealthPlan()); 