// Fundamentals part 3
// Function practices


//let add7 = num  => num + 7;

//console.log(add7(5))

function add7(num) {
    let result = num + 7;
    return console.log(result)
}

add7(8)

function multiply(a,b) {
    result = a * b;
    return console.log(result);
}

multiply(3,4)

function capitalize(word) {
    let firstLetter = word.charAt(0);
    let restWord = word.slice(1);
    let final = firstLetter.toUpperCase() + restWord.toLowerCase();
    return console.log(final);
}

capitalize("gabrIel")

function lastLetter(string) {
    let last = string.slice(-1)
    return console.log(last);
}

lastLetter("abcd")

let num = prompt(("Enter a number",""));


//Learning to create little programs from scratch
function fizzBuzz(x) {
    for (let i =1; i <= x; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i%3 == 0) {
            console.log("Fizz");
        } else if (i%5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(num)

