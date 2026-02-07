//if els0
var a = 10;
var b = 20;

if(a==b){
    // console.log("a is equal to b")

}else{
// console.log("a is not equal to b")
}

//Logical Operators

// console.log(true && true)  //true
// console.log(true && false) //false
// console.log(false && false) //false

// console.log(true || false) //true
// console.log(false || true) //true
// console.log(false || false) //false

//NOT operator
// console.log(!true) //false
// console.log(!false) //true


/*Question 1: 
What is score in the game ,
if score is less than 50 -> "You lose the game"
if score is between 50 and 80 -> "Good job"
if score is above 80 -> "You are the champion"
*/

var score = 90;

if(score < 50){
    console.log("You lose the game")
}else if(score >=50 && score <=80){
    console.log("Good job")
}else{
    console.log("You are the champion")
}
