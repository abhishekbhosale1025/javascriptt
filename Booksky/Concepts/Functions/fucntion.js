var x = 1;

a(); 
b(); 
console.log(x);

function a(){
     var x =2;
console.log(x);
}


function b(){
     var x =3;
console.log(x);
}

/*
output will be
2
3
1
*/


// run the index.html file to see the output in the browser console
// inspect -> sources 
// go to the file and add breakpoints to see the call stack in action
// run the html file and check the call stack in the browser console