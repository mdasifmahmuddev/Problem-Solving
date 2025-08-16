//data type convert : decimal to number : string concat 


function performOperation(secondInteger, secondDecimal, secondString) {

    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';

    console.log(firstInteger + Number(secondInteger));
    console.log(firstDecimal + Number(secondDecimal));
    console.log(firstString + secondString);
}

// Sample inputs as strings (because your function expects strings)
const secondInteger = "5";
const secondDecimal = "3.2";
const secondString = "is the best!";

performOperation(secondInteger, secondDecimal, secondString);
