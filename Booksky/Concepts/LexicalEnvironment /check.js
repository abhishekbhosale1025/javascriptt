const a = 100;

function check() {
    var a = 200;
    console.log(a); // 200
}

console.log(a); // 100
check();