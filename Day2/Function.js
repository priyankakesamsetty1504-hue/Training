// Function without arguments and without return value
function testleafsum() {
    let a=10;
    let b=20;
    let sum=a+b;
    console.log("The sum of a and b is: " + sum);
}
testleafsum()

// Function without arguments and without return value
function testleaffunction() {
    console.log("This is a test leaf function.");
}   

testleaffunction();  

// Function with arguments and with return value
function sumwitheargs(a,b) {
    c=a+b;
    return c;
}
    console.log(sumwitheargs(10,20));

// Function with arguments and without return value
function multiplywitheargs(x,y) {  
    d=x*y;
    console.log("The multiplication of x and y is: " + d);
}
multiplywitheargs(5,4);