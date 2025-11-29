//named function
function PWNOnv25ArgsRe(a,b)
{
   /* let b=20
    let a=10*/
c=a+b;
return c;
}
console.log(PWNOnv25ArgsRe(10,20));

//function expression

let funName=function()
{
    console.log("This is a function expression");
}
funName();

//arrow function
let funName1=()=>{
    console.log("This is an arrow function");
}   
funName1();

//single line arrow function
const funName3 = (a,b) => a+b;
console.log(funName3(10,20));
