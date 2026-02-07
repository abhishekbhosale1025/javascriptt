// Hoisting in JavaScript

getName();

console.log(getName) // --> [Function: getName] will be returned --> because the memory allocation is done in the creation phase for function declarations

console.log(getNumber) // --> undefined will be returned --> because of const keyword keyword it will be allocate undefined in the creation phase

console.log(getWork) // --> undefined will be returned --> because of const keyword keyword it will be allocate undefined in the creation phase

function getName(){
    console.log("Hello World")
}

const getNumber = () => {
    console.log("Number Number")
}

const getWork = function(){
    console.log("Work Work")
}




console.log(x) // --> undefined
// console.lig(y) // --> ReferenceError: y is not defined --> because the memory allocation is not done in the creation phase for let and const variables

var x = 7;


// run the index.html file to see the output in the browser console
// inspect -> sources 
// go to the file and add breakpoints to see the call stack in action
// run the html file and check the call stack in the browser console