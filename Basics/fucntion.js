//fucntion
function hello(){
    console.log("Hello World")
}

// hello()

//addition
var a = 10;
var b = 20;

function add (){
    console.log(a+b)
}

// add(a,b)


//greet function
var Name = "Anu"

function greet(){
    console.log("Hello " + Name)
}
// greet()

//parameterized function
function greetUser(userName){
    console.log("Hello " + userName)
}

// greetUser("Anupama")

//return function
function myname(){
   return 'john1'
}

// console.log(myname())

//this will give undefined because the function is not returning anything to the variable
function myname2(){
   console.log('john2')
}

// console.log(myname2())



function sun(x,y){
    return x+y
}

// console.log(sun(1,2))
