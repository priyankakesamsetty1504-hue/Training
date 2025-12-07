let username : string|number ;
username="Testleaf";
username=90000
type productDataType= number|string|boolean;
let productData:productDataType;
productData=12345;
productData="Laptop";

//alias name for values
type supportedbrowsers= "chrome" | "firefox" | "safari" | "edge";
let browser1:supportedbrowsers;
browser1="chrome";  
let browser2:supportedbrowsers;
browser2="firefox";
//let browser3:supportedbrowsers;
//browser3="opera"; //error: opera is not assignable to type 'supportedbrowsers'  
function launchBrowser(browser:supportedbrowsers){
    if(browser==="chrome"){
        console.log("Launching Chrome Browser");
    }
}launchBrowser(browser1);
//Intersection Types
type Admin={
    adminname:string;
    privileges:string[];
    name:string;  
}
type Employee={
    name1:string;   
    startDate:string;
}
type QA_Engineer =Admin & Employee;
const user_profile: QA_Engineer={ 
    adminname:"Testleaf",
    privileges:['engineer'],
    name:"priyanka", 
    startDate:"12-06-2024",
    name1:"Rani"
}
console.log("User Profile Details:",user_profile);
console.log("Admin Name:",user_profile.adminname);
console.log("Privileges:",user_profile.privileges);
console.log("Employee Name:",user_profile.name);
console.log("Start Date:",user_profile.startDate);