
function testleafsum() {
    let a=10;
    let b=20;
    let sum=a+b;
    console.log("The sum of a and b is: " + sum);
}
testleafsum()

function testleaffunction() {
    console.log("This is a test leaf function.");
}   

testleaffunction();      

function sumwitheargs(a,b) {
    c=a+b;
    return c;
    console.log("The sum of a and b is: " + c);
}
sumwitheargs(10,20);