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