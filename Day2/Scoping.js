//scoping in JS
//VAR SCOPING IS BLOCK SCOPED
//var companyName = "Microsoft";

if(true){
    var companyName = "Google";
    console.log("accessing var inside if block: "+companyName);
}
console.log("accessing var outside if block: "+companyName);

if(true){
    let company = "Microssoft";
    console.log("accessing let inside if block: "+company);
}
console.log("accessing let outside if block: "+company);

if(true){
    const company1 = "TESTLEAF";
    console.log("accessing let inside if block: "+company1);
}
console.log("accessing let outside if block: "+company1);