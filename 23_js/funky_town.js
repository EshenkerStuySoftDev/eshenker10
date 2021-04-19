// Team Lian :: Liam Kronman, Ethan Shenker
// SoftDev pd1
// K23 -- Basic functions in JavaScript
// 2021-04-18
// --------------------------------------------------

//CARRY OVER YOUR BEST JS fxns here
// define function factI with parameter num
function factI(num) {
    // iteratively multiplies numbers to output (default 1) until num is reached
    var output = 1
    for (i = 2; i <= num; i++) {
        output = output * i;
    }
    // returns output
    return output;
}

function factR(num) {
    // base case: if num is 1 return 1
    if (num == 0) {
        return 1;
    }
    // otherwise recursively call function until num = 1
    return num * factR(num - 1);
}

function fibI(num) {
    // define two variables representing "last two elements" of current fibonacci sequence
    var first = 1;
    var second = 1;
    // iteratively adds last two elements to generate a third and updates what last two elements are
    for (i = 3; i <= num; i++) {
        second = first + second;
        first = second - first;
    }
    return second;
}

function fibR(num) {
    // if num is 1 or 2 return 1
    if (num == 1 || num == 2) {
        return 1;
    }
    // otherwise return the sum of previous two elements in fibonacci sequence
    return fibR(num - 1) + fibR(num - 2);
}

// ~~~ NEXT STEPS  ~~~
// as a duo...
// pair programming style


//Develop, then implement gcd(a,b), which returns the greatest common divisor of a and b.

var gcd = (a,b) => {
    var gcd = 1
    // loop through numbers between 2 and a and b to check which are factors of both
    for (i = 2; i <= a && i <= b; i++)
        if (a % i == 0 && b % i == 0 && i > gcd)
            gcd = i;
    return gcd;
};

//Develop, then implement randomStudent(), which returns a randomly selected name from a list.

var randomStudent = (list) => {
    var randIndex = parseInt(list.length * Math.random());
    return list[randIndex];
};

//You may want to create helper functions or external list variables here.

//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.