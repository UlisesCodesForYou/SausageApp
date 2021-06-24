//This the base of the sausage choices app imma work on.

//Add all the sausages.  Update when needed. 
let sausages = [
    {Meat: 'Pork', Name: 'Bratwurst', Topping: 'Caramelized Onions'},
    {Meat: 'Buffalo', Name: 'Buffalo Cherry', Topping: 'Hot peppers'},
    {Meat: 'Duck', Name: 'Duck Bacon', Topping: 'Sauerkraut'},
    {Meat: 'Mango', Name: 'Mango Jalapeno', Topping: 'Hot Peppers'},
    {Meat: 'Pheasant', Name: 'Pheasant', Topping: 'Sauerkraut'},
    {Meat: 'Snake', Name: 'Snake Jalapeno', Topping: 'Caramelized Onions'}
];

//Sausage choices with recommened toppings. 
sausages.forEach((sausage, index) => 
console.log(`${index + 1}: If you like ${sausage.Meat}, we highly recommend our ${sausage.Name} sausage. 
As a topping, we recommend ${sausage.Topping}.`) );


/* Imma need to create a prompt asking the user if they like something plant based or animal based.
    For that, Imma use a prompt and a conditional statement.  This way, I will be able to narrow it down. 

        If the user chooses meat based, it'll ask them if they want something savory/sweet, exotic, spicy, or classic. 
        Once they enter their choice, it'll lead them into the choices available along with the reccomened topping, The
        ueser is free to make any changes. Also, if they would like buns or not.  If they don't choose a bun, they are told how their sasuage
        will be served (on top of their topping or on the paper lined tray) 
    
        If the user chooses plant based, it'll ask them if they want something classic, spicy, or sweet/savory. 
        Once they enter their choice, it'll lead them into the choices available along with the reccomended topping and
        modifications needed to meet their diatary needs. (Like if they're vegan they can cook the sausgage in foil to prevent
        cross-contamination) Also, if they would like buns or not.  If they don't choose a bun, they are told how their sasuage
        will be served (on top of their topping or on the paper lined tray)  */