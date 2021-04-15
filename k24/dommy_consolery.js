/*
   your PPTASK:
   
   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.
    		
    		Write with your future self or teammates in mind.
    		
    		If you find yourself falling out of flow mode, consult 
    		other teams
    		MDN
   A few comments have been pre-filled for you...
   
   (delete this block comment once you are done)
*/
//YOUR HEADING HERE


//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
// prints to the dev console, as opposed to displaying things on the webpage itself
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
// adds 30 to a number? --> if x is a num, treats as an int, if x is a string, treats as concatenation
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
// JSON format, key-value pairs
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          // functions can exist as values for the pairs, data type?
          func : function(x) {
            return x+30;
          }
        };


//(define fact (lambda (n) ...)
var fact = function(n) {
  var prod=1;
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
      // recursion!
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
    // creates an array of all the list items on a page, removes the nth indexed item
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
      // changes all list items to be of class "red"
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};


var buttonCallback = function(e) {
  console.log("\n\nhere comes e...");
  console.log(e);
  console.log("\n\nhere comes 'this'...");
  console.log(this);
}


var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);


var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---")
  console.log(this);
  this.classList.add('red');
}

var thelist = document.getElementById("thelist");
var litems = thelist.children;
for(var i = 0; i < litems.length; i++) {
  litems[i].addEventListener('click', redCallback);
  litems[i].addEventListener('mouseover', function(e){
    console.log("user has moved into this:" + this);
    this.classList.toggle('green');
  });
  litems[i].addEventListener('mouseout', function(e){
    console.log("user has moved out of this:" + this);
    this.classList.toggle('blue');
  });
}
