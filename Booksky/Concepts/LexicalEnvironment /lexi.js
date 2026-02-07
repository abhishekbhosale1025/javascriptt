
function a(){
    console.log(b)
}
var b = 10

a() // 10 , it will finds b in the parent lexical environment, where ever the fucntion is executing 



a2()
function a2(){
    var b = 110
    b2();
    function b2(){  
        console.log(b)
    }

}






const ab = 10 ;

{

    const ab = 20;
    console.log(ab) // 20 , it will finds ab in the current lexical environment
}
console.log(ab) // 10 , it will finds ab in the global lexical environment


// block scope means the variables defined inside the block cannot be accessed from outside the block

// shadowing means if there are two variables with the same name in different lexical environments, 
// the variable in the current lexical environment will be used


