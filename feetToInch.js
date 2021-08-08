// conver Feet to Inch 


function feetToInch(feet){

    let inch = feet * 12; 
    return inch.toFixed(2);

}

let myheightInFeet = 5.6;

let convertedToInch = feetToInch(myheightInFeet);
console.log(convertedToInch);