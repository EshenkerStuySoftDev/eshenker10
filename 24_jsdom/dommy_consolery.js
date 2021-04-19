// Team Lian 2.0 (Ethan Shenker, Liam Kronman)
// SoftDev pd1
// K24 -- Getting more comfortable with the dev console and the DOM
// 2021-04-18
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
// prints to the dev console, as opposed to displaying things on the webpage itself
console.log("AYO");

var i = "hello";
var j = 20;


// assign an anonymous fxn(x) to a var, called f
// adds 30 to a number? --> if x is a num, treats as an int, if x is a string, treats as concatenation
var f = function(x) {
  var j=30;
  return j+x;
};


// instantiate an object
// JSON format, key-value pairs
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          // functions can exist as values for the pairs, is a standalone data type?
          func : function(x) {
            return x+30;
          }
        };


// (define fact (lambda (n) ...)
var fact = function(n) {
  var prod=1; // local variable definition
  // n is already defined, don't need to reassign in the loop
  for ( ; n > 1 ; n--){
    prod = prod * n;
  }
  return prod;
};


//(define fact (lambda (n) ...)
var factR = function(n) {
  if ( n<=1 ) {
    return 1;
  }
  else {
    // recursive call
    return n * factR(n-1);
  }
};


var addItem = function(text) {
  var list = document.getElementById("thelist"); // finds html tag with id "thelist"
  var newitem = document.createElement("li"); // creates a list item
  // populates list item with text given in argument
  newitem.innerHTML = text;
  // appends item to original list
  list.appendChild(newitem);
};


var removeItem = function(n) {
  // creates an array of all the items w/ <li> tag on a page, removes the nth indexed item
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li"); // array of all <li> items
  for(var i = 0; i < items.length; i++) {
    // adds class tag of "red" to all items in this list
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red'); // adds class 'red' to all even items in the list
    } else {
      items[i].classList.add('blue'); // "       " 'blue' "    " odd "                 "
    }
  }
};


var buttonCallback = function(e) {
  console.log("\n\nhere comes e...");
  console.log(e);
  // "e" refers to an instance of a Pointer Event, which is activated when the button is clicked
  console.log("\n\nhere comes 'this'...");
  console.log(this);
  // "this" is the button that is clicked that activates the pointer event
}


var b = document.getElementById('b');
b.addEventListener('click', buttonCallback); // adds "on-click" aspect of "b" button


var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---")
  console.log(this); // in this context, "this" is a list item from "thelist" that's displayed when clicked on
  this.classList.add('red');
}

var thelist = document.getElementById("thelist"); // the whole list
var litems = thelist.children; // each item within the list
for(var i = 0; i < litems.length; i++) {
  litems[i].addEventListener('click', redCallback); // on click, each button calls redCallback
  litems[i].addEventListener('mouseover', function(e){ // function that, when the mouse hovers over a list item,
    console.log("user has moved into this:" + this);   // logs that the user has moved into that one specifically and
    this.classList.toggle('green');                    // changes its color to green
  });
  litems[i].addEventListener('mouseout', function(e){  // function that, when the mouse stops hovering over a list item,
    console.log("user has moved out of this:" + this); // logs that accordingly and changes its color to blue
    this.classList.toggle('blue');
  });
}
