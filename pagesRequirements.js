// Page Requirements


function booksRequirementPages(quantityB1, quantityB2, quantityB3) {

    const physicsBookPages = 100;
    const chemistryBookPages = 200;
    const higherMathBooksPages = 300;

    let physicsTotalPages = physicsBookPages * quantityB1;
    let chemisttryTotalPages = chemistryBookPages * quantityB2;
    let higherMathTotalPages = higherMathBooksPages * quantityB3;

    const totalPagesCount = physicsTotalPages + chemisttryTotalPages + higherMathTotalPages;

    return console.log('Total pages: ', totalPagesCount);

}

let physicsQuantity = 5;
let chesmistryQuantity = 7;
let higherMathQuantity = 12;

let totalRequrementPages = booksRequirementPages(physicsQuantity, chesmistryQuantity, higherMathQuantity);

console.log(totalRequrementPages);