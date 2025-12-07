let companyname="Testleaf";

let value :unknown;
value=123;
value="Hello";
value=true;
console.log("Company Name is:",companyname);
console.log("Value is:",value);
if(typeof value==="string"){
    console.log("String Length is:",value.length);
    console.log("Uppercase Value is:",value.toUpperCase());
    console.log("Lowercase Value is:",value.toLowerCase());
    console.log("Includes 'lo':",value.includes("lo"));
    console.log("Character at index 2:",value.charAt(2));
    console.log("Substring (1,4):",value.substring(1,4));   
    console.log("Split by 'e':",value.split("e"));
}

function infiniteLoop():never{
    while(true){
        console.log("This is an infinite loop");
    }
}

// let user: [number, string, boolean];
// user=[1,"John",true];
// console.log("User ID:",user[0]);
// console.log("User Name:",user[1]);
// console.log("Is Active:",user[2]);
