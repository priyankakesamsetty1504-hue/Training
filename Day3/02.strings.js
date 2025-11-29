/*String Declaration

1.String Literal
2.Object Literal */
//string literal
let companyName="Testleaf";
let firmName="Testleaf";
console.log(companyName===firmName); //both are stored in same memory location

//object literal
let city=new String("Chennai");
let town=new String("Chennai");
console.log(city===town); //both are stored in different memory location

//string methods
//Escape sequences\,\n,\t
let message="Welcome to \"Testleaf\" \nYour training starts from\tMonday.";
console.log(message);
//concatenation --> comcat()
//+
let testCase ="Create a new lead";
let testcaseId=101;
//let resultconcat= testcaseId.toString.concat(testCase);
//console.log(resultconcat);

//template literal
function funName(Tcases)
{
    let output = `there are ${Tcases} test cases to execute`;
    console.log(output);
}
funName(25);

//length-property
let name="Testleaf";
console.log(name.length);

//charAt()
console.log(`The charAt of 2 of the string is ${name.charAt(2)}`);

//InderxOf()
console.log(`The indexOf of l in the string is ${name.indexOf('l')}`);

//slice()
let outputslice=name.slice(2,5);
console.log(`The slice of the string is ${outputslice}`);
console.log(outputslice);

let outputslice2=name.slice(-4,-1);
console.log(`The slice of the string using negative index is ${outputslice2}`);
let outputslice3=name.slice(3);
console.log(outputslice3);
//substring()
