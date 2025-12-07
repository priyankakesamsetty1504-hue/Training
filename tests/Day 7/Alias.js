var username;
username = "Testleaf";
username = 90000;
var productData;
productData = 12345;
productData = "Laptop";
var browser1;
browser1 = "chrome";
var browser2;
browser2 = "firefox";
//let browser3:supportedbrowsers;
//browser3="opera"; //error: opera is not assignable to type 'supportedbrowsers'  
function launchBrowser(browser) {
    if (browser === "chrome") {
        console.log("Launching Chrome Browser");
    }
}
launchBrowser(browser1);
var user_profile = {
    adminname: "Testleaf",
    privileges: ['engineer'],
    name: "priyanka",
    startDate: "12-06-2024",
};
console.log("User Profile Details:", user_profile);
console.log("Admin Name:", user_profile.adminname);
console.log("Privileges:", user_profile.privileges);
console.log("Employee Name:", user_profile.name);
console.log("Start Date:", user_profile.startDate);
