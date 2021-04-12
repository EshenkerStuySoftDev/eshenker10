// Team e&a - Anya Zorin, Ethan Shenker
// SoftDev
// K21 -- Get Scripty
// 2021-4-9

function factI(n){
    if (n==0){return 1}//base case/exception of factorial is 0!=1
    var ans=1;
    for (i=1; i<=n;i++){//simple for loop
        ans=i*ans;
    }
    return ans;
}

function factR(n) {
    if (n==0){return 1}//base case
    return n* factR(n-1);
}
//js has no print, so use console log
//if on VS code, install package "Code Runner" then ctrl+alt+n prints console log in output
console.log(factI(9));
console.log(factR(9));


function fibI(n) {
    if (n == 0) {return 0};
    if (n == 1) {return 1};

    var first = 0;
    var second = 1;

    for (i=0; i<n-1; i++) {
        var temp = second;
        second += first;
        first = temp;
    }
    return second;
}

console.log(fibI(1));
console.log(fibI(4));
console.log(fibI(8));


function fibR(n) {
    if (n == 0) {return 0};
    if (n == 1) {return 1};
    return fibR(n-1) + fibR(n-2);
}

console.log(fibR(1));
console.log(fibR(4));
console.log(fibR(8));