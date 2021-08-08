// write a program to find all the positive numbers in an array and break the loop imediatly if any negative number found.


function onlyPositve(numbers) {

    let allPostiveNumbers = [];

    for (let number of numbers) {

        if (number < 0) {
            break;
        }
        else {
            allPostiveNumbers.push(number);
        }

    }

    return allPostiveNumbers;


}

let numbers = [18, 15, 11, -5, 111, 17, -1, 4, 8, -3]

let positveNoList = onlyPositve(numbers);
console.log(positveNoList);