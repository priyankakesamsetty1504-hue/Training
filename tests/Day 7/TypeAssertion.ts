
//using angular barcket
let firstName : string = "Priyanka";
let response : any = "Welcome to Testleaf";
let myresponse = <string> response
console.log(myresponse.toUpperCase());

//using as syntax
let lastName : string = "Rani";
let res : any = "Hello Testleaf";
let myres = res as string;
console.log(myres.toLowerCase());