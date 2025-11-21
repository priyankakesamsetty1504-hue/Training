
//let will keep on reassoigning the value
let x=10;
x+=5; //x=x+5
console.log("The value of x after += is: " + x);
x-=5; //x=x-5
console.log("The value of x after -= is: " + x);
x*=5; //x=x*5
console.log("The value of x after *= is: " + x);
console.log(x++);//*post increment
console.log(x)
console.log(++x);//*pre increment

//const will not allow reassigning the value


const y=10;
y+=5; //x=x+5
console.log("The value of x after += is: " + y);
y-=5; //x=x-5
console.log("The value of x after -= is: " + y);
y*=5; //x=x*5
console.log("The value of x after *= is: " + y);
console.log(y++);
console.log(y)

//Strict Equality === and Loose Equality ==
console.log(5==="5");//false
console.log(5=="5");//true  
console.log(0==false);//true