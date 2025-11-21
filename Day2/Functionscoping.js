function greet() {
    var message = "Hello, World!";
    console.log("accessing var inside the function block",message);
}

if(true) {
console.log("accessing var outside the function block",message);
}
